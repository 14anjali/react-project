import React from "react";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout