import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AgencySideMenu from "./components/AgencySideMenu";
import Home from "./pages/Home";

function Layout() {
  return (
    <div className="grid grid-rows-layout grid-cols-[250px_1fr] n">
    
      <header className="row-span-1 col-span-full text-white">
        {/* <Navbar /> */}
      </header>

    
      {/* <aside className="row-span-2 col-span-1  text-white">
        <AgencySideMenu />
      </aside> */}
      <aside className="row-span-2 col-span-1  text-white">
        <SideMenu />
      </aside>

      <main className="row-span-2 col-span-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
      <footer className="row-span-1 col-span-full border ">
        {/* <Footer/> */}
      </footer>
    </div>
  );
}

export default Layout;
