import Layout from "../components/Layout";
import PaginateComponent from "../components/Paginate&Search";

const DataServis = () => {
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
        <h1 className="title">Data Servis</h1>
        </div>
        <>
        <PaginateComponent />
        </>
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
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">1</td>
            <td className="p-3">batre bocor</td>
            <td className="p-3">gabisa di cas</td>
            <td className="p-3">18/2/2024</td>
            <td className="p-3">19/2/2024</td>
            <td className="p-3">Ali</td>
            <td className="p-3">Rp.100.000</td>
          </tr>
       <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">2</td>
            <td className="p-3">lcd</td>
            <td className="p-3">layar bergaris garis</td>
            <td className="p-3">17/2/2024</td>
            <td className="p-3">18/2/2024</td>
            <td className="p-3">Ali</td>
            <td className="p-3">Rp.100.000</td>
          </tr>
             <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">3</td>
            <td className="p-3">keyboard</td>
            <td className="p-3">gabisa ngetik</td>
            <td className="p-3">16/2/2024</td>
            <td className="p-3">17/2/2024</td>
            <td className="p-3">Ali</td>
            <td className="p-3">Rp.100.000</td>
          </tr>
        </tbody>
      </table>
          </Layout>
    )
}

export default DataServis;