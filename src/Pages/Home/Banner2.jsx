const Banner2 = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* <div className="max-w-2xl text-center mx-auto">
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Welcome to Our Food Sharing  <span className="text-green-600">Community</span></h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Share the Bounty, Reduce Food Waste</p>
      </div> */}

        <div className="mt-10 relative max-w-5xl mx-auto">
          <div
            className="w-full
         object-cover h-96 sm:h-[480px] bg-[url('https://i.ibb.co/YbJ3tTZ/banner3-jpg.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"
          ></div>

          <div className="absolute inset-0 w-full h-full">
            <div className="flex space-y-4 flex-col justify-center items-center w-full h-full">
              <h1
                className=" text-3xl lg:text-5xl font-bold text-white "
                style={{
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  background: "linear-gradient(to right, 	#00A36C, #FFFFFF)",
                  WebkitBackgroundClip: "text",
                }}
              >
                Build a Beautiful World.
              </h1>
              <p className="text-xl  text-white">
                Charity organizations. <br></br>
                Your Help Turn Into Smiles.
               
              </p>
            </div>
          </div>

          <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
            <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
          </div>

          <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
