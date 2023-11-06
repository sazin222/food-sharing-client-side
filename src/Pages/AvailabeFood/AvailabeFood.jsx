import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Navber from "../Home/Navber";
import FoodCard from "./FoodCard";
import Footer from "../Footer/Footer";
import Search from "./Search";


const AvailabeFood = () => {
    const [foods, setFoods]= useState([])
    const axiosSecure= useAxiosSecure()
    const URL = '/foods';
    useEffect(() => {
      axiosSecure.get(URL)
      .then(res=>{
        setFoods(res.data)
      })

    }, [URL,axiosSecure]);
    return (
        <div>
           <Navber></Navber>
          
           <Search></Search>
           <h1 className="text-center text-3xl lg:text-4xl font-bold mt-6"  style={{backgroundClip:'text',  WebkitTextFillColor: 'transparent',  background: 'linear-gradient(to right, #90EE90, #056608)',WebkitBackgroundClip:'text',  }}>Discover Available Food Options
           </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-4 lg:my-10 ">
          {
            foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
           }
          </div>
          <Footer></Footer>
        </div>
    );
};

export default AvailabeFood;