import LayoutUser from "./LayoutUser";
import PaginateComponent from "../components/Paginate&Search";
import FilterComponent from "../components/FilterComponent";

const RiwayatPeminjamanUser= () => {
    return (
      <LayoutUser >
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

          /* Default overflow pada tabel */
          .table-container {
              overflow-x: auto;
          }

          /* Mengatur overflow saat sidebar terbuka untuk layar laptop */
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
          <FilterComponent></FilterComponent>
          <PaginateComponent></PaginateComponent>
          <div className="overflow-x-auto">
          <table className="table text-gray-400 border rounded text-sm mx-3">
        <thead className="bg-blue-500">
          <tr className="bg-blue-500">
            <th style={{ width: '2%', textAlign: 'center', background: '#5896FF', height: '3.5rem',}}>No</th>
            <th style={{ width: '15%', textAlign: 'center', background: '#5896FF'}}>Nama</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Kelas</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Nama Barang</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Merk</th>
            {/* <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>ID</th> */}
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Pinjam</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Tgl Kembalikan</th>
            <th style={{ width: '10%', textAlign: 'center', background: '#5896FF'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize" style={{ textAlign: 'center' }}>1</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3">Laptop</td>
            <td className="p-3">Lenovo</td>
            {/* <td className="p-3">2</td> */}
            <td className="p-3">26/04/24</td>
            <td className="p-3">26/04/24</td>
            <td className="p-3">Dikembalikan</td>
          </tr>
          </tbody>
          <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize" style={{ textAlign: 'center' }}>2</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3">Laptop</td>
            <td className="p-3">Lenovo</td>
            {/* <td className="p-3">2</td> */}
            <td className="p-3">26/04/24</td>
            <td className="p-3">26/04/24</td>
            <td className="p-3">Dikembalikan</td>
          </tr>
          </tbody>
          <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize" style={{ textAlign: 'center' }}>3</td>
            <td className="p-3">User</td>
            <td className="p-3">11 Pplg 3</td>
            <td className="p-3">Laptop</td>
            <td className="p-3">Lenovo</td>
            {/* <td className="p-3">2</td> */}
            <td className="p-3">26/04/24</td>
            <td className="p-3">26/04/24</td>
            <td className="p-3">Dikembalikan</td>
          </tr>
          </tbody>
      </table>
      </div>
          </LayoutUser >
    )
}

export default RiwayatPeminjamanUser;