// import React from "react";
import PropTypes from 'prop-types';
import SidebarAdmin from "./SidebarAdmin";
import NavbarDashboard from "./NavbarDashboard";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavbarDashboard />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
};

// Menambahkan PropTypes untuk children
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
