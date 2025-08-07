import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import DashboardNav from "../../components/dashboard/DashboardNav";

export default function DashboardLayout() {
    return(

    <div>
        <DashboardNav />

        <Outlet />
        
    </div>


    );
}