import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ManageSingleFoodDetails = ({ RequestFood , RequestFoods,setRequestedFoods }) => {
  
  const handelDeliver= foodName =>{
    console.log(foodName);
    
      fetch(`https://community-food-sharing-server-ten.vercel.app/foodDelivery/${foodName}`,{
         method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
         console.log(data);
         if(data.deletedCount>0){
          Swal.fire({
            title: 'Success',
            text: 'Food Delivery successfully',
            icon: 'Success',
            confirmButtonText: 'Cool'
          })

         const remaining = RequestFoods.filter(pro=> pro.foodName !== foodName) 
         setRequestedFoods(remaining)
         }
      })

     }
   
  
  return (
    <div className=" mt-6">
      <div
        className="flex h-[90%] flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
        <div className="relative rounded-t-xl overflow-hidden">
          <img
            className="w-full h-full mx-auto top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={RequestFood?.requesterpic}
            alt="Image Description"
          />
        </div>
        <div className="p-4 md:p-5">
          <div className="flex-shrink-0 group block my-3">
            <div className="flex items-center">
              <div className="ml-3">
                <h3 className="dark:text-white">
                  <span className="text-lg font-bold mr-2">
                    Requester Name:
                  </span>
                  {RequestFood?.resqester}
                </h3>
                <h3 className="">
                  <span className="text-lg font-bold mr-2">
                    Requester Email:
                  </span>
                  {RequestFood?.email}
                </h3>
                <h3 className="">
                  <span className="text-lg font-bold mr-2">Request Date :</span>
                  {RequestFood?.requestDate}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <button
        onClick={()=>handelDeliver(RequestFood.
          foodName)}
          type="button"
          className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Delivered
        </button>
      </div>
    </div>
  );
};

export default ManageSingleFoodDetails;
