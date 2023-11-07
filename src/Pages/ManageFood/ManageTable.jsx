/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ManageTable = ({item}) => {
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
                 <Link to={`/manageFoodUpate/${item._id}`}>
                 <button className="btn p-1 rounded bg-green-500 text-white">Edit</button>
                 </Link>
                  <button className="btn p-1 bg-red-500 text-white rounded ">Delete</button>
                  <button className="btn p-1 bg-green-500 text-white rounded ">Manage</button>
                </div>
              </td>
            </tr>
       
    );
};

export default ManageTable;