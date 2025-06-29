import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Components/Authontation/Authorization";
import { useContext } from "react";

const useTanStackQuery = () => {
    const axiosSecure = useAxiosSecure();
    const {users } = useContext(AuthContext);

    const { data: product = [], isLoading, refetch } = useQuery({
        queryKey: ["productData, users?.email"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/favorite/${users.email}`);
            return res.data;
        }
    });

    return [product, isLoading, refetch];
};

export default useTanStackQuery;
