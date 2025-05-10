import useAxiosSecure from "../../../Hook/useAxiosSecure";
import AllUserTanStackQuery from "../../../Hook/AllUserTanStackQuery";
import Swal from "sweetalert2";

const AllUser = () => {
  const AxiosSecure = useAxiosSecure();
  const [users, refetch] = AllUserTanStackQuery();

  // Delete user handler
  const handleDelete = async (id) => {
    const res = await AxiosSecure.delete(`/users/${id}`);
    console.log(res.data);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Admin is Deleted",
      showConfirmButton: false,
      timer: 1000,
    });
    refetch();
  };

  //delete admin
  const handleDeleteAdmin = async (user) => {
    const { _id, ...data } = user;

    const updatedUser = {
      ...data,
      role: "User",
    };
    const res = await AxiosSecure.patch(`/users/${_id}`, updatedUser);
    console.log(res.data);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Change The Role",
      showConfirmButton: false,
      timer: 1000,
    });
    refetch();
  };

  // Make admin handler
  const handleMakeAdmin = async (id) => {
    const { _id, ...data } = id;

    const updatedAdmin = {
      ...data,
      role: "Admin",
    };
    const res = await AxiosSecure.patch(`/users/${_id}`, updatedAdmin);
    console.log(res.data);
        Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Change The Role",
      showConfirmButton: false,
      timer: 1000,
    });
    refetch();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">
        All Users: {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-green-300 text-gray-900">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Create Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-gray-500">
                <td>{index + 1}</td>
                <td>{user.UserName}</td>
                <td>{user.Email}</td>
                <td>{user.role || "User"}</td>
                <td>
                  {user.role === "Admin" ? (
                    <button
                      onClick={() => handleDeleteAdmin(user)}
                      className=" btn btn-sm  text-white bg-yellow-500 border-none hover:bg-yellow-800 font-medium"
                    >
                      Delete Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm text-blue-50 btn-success"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
