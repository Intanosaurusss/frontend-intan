import LayoutUser from "./LayoutUser";
import PaginateComponent from "../components/Paginate&Search";
import FormTambahPeminjaman from "../pages/FormTambahPeminjaman";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const DataPeminjamanUser = () => {
  // Mengambil userId dari localStorage
  const userId = localStorage.getItem("user_id");

  const [showPopup, setShowPopup] = useState(false);
  const [dataPeminjaman, setDataPeminjaman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTambahPeminjamanClick = () => {
    setShowPopup(true);
  };

  const handleCloseForm = () => {
    setShowPopup(false);
    fetchDataPeminjaman(); // Memperbarui data setelah form ditutup
  };

  const fetchDataPeminjaman = useCallback(() => {
    if (!userId) {
      console.error('userId is missing');
      setError('userId is missing');
      setLoading(false);
      return;
    }

    const endpoint = `http://127.0.0.1:8000/api/data_peminjaman/show/${userId}`;
    console.log('Fetching data from endpoint:', endpoint);

    axios.get(endpoint)
      .then((response) => {
        console.log('Response data:', response.data);
        if (Array.isArray(response.data)) {
          setDataPeminjaman(response.data);
        } else {
          setDataPeminjaman([]);
        }
        setLoading(false);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error('Error fetching data peminjaman:', error);
        setError('kamu belum pinjem barang di lab, ayo pinjem sekarang!');
        setLoading(false);
        setDataPeminjaman([]); // Ensure dataPeminjaman is cleared on error
      });
  }, [userId]);

  useEffect(() => {
    fetchDataPeminjaman();
  }, [fetchDataPeminjaman]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LayoutUser>
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
        
        .table-container {
            overflow-x: auto;
        }

        @media (min-width: 768px) {
            .sidebar-open .table-container {
                overflow-x: hidden;
            }
        }
        `}
      </style>
      <div className="flex-container">
        <h1 className="title">Data Peminjaman</h1>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ml-3 mb-3"
        onClick={handleTambahPeminjamanClick}
      >
        Pinjam
      </button>
      {showPopup && <FormTambahPeminjaman onClose={handleCloseForm} />}
      <PaginateComponent />
      <div className="overflow-x-auto">
        <table className="table text-gray-400 border rounded text-sm mx-3">
          <thead className="bg-blue-500">
            <tr className="bg-blue-500">
              <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem' }}>No</th>
              <th style={{ width: '15%', textAlign: 'center', background: '#5896FF' }}>Nama</th>
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Kelas</th>
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Nama Barang</th>
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Merk</th>
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Kode</th>
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Tgl Pinjam</th>
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="8" className="p-3 text-center">{error}</td>
              </tr>
            ) : (
              Array.isArray(dataPeminjaman) && dataPeminjaman.length > 0 ? (
                dataPeminjaman.map((data_peminjaman, index) => (
                  <tr key={data_peminjaman.id} className="bg-blue-200 lg:text-black">
                    <td className="p-3 font-medium capitalize">{index + 1}</td>
                    <td className="p-3">{data_peminjaman.nama}</td>
                    <td className="p-3">{data_peminjaman.kelas}</td>
                    <td className="p-3">{data_peminjaman.nama_barang}</td>
                    <td className="p-3">{data_peminjaman.merek}</td>
                    <td className="p-3">{data_peminjaman.kode}</td>
                    <td className="p-3">{data_peminjaman.tanggal_pinjam}</td>
                    <td className="p-3">{data_peminjaman.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-3 text-center">Up, kamu belum pinjem barang nih. Data nya nggaada</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </LayoutUser>
  );
};

DataPeminjamanUser.propTypes = {
  userId: PropTypes.string,
};

export default DataPeminjamanUser;
