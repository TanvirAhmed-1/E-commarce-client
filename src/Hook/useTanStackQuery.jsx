import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTanStackQuery = () => {
    const axiosSecure = useAxiosSecure();

    const { data: product = [], isLoading, refetch } = useQuery({
        queryKey: ["productData"],
        queryFn: async () => {
            const res = await axiosSecure.get("/products");
            return res.data;
        }
    });

    return [product, isLoading, refetch];
};

export default useTanStackQuery;
