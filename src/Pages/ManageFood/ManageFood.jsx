import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Navber from "../Home/Navber";

const ManageFood = () => {
    const [foods, setFoods]= useState([])
    console.log(foods);
    const axiosSecure= useAxiosSecure()
    const URL = '/managefoods';
    useEffect(() => {
      axiosSecure.get(URL)
      .then(res=>{
        setFoods(res.data)
      })

    }, [URL,axiosSecure]);

    
    return (
        <div>
            <Navber></Navber>
       
           
        </div>
    );
};

export default ManageFood;