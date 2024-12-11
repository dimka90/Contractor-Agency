// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";

function Layout () {
  return (
    <div className="flex">
      <SideMenu/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
