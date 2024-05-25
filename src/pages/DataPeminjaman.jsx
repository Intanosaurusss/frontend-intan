import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import axios from "axios";

const DataPeminjaman = () => {
  // const navigate = useNavigate(); // Hapus atau komentari jika tidak digunakan
  const [dataPeminjaman, setDataPeminjaman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlekembalikanpeminjaman = (id) => {
    axios.post(`http://127.0.0.1:8000/api/data_peminjaman/return/${id}`)
      .then(() => {
        toast.success("Yeay! Data peminjaman berhasil dikembalikan!", {
          position: "top-center",
          duration: 4000,
        });
        // Update the state to remove the returned item
        setDataPeminjaman(dataPeminjaman.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error returning item:', error);
        toast.error('Gagal mengembalikan data peminjaman. Silakan coba lagi.');
      });
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/data_peminjaman/show')
      .then((response) => {
        console.log(response.data); // Log the response data for debugging
        if (Array.isArray(response.data)) {
          setDataPeminjaman(response.data);
        } else {
          setDataPeminjaman([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data peminjaman:', error);
        setError('Error fetching data peminjaman. Please try again later.');
        setLoading(false);
      });
  }, []);

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
        <h1 className="title">Data Peminjaman</h1>
      </div>
      <PaginateComponent />
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
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(dataPeminjaman) && dataPeminjaman.length > 0 ? (
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
                <td className="p-3" style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="text-blue-500 hover:text-gray-100 mx-3" onClick={() => handlekembalikanpeminjaman(data_peminjaman.id)}>
                    <IoCheckmarkDoneSharp className="text-base" style={{ display: 'inline-block' }} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="p-3 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
}

export default DataPeminjaman;
