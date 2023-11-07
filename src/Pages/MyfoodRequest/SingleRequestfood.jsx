/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const SingleRequestfood = ({food , foods , setFoods}) => {
  
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
        
          fetch(`http://localhost:5000/foodRequests/${id}`,{
             method: 'DELETE'
          })
          .then(res=> res.json())
          .then(data=>{
             console.log(data);
             if(data.deletedCount>0){
                    Swal.fire(
             'Canceled!',
             'Your Request has been canceled.',
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
        <div className="flex py-3 h-[90%] flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
  <div className="relative rounded-t-xl overflow-hidden">
  </div>
  <div className="p-4 md:p-5">
    <h3 className="">
      <span className="text-lg font-bold text-gray-800 dark:text-white">Donator Name :</span> {food.donatorName}
    </h3>
    <p><span className="text-lg font-bold text-gray-800 dark:text-white mr-1">Pickup Location:
</span> {food.pickupLocation}</p>

<p><span className="text-lg font-bold text-gray-800 dark:text-white  mr-1">
Expired Date:
</span> {food.expireddate} </p>
<p><span className="text-lg font-bold text-gray-800 dark:text-white  mr-1">
Request Date:
</span> {food.requestDate} </p>
    <div className="flex-shrink-0 group block my-3">
  <div className="flex items-center">
    <div className="ml-3">
      <h3 className="font-semibold text-gray-800 dark:text-white"></h3>
    </div>
  </div>
</div>
   
   <div>
   <p> <span className="text-lg font-bold text-gray-800 dark:text-white  mr-1"> Donation Amount :
    </span>

    {food.donationMoney} $</p>

   </div>
   <button onClick= {()=>handelDelete(food._id)}  type="button" className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-500 border border-transparent font-semibold text-white hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
       Cancel Request
       </button>
  </div>
     
    </div>
    );
};

export default SingleRequestfood;