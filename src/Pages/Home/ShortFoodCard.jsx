/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShortFoodCard = ({food}) => {
  
    return (
        <div>
         <div className="flex h-[90%] flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
  <div className="relative rounded-t-xl overflow-hidden">
    <img className="w-full h-full mx-auto top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={food.foodImage} alt="Image Description"/>
  </div>
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      {food.foodName}
    </h3>
   
    <div className="flex-shrink-0 group block my-3">
  <div className="flex items-center">
    <img className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full" src={food.donator?.donatorImage} />
    <div className="ml-3">
      <h3 className="font-semibold text-gray-800 dark:text-white">{food.donator?.donatorName}</h3>
    </div>
  </div>
</div>
   
   <div>
   <p> <span className="font-semibold mr-1">Food Quantity:
    </span>

    {food.foodQuantity} person to be served.</p>

    <p><span className="font-semibold mr-1">Pickup Location:
</span> {food.pickupLocation}</p>

    <p><span className="font-semibold mr-1">
expired Date:
</span> {food.expireddate} December</p>

   </div>

    <p className="mt-1 text-gray-800 dark:text-gray-400">
      {food.additionalNotes}
    </p>
  </div>
  <Link to={`/fooddetails/${food._id}`}>
  <button type="button" className="py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
       View Details
       </button>
  </Link>
</div>

       </div>
    );
};

export default ShortFoodCard;