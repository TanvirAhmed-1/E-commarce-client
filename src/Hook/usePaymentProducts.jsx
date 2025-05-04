import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePaymentProducts = () => {
    const axiosSecure=useAxiosSecure()
    const { data:payment=[],refetch}=useQuery({
        queryKey:["user order"],
        queryFn: async ()=>{
            const res=await axiosSecure.get("/user/admin/order")
            return res.data
        }

    })
    return [payment,refetch]
};

export default usePaymentProducts;