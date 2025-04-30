import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrderTanStackQuery = () => {
    const axiosSecure = useAxiosSecure();

    const { data:order = [],refetch } = useQuery({
        queryKey: ["OrderData"],
        queryFn: async () => {
            const res = await axiosSecure.get("/addToCard");
            return res.data;
        }
    });

    return [order,refetch];
};

export default useOrderTanStackQuery;
