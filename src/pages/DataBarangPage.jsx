import Layout from "../components/Layout";
import FormTambahBarang from "./FormTambahBarang";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PaginateComponent from "../components/Paginate&Search";
import EditBarang from "../pages/Edit/EditBarang";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";

const DataBarang = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditBarangPopup, setShowEditBarangPopup] = useState(false);
  const [dataBarang, setDataBarang] = useState([]);
  // const [loading, isLoading] = useState(false)
  

  const handleTambahBarangClick = () => {
    setShowPopup(true);
  };

  const handleEditBarangClick = () => {
    setShowEditBarangPopup(true);
  };

  const handleCloseForm = () => {
    setShowPopup(false);
  };

  const handleCloseEditForm = () => {
    setShowEditBarangPopup(false);
  };

  const navigate = useNavigate();
  
  const handlehapusbarang = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/databarang/${id}`)
      .then(() => {
        // Menghapus data barang dari state setelah penghapusan berhasil
        setDataBarang(dataBarang.filter((barang) => barang.id !== id));
        // Menampilkan pesan toast
        toast.success("Data barang berhasil dihapus", {
          position: "top-center",
          duration: 4000,
        });
        // Mengarahkan pengguna ke halaman landing page
        navigate('/databarang');
      })
      .catch((error) => {
        console.error('Error deleting data barang:', error);
        // Menampilkan pesan toast jika terjadi kesalahan
        toast.error("Gagal menghapus data barang", {
          position: "top-center",
          duration: 4000,
        });
      });
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/databarang')
      .then((response) => {
        setDataBarang(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data barang:', error);
      });
  }, []);

  // if(dataBarang.length == 0) {
  //   return (
  //     <div>Loading data.....</div>
  //   );
  // }
  

  // const handleUpdateBarang = (id, newData) => {
  //   axios.put(`http://127.0.0.1:8000/api/databarang/${id}`, newData)
  //     .then(() => {
  //       // Memperbarui data barang di state setelah pembaruan berhasil
  //       setDataBarang(dataBarang.map((barang) => (barang.id === id ? newData : barang)));
  //       // Menampilkan pesan toast
  //       toast.success("Data barang berhasil diperbarui", {
  //         position: "top-center",
  //         duration: 4000,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error updating data barang:', error);
  //       // Menampilkan pesan toast jika terjadi kesalahan
  //       toast.error("Gagal memperbarui data barang", {
  //         position: "top-center",
  //         duration: 4000,
  //       });
  //     });
  // };

  return (
    <Layout>
      <style>
        {`
          /* CSS untuk mengatur gaya h1 */
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

          .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 10px; 
          }
          .button-container {
            display: flex;
            align-items: center;
            gap: 10px; /* Atur jarak antara tombol "Excel" dan tombol "Tambah" di sini */
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
        <h1 className="title">Data Barang</h1>
        <div className="button-container" style={{ gap: '10px' }}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          // onClick={handleTambahBarangClick}
        >
          Excel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
          onClick={handleTambahBarangClick}
        >
          Tambah
        </button>
        </div>
      </div>
      {showPopup && <FormTambahBarang onClose={handleCloseForm} />}
      {showEditBarangPopup && <EditBarang onClose={handleCloseEditForm} />}
      <>
        <PaginateComponent />
      </>
      <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Nama Barang</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Merk</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Ruang</th>
            {/* <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Status</th> */}
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataBarang.map((barang, index) => (
            <tr key={barang.id} className="bg-blue-200 lg:text-black">
              <td className="p-3 font-medium capitalize">{index + 1}</td>
              <td className="p-3 text-center">{barang.nama_barang}</td>
              <td className="p-3 text-center">{barang.merek}</td>
              <td className="p-3 text-center">{barang.ruang}</td>
              {/* <td className="p-3 text-center">{barang.status}</td> */}
              <td className="p-3 text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`/detaildatabarang/${barang.id}`} className="text-gray-500 hover:text-gray-100 mr-3">
                  <FaEye className="text-base" style={{ display: 'inline-block' }} />
                </Link>
                <HiPencil className="text-blue-500 hover:text-gray-100 mx-3" onClick={handleEditBarangClick} />
                <MdDelete className="text-red-500 hover:text-gray-100 ml-3" onClick={() => handlehapusbarang(barang.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default DataBarang;
