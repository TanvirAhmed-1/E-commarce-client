import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const AllUserTanStackQuery = () => {
    const AxiosSecure=useAxiosSecure()


    const {data:user=[],refetch}=useQuery({
        queryKey:["AllUser"],
        queryFn:async()=>{
         const res=await AxiosSecure.get("/users") 
         console.log(res.data) 
         return res.data

        }
    })
    return [user,refetch]
};

export default AllUserTanStackQuery;