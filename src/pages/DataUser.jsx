import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";
import ToggleComponent from "../components/ToggleComponent";

const DataUser = () => {
    return (
      <Layout>
        <style>
          {`
          .title {
            margin-top: 0.8rem;
            padding-left: 10px;
            display: flex;
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
          // onClick={handleTambahBarangClick}
        >
          Tambah
        </button>
        </div>
          </div>
          <>
        <PaginateComponent />
        </>
        <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Nama</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Kelas</th>
            <th style={{ width: '20%', textAlign: 'center', background: '#5896FF'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">1</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3"><ToggleComponent></ToggleComponent></td>
          </tr>
          </tbody>
          <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">2</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3"><ToggleComponent></ToggleComponent></td>
          </tr>
          </tbody>
      </table>
          </Layout>
    )
}

export default DataUser;