import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home /> } /> 
            <Route path="posts" element={<Posts /> }/>
        </Routes>
    );
}