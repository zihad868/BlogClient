import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />  
        </div>
    );
};

export default Root;