import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import Footer from "../component/Footer";

const Mainlayout = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;