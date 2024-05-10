import { useState, useEffect } from "react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BiHome } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const SidebarUser = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const Menus = useMemo(() => [
    { id: 1, title: "Dashboard", icon: <BiHome />, path: "/dashboarduser" },
    { id: 2, title: "Data Peminjaman", icon: <BiTask />, path: "/datapeminjamanuser" },
    { id: 3, title: "Riwayat", icon: <HiOutlineDocumentDuplicate />, path: "/riwayatpeminjamanuser" },
  ], []);

  useEffect(() => {
    // Mencari menu yang sesuai dengan lokasi saat ini
    const currentMenu = Menus.find(menu => menu.path === location.pathname);
    if (currentMenu) {
      setSelectedMenu(currentMenu.id);
    }
  }, [location.pathname, Menus]);

  const handleMenuClick = (id, path) => {
    setSelectedMenu(id);
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-18"} bg-primary h-screen p-4  pt-7 relative duration-300`}
      >
        <img
          src="./src/assets/control.jpeg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="Control"
        />
        <div className="flex gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
            onClick={() => navigate("/ProfilUser")} // Navigasi saat ikon diklik
            style={{ cursor: 'pointer' }} // Tambahkan gaya kursor pointer
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            User
          </h1>
        </div>
        <ul className="pt-1">
          {Menus.map((Menu) => (
            <li
              key={Menu.id}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-200 text-base items-center gap-x-4 mt-2 ${selectedMenu === Menu.id ? "bg-blue-400 ml-2" : ""}`}
              onClick={() => handleMenuClick(Menu.id, Menu.path)}
              style={{ width: open ? 'auto' : '50%' }} // Atur lebar saat sidebar dibuka atau ditutup
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarUser;
