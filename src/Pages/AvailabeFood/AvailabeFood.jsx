import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Navber from "../Home/Navber";
import FoodCard from "./FoodCard";
import Footer from "../Footer/Footer";





const AvailabeFood = () => {
    const [foods, setFoods]= useState([])
    const axiosSecure= useAxiosSecure()
    const [foodname, setFoodName]=useState('')
    const handelSearch= e=>{
      e.preventDefault()
      const form = e.target
      const searchItem = form.text.value
      setFoodName(searchItem)
      console.log(searchItem);
      
    }
    console.log(foodname);
    const URL = `/foods?foodName=${foodname}`;
    useEffect(() => {
      axiosSecure.get(URL)
      .then(res=>{
        setFoods(res.data)
      })

    }, [URL,axiosSecure]); 


    
    return (
        <div>
           <Navber></Navber>
            
           <div className="relative overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-3 lg:px-8 py-5 sm:py-10">
    <div className="text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
        Insights
      </h1>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Search Your Food By Food Name
      </p>

      <div className="mt- sm:mt-7 mx-auto max-w-xl relative">
        <form onSubmit={handelSearch} >
          <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <div className="flex-[1_0_0%]">
              <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search Food</span></label>
              <input type="text" name="text" id="hs-search-article-1" className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400" placeholder="Search Food"/>
            </div>
            <div className="flex-[0_0_auto]">
              <button type="submit" className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
          <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth={'10'} strokeLinecap="round"/>
            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth={'10'} strokeLinecap="round"/>
            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth={'10'} strokeLinecap="round"/>
          </svg>
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
          <svg className="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth={'7'} strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

           
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