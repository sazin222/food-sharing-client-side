import Navber from "../Home/Navber";
import ManageSingleFoodDetails from "./ManageSingleFoodDetails";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const ManageSingleFood = () => {
  const [RequestFoods, setRequestedFoods] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user?.email) {
      fetch(`https://community-food-sharing-server-ten.vercel.app/manages/${user.email}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRequestedFoods(data);
        });
    }
  }, [user?.email]);
  return (
    <div>
      <Navber></Navber>
      <Helmet>
        <title>Manage Single Food</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {RequestFoods.map((RequestFood) => (
          <ManageSingleFoodDetails
            key={RequestFood._id}
            RequestFood={RequestFood}
          ></ManageSingleFoodDetails>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageSingleFood;
