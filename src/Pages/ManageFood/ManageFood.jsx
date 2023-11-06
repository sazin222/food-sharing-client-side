import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Navber from "../Home/Navber";
import { AuthContext } from "../../Provider/AuthProvider";
import ManageTable from "./ManageTable";
import Footer from "../Footer/Footer";

const ManageFood = () => {
  const {user} = useContext(AuthContext)
    const [foods, setFoods]= useState([])
    console.log(foods);
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
            <Navber></Navber>
      
           <div className="mt-20">
           
  <div className="flex justify-center ">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Food Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Food Quantity</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Pickup Location</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Donner Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            

          {
              foods.map(item=> <ManageTable 
               key={item._id}
               item={item}
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