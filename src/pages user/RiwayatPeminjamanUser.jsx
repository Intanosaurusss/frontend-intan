import { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutUser from "./LayoutUser";
import PaginateComponent from "../components/Paginate&Search";
import FilterComponent from "../components/FilterComponent";

const RiwayatPeminjamanUser = () => {
  const [dataLaporan, setDataLaporan] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaporanPeminjaman = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        const response = await axios.get(`http://127.0.0.1:8000/api/laporan_peminjaman/show/${userId}`);
        setDataLaporan(response.data);
      } catch (error) {
        setError('Gagal mengambil data laporan peminjaman');
      }
    };

    fetchLaporanPeminjaman();
  }, []);

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
        <h1 className="title">Laporan Peminjaman</h1>
      </div>
      <FilterComponent />
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
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Tgl Kembalikan</th>
              <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="9" className="p-3 text-center">{error}</td>
              </tr>
            ) : (
              Array.isArray(dataLaporan) && dataLaporan.length > 0 ? (
                dataLaporan.map((laporan_peminjaman, index) => (
                  <tr key={laporan_peminjaman.id} className="bg-blue-200 lg:text-black">
                    <td className="p-3 font-medium capitalize">{index + 1}</td>
                    <td className="p-3">{laporan_peminjaman.nama}</td>
                    <td className="p-3">{laporan_peminjaman.kelas}</td>
                    <td className="p-3">{laporan_peminjaman.nama_barang}</td>
                    <td className="p-3">{laporan_peminjaman.merek}</td>
                    <td className="p-3">{laporan_peminjaman.kode}</td>
                    <td className="p-3">{laporan_peminjaman.tanggal_pinjam}</td>
                    <td className="p-3">{laporan_peminjaman.tanggal_kembali}</td>
                    <td className="p-3">{laporan_peminjaman.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-3 text-center">Up, kamu belum mengembalikan barang apapun loh</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </LayoutUser>
  );
};

export default RiwayatPeminjamanUser;
