import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ShortFoodCard from "./ShortFoodCard";
import { Link } from "react-router-dom";


const ShortFood = () => {
    const [foods, setFoods]= useState([])
    const axiosSecure= useAxiosSecure()
    const URL = '/foods/short';
    useEffect(() => {
      axiosSecure.get(URL)
      .then(res=>{
        setFoods(res.data)
      })

    }, [URL,axiosSecure]);

    return (
        <div>
          <div className="text-center">
          <h1 className="text-center text-3xl lg:text-5xl font-bold mt-6"  style={{backgroundClip:'text',  WebkitTextFillColor: 'transparent',  background: 'linear-gradient(to right, #90EE90, #056608)',WebkitBackgroundClip:'text',  }}>Featured Foods
           </h1>
           <blockquote className="relative text-center max-w-lg mx-auto">
  <div className="relative z-10">
    <p className=" text-gray-400">
      <em className="relative">
        <span className="relative z-10 dark:text-white">These featured foods represent the heart of our community, with each item ready to serve those in need. From fresh produce to pantry staples</span>
      </em>
    </p>
  </div>
</blockquote>
          </div>
        
        <div className="grid mt-8  grid-cols-1 gap-4 lg:grid-cols-3">
            {
              foods.map(food=> <ShortFoodCard key={food._id}
                food={food}
              ></ShortFoodCard>)  
            }
        </div>
      
      <div className="text-center mb-3">
        
      <Link to={"/availableFoods"}> 
      <button  type="button" className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
       See All
       </button>
      </Link>
      </div>

        </div>
    );
};

export default ShortFood;