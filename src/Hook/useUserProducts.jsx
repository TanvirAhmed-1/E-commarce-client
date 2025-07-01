import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Components/Authontation/Authorization";
import { useContext } from "react";


const useUserProducts= () => {
    const axiosSecure=useAxiosSecure()
    const {users } = useContext(AuthContext);
    const { data:userOrder=[],refetch}=useQuery({
       queryKey: ["userOrder", users?.email],
        queryFn: async ()=>{
            const res=await axiosSecure.get(`order/${users?.email}`)
            return res.data
        }

    })
    return [userOrder,refetch]
};

export default useUserProducts;