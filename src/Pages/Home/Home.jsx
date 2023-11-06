import Footer from "../Footer/Footer";
import Banner from "./Banner";
import Navber from "./Navber";
import ShortFood from "./ShortFood";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <ShortFood></ShortFood>
            <Footer></Footer>
        </div>
    );
};

export default Home;