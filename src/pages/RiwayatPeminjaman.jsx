import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";
import PrintComponent from "../components/PrintComponent";
import FilterComponent from "../components/FilterComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const RiwayatPeminjaman = () => {
  const [dataLaporanPeminjaman, setDataLaporanPeminjaman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/laporan_peminjaman/show')
      .then((response) => {
        console.log(response.data); // Log the response data for debugging
        if (Array.isArray(response.data)) {
          setDataLaporanPeminjaman(response.data);
        } else {
          setDataLaporanPeminjaman([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data peminjaman:', error);
        setError('Error fetching data peminjaman. Please try again later.');
        setLoading(false);
      });
  }, [setError, setLoading, setDataLaporanPeminjaman]); // Tambahkan dependensi di sini

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


    return (
      <Layout>
        <style>
          {`
          .title {
            margin-top: 0.8rem;
            // font-weight: bold; /* Seharusnya bold, bukan semibold */
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
           <h1 className="title">Laporan Peminjaman</h1>
          </div>
          <FilterComponent></FilterComponent>
          <PaginateComponent></PaginateComponent>
          <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '15%', textAlign: 'center', background: '#5896FF'}}>Nama</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Kelas</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Nama Barang</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Merk</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Kode</th>
            {/* <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>ID</th> */}
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Pinjam</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Kembalikan</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Status</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(dataLaporanPeminjaman) && dataLaporanPeminjaman.length > 0 ? (
    dataLaporanPeminjaman.map((data_laporan_peminjaman, index) => (
      <tr key={data_laporan_peminjaman.id} className="p-3 font-medium capitalize" style={{ textAlign: 'center' }}>
        <td className="p-3">{index + 1}</td>
        <td className="p-3">{data_laporan_peminjaman.nama}</td>
        <td className="p-3">{data_laporan_peminjaman.kelas}</td>
        <td className="p-3">{data_laporan_peminjaman.nama_barang}</td>
        <td className="p-3">{data_laporan_peminjaman.merek}</td>
        <td className="p-3">{data_laporan_peminjaman.kode}</td>
        {/* <td className="p-3">2</td> */}
        <td className="p-3">{data_laporan_peminjaman.tanggal_pinjam}</td>
        <td className="p-3">{data_laporan_peminjaman.tanggal_kembali}</td>
        <td className="p-3">{data_laporan_peminjaman.status}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="9" className="p-3 text-center">No data available</td>
    </tr>
  )}
</tbody>

      </table>
      <PrintComponent />
          </Layout>
    )
}

export default RiwayatPeminjaman;