import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Navber from "../Home/Navber";
import ManageTable from "./ManageTable";
import Footer from "../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const ManageFood = () => {
  const {user} = useAuth()
    const [foods, setFoods]= useState([])
    const axiosSecure= useAxiosSecure()
    const URL = `/managefoods?email=${user?.email}`;
    useEffect(() => {
      axiosSecure.get(URL)
      .then(res=>{
        setFoods(res.data)
      })

    }, [URL,axiosSecure]);

    
    return (
        <div>
          <Helmet>
            <title>Manage My Food</title>
          </Helmet>
            <Navber></Navber>
                      
     <div className="relative overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-3 lg:px-8 py-5 sm:py-10">
    <div className="text-center">
    <h1 className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-gray-200">
    Fresh Additions to Your Menu
      </h1>
      <div className="mt- sm:mt-7 mx-auto max-w-xl relative">
      
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


           <div className="my-7">
           
  <div className="flex justify-center items-center ">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Food Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Food Quantity</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Pickup Location</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Expired Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Donner Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            

          {
              foods.map(item=> <ManageTable 
               key={item._id}
               item={item}
               foods={foods}
               setFoods={setFoods}
              >

              </ManageTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
 
</div>

           </div>
           <Footer></Footer>
        </div>
    );
};

export default ManageFood;