import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const PaymentHistory = () => {
    const axiosSecure=useAxiosSecure()
    const [paymentData, setPaymentData]=useState()
    

    useEffect( async()=>{
        const res=await axiosSecure.get()
        console.log(res.data)
         setPaymentData(res.data)
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default PaymentHistory;