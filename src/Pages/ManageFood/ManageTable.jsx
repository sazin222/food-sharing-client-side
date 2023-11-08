/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageTable = ({item , foods, setFoods}) => {
  const handelDelete = id =>{
    console.log(id);
    Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!'
   }).then((result) => {
     if (result.isConfirmed) {
    
      fetch(`https://community-food-sharing-server-ten.vercel.app/foodDelete/${id}`,{
         method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
         console.log(data);
         if(data.deletedCount>0){
                Swal.fire(
         'Canceled!',
         'Delete Successfully.',
         'success'
       )      

         const remaining = foods.filter(pro=> pro._id !== id) 
            setFoods(remaining)
         }
      })

     }
   })

  }



    return (
     
        <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item?.foodName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.foodQuantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.pickupLocation}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.expireddate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                {item?.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                <div className="flex gap-3">
                 <Link to={`/manageFoodUpate/${item?._id}`}>
                 <button className="btn p-1 rounded bg-green-500 text-white">Edit</button>
                 </Link>
                  <button onClick= {()=>handelDelete(item?._id)} className="btn p-1 bg-red-500 text-white rounded ">Delete</button>
                 <Link to={`/managesingle/${item?._id}`}> 
                 <button className="btn p-1 bg-green-500 text-white rounded ">Manage</button>
                 </Link>
                </div>
              </td>
            </tr>
       
    );
};

export default ManageTable;