import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import EditServis from "../pages/Edit/EditServis";
import FormTambahServis from "./FormTambahServis";
import toast from 'react-hot-toast';


const DataServis = () => {
  const [dataServis, setDataServis] = useState([]);
  const [showEditServisPopup, setShowEditServisPopup] = useState(false);
  const [editServisData, setEditServisData] = useState(null);
  const [showTambahServisPopup, setShowTambahServisPopup] = useState(false);

  const handleEditServisClick = (servis) => {
    setEditServisData(servis);
    setShowEditServisPopup(true);
  };

  const handleCloseEditForm = () => {
    setShowEditServisPopup(false);
  };

  const handleFormTambahServisClick = () => {
    setShowEditServisPopup(false);
    setShowTambahServisPopup(true);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/data_servis/show')
      .then((response) => {
        setDataServis(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data barang:', error);
      });
  }, []);

  const handlehapusservis = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/data_servis/destroy/${id}`)
      .then(() => {
        setDataServis(dataServis.filter((servis) => servis.id !== id));
        toast.success("Data barang berhasil dihapus", {
          position: "top-center",
          duration: 4000,
        });
        navigate('/databarang');
      })
      .catch((error) => {
        console.error('Error deleting data barang:', error);
        toast.error("Gagal menghapus data barang", {
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
          color: #333;
          margin-bottom: 1rem;
          padding-left: 10px;
          display: flex;
          align-items: center;
          font-family: 'Poppins', sans-serif;
        }
        .flex-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 10px; 
        }
        .button-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        th,
        td {
          padding: 12px 20px;
          border: 1px solid #ddd;
          font-size: 0.8rem;
          font-family: 'Poppins', sans-serif;
          text-align: center;
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
        <h1 className="title">Data Servis</h1>
        <div className="button-container">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
            onClick={handleFormTambahServisClick}
          >
            Tambah
          </button>
        </div>
      </div>

      {showTambahServisPopup && <FormTambahServis onClose={() => setShowTambahServisPopup(false)} />}
      {showEditServisPopup && <EditServis onClose={handleCloseEditForm} servis={editServisData} />}
      
      <PaginateComponent />
      
      <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem' }}>No</th>
            <th style={{ width: '15%', textAlign: 'center', background: '#5896FF' }}>Nama Barang</th>
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF' }}>Kode</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF' }}>Kerusakan</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF' }}>Deskripsi</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Tgl Servis</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Tgl Selesai</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Teknisi</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Biaya</th>
            <th style={{ width: '15%', textAlign: 'center', background: '#5896FF' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataServis.map((servis, index) => (
            <tr key={servis.id} className="bg-blue-200 lg:text-black">
              <td className="p-3 font-medium capitalize">{index + 1}</td>
              <td className="p-3">{servis.nama_barang}</td>
              <td className="p-3">{servis.kode_barang}</td>
              <td className="p-3">{servis.kerusakan}</td>
              <td className="p-3">{servis.deskripsi}</td>
              <td className="p-3">{servis.mulai}</td>
              <td className="p-3">{servis.selesai}</td>
              <td className="p-3">{servis.teknisi}</td>
              <td className="p-3">{servis.biaya}</td>
              <td className="p-3" style={{ display: 'flex', justifyContent: 'center' }}>
                <HiPencil
                  className="text-blue-500 hover:text-gray-100 mx-1 cursor-pointer"
                  onClick={() => handleEditServisClick(servis)}
                />
                <MdDelete
                  className="text-red-500 hover:text-gray-100 mx-1 cursor-pointer"
                  onClick={() => handlehapusservis(servis.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default DataServis;
