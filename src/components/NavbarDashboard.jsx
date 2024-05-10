import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const NavbarDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = await toast.promise(
      // Tampilkan notifikasi konfirmasi
      new Promise((resolve) => {
        resolve(window.confirm("Apakah Anda yakin untuk logout?"));
      }),
      {
        loading: 'Menunggu konfirmasi...',
        success: 'Logout Berhasil!',
        error: 'Logout Gagal.',
        duration: 4000,
        position: "top-center",
      }
    );

    if (confirmLogout) {
      try {
        const response = await axios.post('http://localhost:8000/api/logout', null, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (response.data.success) {
          localStorage.removeItem('userData');
          localStorage.removeItem('token');
          navigate('/');
        } else {
          toast.error("Logout Gagal. Coba lagi nanti.", {
            position: "top-center",
            duration: 4000,
          });
        }
      } catch (error) {
        console.error("Logout Gagal. Terjadi kesalahan pada server.", error);
        toast.error("Logout Gagal. Terjadi kesalahan pada server.", {
          position: "top-center",
          duration: 4000,
        });
      }
    }
  };

  return (
    <nav className="bg-gray-100 text-white p-2.5 w-full h-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Your brand/logo goes here if needed */}
        </div>
        <ul className="flex items-center">
          <li className="ml-3 relative">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 mb-4 text-blue-500 hover:text-blue-700 bg-red-300 hover:bg-red-400 rounded-lg"
            >
              <svg
                className="w-5 h-5 text-blue-500 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
