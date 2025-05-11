import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { AuthContext } from "../../../Components/Authontation/Authorization";
import usePaymentProducts from "../../../Hook/usepaymentProducts";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminHome = () => {
  const [stats, setStats] = useState({});
  const axiosSecure = useAxiosSecure();
  const { users } = useContext(AuthContext);
  const [payment] = usePaymentProducts();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axiosSecure.get("/admin/home");
        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };
    fetchStats();
  }, [axiosSecure]);

  const Pending = payment.filter((v) => v.order === "Pending");
  const Accept = payment.filter((v) => v.order === "Accept");
  const Delivery = payment.filter((v) => v.order === "Delivery");

  // Chart Data for Pie Chart
  const pieChartData = [
    { name: "Pending", value: Pending.length },
    { name: "Accepted", value: Accept.length },
    { name: "Delivered", value: Delivery.length },
  ];
  const pieColors = ["#FFD966", "#82ca9d", "#8884d8"];

  // Group Orders by Date
  const groupOrdersByDate = (orders, status) => {
    const filtered = orders.filter((v) => v.order === status);
    const grouped = {};
    filtered.forEach((item) => {
      const date = new Date(item.date).toLocaleDateString();
      grouped[date] = (grouped[date] || 0) + 1;
    });
    return grouped;
  };

  const combineOrderData = (deliveryData, acceptData) => {
    const allDates = Array.from(
      new Set([...Object.keys(deliveryData), ...Object.keys(acceptData)])
    );
    return allDates.map((date) => ({
      date,
      Delivery: deliveryData[date] || 0,
      Accept: acceptData[date] || 0,
    }));
  };

  const deliveryData = groupOrdersByDate(payment, "Delivery");
  const acceptData = groupOrdersByDate(payment, "Accept");
  const dailyOrderData = combineOrderData(deliveryData, acceptData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">Welcome to Admin</h1>
          <p className="text-gray-600">{users?.displayName}</p>
        </div>
        <img
          src={users?.photoURL}
          alt="Admin"
          className="w-14 h-14 rounded-full border border-gray-300"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-pink-400 p-5 rounded-xl text-white text-center shadow">
          <h2 className="text-lg  font-semibold">Total Orders</h2>
          <p className="text-3xl">{payment.length}</p>
        </div>
        <div className="bg-yellow-400 p-5 rounded-xl text-white text-center shadow">
          <h2 className="text-lg font-semibold">Customers</h2>
          <p className="text-3xl">{stats?.allUsers || 0}</p>
        </div>
        <div className="bg-red-400 p-5 rounded-xl text-white text-center shadow">
          <h2 className="text-lg font-semibold">Products</h2>
          <p className="text-3xl">{stats?.allProducts || 0}</p>
        </div>
        <div className="bg-blue-400 p-5 rounded-xl text-white text-center shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-3xl">{Pending?.length}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Order Status</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl text-black font-bold mb-4 text-center">Daily Orders Summary</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyOrderData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Delivery" fill="#8884d8" />
              <Bar dataKey="Accept" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
