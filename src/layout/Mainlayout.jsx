import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import Footer from "../component/Footer";

const Mainlayout = () => {
    return (
        <div>
            <div className="">
                <Navber></Navber>
            </div>
            <hr />
            <div className="container mx-auto mt-[66px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;