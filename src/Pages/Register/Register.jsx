import { Link } from "react-router-dom";
import Navber from "../Home/Navber";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";


const Register = () => {
    const {createUser,handleUpdateProfile}= useContext(AuthContext)
     
    const handelCreateUser = e =>{
      e.preventDefault() 
      const name= e.target.name.value
      const photo= e.target.photo.value
      const email = e.target.email.value
      const password = e.target.password.value
       
      if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{7,}$/.test(password)){
         Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: ' Please provide 6 characters or more in length, a capital letter and a special characters'
           
            
          }) 
          return 
      }


      createUser(email,password)
      .then(result=>{
        handleUpdateProfile(name, photo)
        console.log(result.user);
        Swal.fire({
            title: 'Successfully Register your account',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
      })
      .catch(error=>{
        console.log(error);
      })

    }



    return (
        <div>
        <Navber></Navber>
          <div className="relative overflow-hidden">
          <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
            <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
              <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
               Please register your  <span className="text-green-600 dark:text-blue-500">account</span>
              </h1>
              <p className="mt-3 text-base text-gray-500">
               Create your account and get the food or if you want donate your food
              </p>
        
              <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"></div>
        
              
              <form onSubmit={handelCreateUser}>
                <div className="mb-4">
                  <label htmlFor="hs-hero-name-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Full name</span></label>
                  <input type="text" name="name" id="hs-hero-name-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Full name" required/>
                </div>
                <div className="mb-4">
                  <label htmlFor="hs-hero-password-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Photo Url</span></label>
                  <input type="text" name="photo" id="hs-hero-password-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Photo Url " required/>
                </div>
        
                <div className="mb-4">
                  <label htmlFor="hs-hero-email-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
                  <input type="email" name="email" id="hs-hero-email-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Email address" required/>
                </div>
        
                <div className="mb-4">
                  <label htmlFor="hs-hero-password-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Password</span></label>
                  <input type="password" name="password" id="hs-hero-password-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Password" required/>
                </div>
                
        
                <div className="grid">
                  <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Register</button>
                </div>
                <p className="text-center mt-3 "> Already have an Account ? <Link to={"/login"} className="text-green-600">Login</Link></p>
              </form>
            </div>
          </div>
        
          <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://i.ibb.co/DkT7xpk/4957136-4957136.jpg')] bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
    );
};

export default Register;