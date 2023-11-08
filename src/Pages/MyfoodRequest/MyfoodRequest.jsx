
import Navber from "../Home/Navber";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SingleRequestfood from "./SingleRequestfood";
import Footer from "../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";


const MyfoodRequest = () => {
    const {user} = useAuth()
    const [foods, setFoods]= useState([])
    console.log(foods);
    const axiosSecure= useAxiosSecure()
    const URL = `/requestfood?email=${user?.email}`;
    useEffect(() => {
      axiosSecure.get(URL)
      .then(res=>{
        setFoods(res.data)
      })

    }, [URL,axiosSecure]);

    if(foods.length>0){
      return (
        <div>
        <Navber></Navber>
        <div className="text-center my-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-gray-200" style={{backgroundClip:'text',  WebkitTextFillColor: 'transparent',  background: 'linear-gradient(to right, 	#90EE90,  #056608 )',WebkitBackgroundClip:'text',}}>
       Your Requested Products
      </h1>
    </div>
            <div className="my-4 grid grid-cols-1 lg:grid-cols-2 ">
                {foods.map(food=> <SingleRequestfood 
                key={food._id}
                food={food}
                foods={foods}
                setFoods={setFoods}
                >

                </SingleRequestfood>)}
            </div>
          <Footer></Footer>
        </div>
    );
    } else{
      return (
        <div>
       <Navber></Navber>
          <div className="text-center h-full font-bold my-3 text-green-500 text-3xl"> 
             <h1>There is no request food</h1>
         </div>
         
        <div className="mt-5 lg:mt-28">
        <Footer></Footer>
        </div>
         
        </div>
     )
    }
};

export default MyfoodRequest;