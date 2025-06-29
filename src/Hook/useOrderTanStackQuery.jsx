import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Components/Authontation/Authorization";
import { useContext } from "react";

const useOrderTanStackQuery = () => {
    const axiosSecure = useAxiosSecure();
    const {users } = useContext(AuthContext);

    const { data:order = [],refetch } = useQuery({
        queryKey: ["OrderData, users?.email"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addToCard/${users?.email}`);
            return res.data;
        }
    });

    return [order,refetch];
};

export default useOrderTanStackQuery;
