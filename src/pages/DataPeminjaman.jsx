import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
// import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DataPeminjaman= () => {
  const navigate = useNavigate();

  // const handlehapuspeminjam = () => {
  //   // Menampilkan pesan toast
  //   toast.success("yeay! data peminjaman berhasil dihapus!", {
  //     position: "top-center",
  //     duration: 4000,
  //   });

  //   // Mengarahkan pengguna ke halaman data peminjaman
  //   navigate('/datapeminjaman');
  // };

  const handlekembalikanpeminjaman = () => {
    // Menampilkan pesan toast
    toast.success("yeay! data peminjaman berhasil dikembalikan!", {
      position: "top-center",
      duration: 4000,
    });

    // Mengarahkan pengguna ke halaman landing page
    navigate('/datapeminjaman');
  };

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
           <h1 className="title">Data Peminjaman</h1>
          </div>
          <PaginateComponent></PaginateComponent>
          <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '15%', textAlign: 'center', background: '#5896FF'}}>Nama</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Kelas</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Nama Barang</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Merk</th>
            {/* <th style={{ width: '5%', textAlign: 'center', background: '#5896FF'}}>ID</th> */}
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Pinjam</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Status</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">1</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3">Laptop</td>
            <td className="p-3">Lenovo</td>
            {/* <td className="p-3">1</td> */}
            <td className="p-3">26/04/24</td>
            <td className="p-3">Dipinjam</td>
            <td className="p-3"  style={{ display: 'flex', justifyContent: 'center', }}>
              <div className="text-blue-500 hover:text-gray-100 mx-3" onClick={handlekembalikanpeminjaman}>
              <IoCheckmarkDoneSharp className="text-base" style={{ display: 'inline-block' }} />
              </div>
              {/* <div className="text-red-500 hover:text-gray-100 ml-3" onClick={handlehapuspeminjam} >
              <MdDelete  className="text-base" style={{ display: 'inline-block' }} />
              </div> */}
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">2</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3">Laptop</td>
            <td className="p-3">Lenovo</td>
            {/* <td className="p-3">2</td> */}
            <td className="p-3">26/04/24</td>
            <td className="p-3">Dipinjam</td>
            <td className="p-3"  style={{ display: 'flex', justifyContent: 'center', }}>
              <div className="text-blue-500 hover:text-gray-100 mx-3" onClick={handlekembalikanpeminjaman}>
              <IoCheckmarkDoneSharp className="text-base" style={{ display: 'inline-block' }} />
              </div>
              {/* <div className="text-red-500 hover:text-gray-100 ml-3" onClick={handlehapuspeminjam} >
              <MdDelete  className="text-base" style={{ display: 'inline-block' }} />
              </div> */}
            </td>
          </tr>
          </tbody>
      </table>
          </Layout>
    )
}

export default DataPeminjaman;