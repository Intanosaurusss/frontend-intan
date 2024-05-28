import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";
import axios from "axios";
import { useEffect, useState } from "react";
import FormTambahUser from './FormTambahUser';
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import EditUser from "./Edit/EditUser";
import toast from 'react-hot-toast';


const DataUser = () => {
  const [dataUser, setDataUser] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const [showEditUserPopup, setShowEditUserPopup] = useState(false);

  const handleTambahUserClick = () => {
    setShowPopup(true);
  };

  const handleCloseForm = () => {
    setShowPopup(false);
  };

  const handleEditUserClick = (user) => {
    setEditUserData(user);
    setShowEditUserPopup(true);
  };

  const handleCloseEditForm = () => {
    setShowEditUserPopup(false);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users')
      .then((response) => {
        setDataUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data user:', error);
      });
  }, []);

  const handlehapususer = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/users/${id}`)
      .then(() => {
        setDataUser(dataUser.filter((user) => user.id !== id));
        toast.success("Data user berhasil dihapus", {
          position: "top-center",
          duration: 4000,
        });
        window.location.reload(); // Reload halaman setelah penghapusan berhasil
      })
      .catch((error) => {
        console.error('Error deleting data user:', error);
        toast.error("Gagal menghapus data user", {
          position: "top-center",
          duration: 4000,
        });
      });
  };

  return (
    <Layout>
      <style>
        {`
        .title {
          margin-top: 0.8rem;
          padding-left: 10px;
          display: flex;
          // font-weight: bold;
        }
        .table {
          width: 97%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        th,
        td {
          padding: 12px 20px;
          border: 1px solid #ddd;
          font-size: 0.8rem;
          font-family: 'Poppins', sans-serif;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        tbody tr {
          border-bottom: none;
        }
        `}
      </style>
      <div className="flex-container">
        <h1 className="title">Data User</h1>
        <div className="button-container" style={{ gap: '10px' }}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ml-4 mb-2"
            onClick={handleTambahUserClick}
          >
            Tambah
          </button>
        </div>
      </div>
      {showPopup && <FormTambahUser onClose={handleCloseForm} />}
      <>
        <PaginateComponent />
      </>
      <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem', }}>No</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF' }}>Nama</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF' }}>Email</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF' }}>Password</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF' }}>NISN</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((user, index) => (
            <tr key={index} className="bg-blue-200 lg:text-black">
              <td className="p-3 font-medium capitalize">{index + 1}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.password}</td>
              <td className="p-3">{user.nisn}</td>
              <td className="p-3 text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                <HiPencil
                  className="text-blue-500 hover:text-gray-100 mx-3"
                  onClick={() => handleEditUserClick(user)}
                />
                <MdDelete
                  className="text-red-500 hover:text-gray-100 ml-3"
                  onClick={() => handlehapususer(user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showEditUserPopup && <EditUser onClose={handleCloseEditForm} user={editUserData} />}
    </Layout>
  );
}

export default DataUser;
