// import React from "react";
import PropTypes from 'prop-types';
import SidebarUser from "./SidebarUser";
import NavbarDashboard from "../components/NavbarDashboard";

const LayoutUser = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SidebarUser />
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
LayoutUser.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutUser;
