import Footer from "../Footer/Footer";
import Abous from "./Abous";
import Banner from "./Banner";
import Navber from "./Navber";
import OurMission from "./OurMission";
import ShortFood from "./ShortFood";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <ShortFood></ShortFood>
            <Abous></Abous>
            <OurMission></OurMission>
            <Footer></Footer>
        </div>
    );
};

export default Home;