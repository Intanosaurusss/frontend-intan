import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import FormTambahRuang from "./FormTambahRuang";
import { useState } from "react";
import EditRuang from "../pages/Edit/EditRuang";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DataBarang = () => {
  const [showTambahRuangPopup, setShowTambahRuangPopup] = useState(false); // State untuk mengontrol tampilan popup tambah ruang
  const [showEditRuangPopup, setShowEditRuangPopup] = useState(false); // State untuk mengontrol tampilan popup edit ruang

  const handleEditRuangClick = () => {
    setShowEditRuangPopup(true);
  };

  // Fungsi untuk menutup popup edit ruang
  const handleCloseEditRuang = () => {
    setShowEditRuangPopup(false);
  };

  // Fungsi untuk menutup popup tambah ruang
  const handleCloseTambahRuang = () => {
    setShowTambahRuangPopup(false);
  };

  const navigate = useNavigate();

  const handlehapusruang = () => {
    // Menampilkan pesan toast
    toast.success("yeay! data ruang berhasil dihapus!", {
      position: "top-center",
      duration: 4000,
    });

    // Mengarahkan pengguna ke halaman landing page
    navigate('/dataruang');
  };

  return (
    <Layout>
      <style>
        {`
        .flex-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 10px;
        }
        .title {
          margin-top: 0.8rem;
          color: #333;
          margin-bottom: 1rem;
          padding-left: 10px;
          display: flex;
          align-items: center;
          font-family: 'Poppins', sans-serif;
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
        <h1 className="title">Data Ruang</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4" onClick={() => setShowTambahRuangPopup(true)}>Tambah</button>
      </div>
      {/* Tampilkan popup tambah ruang jika showTambahRuangPopup bernilai true */}
      {showTambahRuangPopup && <FormTambahRuang onClose={handleCloseTambahRuang} />}

      <PaginateComponent>
      </PaginateComponent>
      <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem', }}>No</th>
            <th style={{ width: '35%', textAlign: 'center', background: '#5896FF' }}>Ruang</th>
            <th style={{ width: '35%', textAlign: 'center', background: '#5896FF' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3">1</td>
            <td className="p-3">ruang lab pplg</td>
            <td className="p-3" style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="#" className="text-blue-500 hover:text-gray-100 mx-3">
                <HiPencil className="text-base" style={{ display: 'inline-block' }} onClick={handleEditRuangClick} />
              </a>
              {/* Tampilkan popup edit ruang jika showEditRuangPopup bernilai true */}
              {showEditRuangPopup && <EditRuang onClose={handleCloseEditRuang} />}
              <a href="#" className="text-red-500 hover:text-gray-100 ml-3" onClick={handlehapusruang}>
                <MdDelete className="text-base" style={{ display: 'inline-block' }} />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default DataBarang;
