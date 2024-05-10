import Layout from "../components/Layout";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import FormTambahPeminjaman from "./FormTambahPeminjaman";
import FormTambahServis from "./FormTambahServis";
import EditServis from "./Edit/EditServis";
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";


const DetailDataBarang = () => {
  const { id } = useParams();
  const [showPeminjamanPopup, setShowPeminjamanPopup] = useState(false);
  const [showServisPopup, setShowServisPopup] = useState(false);
  const [showEditServisPopup, setShowEditServisPopup] = useState(false);
  const [dataServis, setDataServis] = useState([]);
  // const [dataquran, setDataQuran] = useState([])

  // useEffect (() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://quran-api-id.vercel.app/surahs')
  //     const result = await response.json()
  //     console.table(result)
  //     setDataQuran(result)
  //   }

  //   fetchData()
  // }, [])

  const handleFormTambahPeminjamanClick = () => {
    setShowPeminjamanPopup(true);
  };

  const handleEditServisClick = () => {
    setShowEditServisPopup(true);
  };

  const handleCloseEditServis = () => {
    setShowEditServisPopup(false);
  };

  const handleCloseForm = () => {
    setShowPeminjamanPopup(false);
    setShowServisPopup(false);
  };

  const handleFormTambahServisClick = () => {
    // Tutup popup EditServis jika sedang terbuka
    setShowEditServisPopup(false);
  
    // Buka popup untuk menambahkan servis baru
    setShowServisPopup(true);
  };
  
  const navigate = useNavigate();

  const handlehapusservis = () => {
    // Menampilkan pesan toast
    toast.success("yeay! data servis berhasil dihapus!", {
      position: "top-center",
      duration: 4000,
    });

    // Mengarahkan pengguna ke halaman landing page
    navigate('/detaildatabarang');
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/servis')
      .then((response) => {
        setDataServis(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data servis:', error);
      });
  }, []);
    return (
      <Layout>
        <style>
          {`
          .title {
            margin-top: 0.8rem;
            // font-weight: bold; /* Seharusnya bold, bukan semibold */
            color: #333;
            margin-bottom: 1rem;
            padding-left: 15px;
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
    <h1 className="title flex items-center">Detail Data Barang
        {/* <button
            className="h6 ml-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mr-4 mt-4 rounded"
            onClick={handleFormTambahPeminjamanClick}
        >
            Pinjam
        </button> */}
    </h1>
</div>

        {/* Tampilkan popup jika showPopup bernilai true */}
        {showPeminjamanPopup && (
        <FormTambahPeminjaman onClose={handleCloseForm} />
      )}
            <div className="flex-container">
           <h1 className="title text-lg">Data Peminjaman</h1>
          </div>
          <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '15%', textAlign: 'center', background: '#5896FF'}}>Nama</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Kelas</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Nama Barang</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Merk</th>
            <th style={{ width: '5%', textAlign: 'center', background: '#5896FF'}}>ID</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Pinjam</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Kembalikan</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">1</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3">Laptop</td>
            <td className="p-3">Lenovo</td>
            <td className="p-3">1</td>
            <td className="p-3">26/04/24</td>
            <td className="p-3">26/04/24</td>
            <td className="p-3">Dikembalikan</td>
          </tr>
          </tbody>
          <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">2</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3">Laptop</td>
            <td className="p-3">Lenovo</td>
            <td className="p-3">2</td>
            <td className="p-3">26/04/24</td>
            <td className="p-3">26/04/24</td>
            <td className="p-3">Dikembalikan</td>
          </tr>
          </tbody>
      </table>
      <div className="flex justify-between items-center px-0">
      <ul className="pagination">
        <li className="page-item pl-4">
          <a className="page-link text-sm" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="flex flex-row justify-between items-center">
  <h1 className="title text-lg mr-auto">Data Servis</h1>
  <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4"
          onClick={handleFormTambahServisClick}
        >
          Tambah
        </button>
        </div>
{/* Tampilkan popup jika showPopup bernilai true */}
{showServisPopup && <FormTambahServis onClose={handleCloseForm} />}

    <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Kerusakan</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Deskripsi</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Servis</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Selesai</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Teknisi</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Biaya</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataServis.map((servis, index) => (
          <tr key={servis.id}className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">{index + 1}</td>
            <td className="p-3">{servis.kerusakan}</td>
            <td className="p-3">{servis.deskripsi}</td>
            <td className="p-3">{servis.mulai}</td>
            <td className="p-3">{servis.selesai}</td>
            <td className="p-3">{servis.teknisi}</td>
            <td className="p-3">{servis.biaya}</td>
            <td className="p-3" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="text-blue-500 hover:text-gray-100 mx-3">
              <HiPencil className="text-base" style={{ display: 'inline-block' }} onClick={handleEditServisClick}/>
              </div>
              {/* Tampilkan popup edit ruang jika showEditRuangPopup bernilai true */}
              {showEditServisPopup && <EditServis onClose={handleCloseEditServis} />}
              <div className="text-red-500 hover:text-gray-100 ml-3" onClick={handlehapusservis}>
              <MdDelete  className="text-base" style={{ display: 'inline-block' }} />
              </div>
            </td>
          </tr>
            ))}
          </tbody>
      </table>
      <div className="flex justify-between items-center px-0">
      <ul className="pagination">
        <li className="page-item pl-4">
          <a className="page-link text-sm" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">1</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">2</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#">3</a>
        </li>
        <li className="page-item">
          <a className="page-link text-sm" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
    {/* <div>
      {dataquran.map((quran) => (
        <div key={quran.id} className="text-green-300">
<h1>{quran.name}</h1>
<p>{quran.description}</p>
<h3>{quran.revelation}</h3>
        </div>
      ))}
    </div> */}
          </Layout>
    )
}

export default DetailDataBarang;