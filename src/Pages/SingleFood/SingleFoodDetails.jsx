import { useLoaderData } from "react-router-dom";
import Navber from "../Home/Navber";
import Footer from "../Footer/Footer";

const SingleFoodDetails = () => {
  const SingleFood = useLoaderData();
  console.log(SingleFood);

  return (
    <div>
      <Navber></Navber>
      <div className="max-w-[85rem] my-16 lg:mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-green-600 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              {" "}
              {SingleFood.foodName}{" "}
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400"></p>
            <div>
              <p>
                {" "}
                <span className="font-semibold mr-2">Donator Name :</span>
                {SingleFood.donatorName}
              </p>
              <p>
                {" "}
                <span className="font-semibold mr-2">
                  Food Pickup Location :
                </span>
                {SingleFood.pickupLocation}
              </p>
            </div>

            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
              <p>
                {" "}
                <span className="font-semibold mr-2">Food Quantity :</span>
                {SingleFood.foodQuantity} person to be served.
              </p>
              <p>
                {" "}
                <span className="font-semibold mr-2">Expired Date:</span>
                {SingleFood.expireddate} December
              </p>
            </div>
            {/* modal button */}

            <div className="text-center">
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-modal-recover-account"
              >
                Request
              </button>
            </div>

            <div
              id="hs-modal-recover-account"
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 sm:p-7">
                    <div className="text-center">
                      <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Request Form
                      </h2>
                    </div>

                    <div className="mt-5">
                      <form>
                        <div className="grid gap-y-4">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm mb-2 dark:text-white"
                            >
                              Email address
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                required
                                aria-describedby="email-error"
                              />
                              <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg
                                  className="h-5 w-5 text-red-500"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                              </div>
                            </div>
                            <p
                              className="hidden text-xs text-red-600 mt-2"
                              id="email-error"
                            >
                              Please include a valid email address so we can get
                              back to you
                            </p>
                          </div>

                          <button
                            type="submit"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          >
                            Request Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* modal finished */}
          </div>

          <div className="relative ml-4">
            <img
              className="w-full rounded-md"
              src={SingleFood.foodImage}
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SingleFoodDetails;
