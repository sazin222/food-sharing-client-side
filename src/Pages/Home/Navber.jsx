import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/image/logo.jpg-removebg-preview.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import("preline");
const Navber = () => {
  const { logOut, user } = useContext(AuthContext);

  const handelSingout = (e) => {
    e.preventDefault();
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Navlinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b-4 border-green-600 font-bold "
                          : ""
                      }
      
      >
        Home
      </NavLink>
      <NavLink
        to={"/availableFoods"}
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "border-b-4 border-green-600 font-bold "
          : ""
      }
      >
        Available Foods
      </NavLink>
      <NavLink
        to={"/addFood"}
        className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b-4 border-green-600 font-bold "
                          : ""
                      }
      >
        Add Food
      </NavLink>
      <NavLink
        to={"/manageFood"}
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "border-b-4 border-green-600 font-bold "
          : ""
      }
      >
        Manage My Foods
      </NavLink>
      <NavLink
        to={"/foodRequest"}
        className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "border-b-4 border-green-600 font-bold "
          : ""
      }
      >
        
        My Food Request
      </NavLink>
    </>
  );

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-4 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-7xl w-full mx-auto px-5 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center  justify-between">
          <div>
            <img className="w-28 lg:w-32" src={logo} alt="" />
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all  duration-300 basis-full grow sm:block"
          >
            <div className="flex text-base flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7 justify-center sm:justify-start">
              {Navlinks}

              <div>
                {user?.email ? (
                  <div className="hs-dropdown relative inline-flex">
                    <button
                      id="hs-dropdown-custom-trigger"
                      type="button"
                      className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <img
                        className="w-8 h-auto rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                      <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
                        {user.displayName}
                      </span>
                      <svg
                        className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth={"2"}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    <div
                      className="z-50 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                      aria-labelledby="hs-dropdown-custom-trigger"
                    >
                      <button
                         className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        onClick={handelSingout}
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-x-2 sm:ml-24">
                    <NavLink
                      to={"/login"}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "border-b-4 border-green-600 font-bold "
                          : ""
                      }
                    >
                      Log in
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
