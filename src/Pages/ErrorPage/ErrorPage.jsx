import { Link } from 'react-router-dom';
import errorPic from '../../../src/assets/image/errorpage.jpg.png'
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (

        <div className="text-center my-7 space-y-3">
           <Helmet>
         <title>Error page</title>
        </Helmet>
         <img className='mx-auto' src={errorPic} alt="" />
        <p className='font-bold'>404- PAGE NOT FOUND</p>
        <p>The page yor are looking for might have been removed had its name changed or temporary unavailable</p>
      <Link to={"/"}> 
      <button className="bnt btn-primary my-3 bg-green-600 text-white p-2 rounded-lg">Go to home page</button>
      </Link>
    </div>
    );
};

export default ErrorPage;