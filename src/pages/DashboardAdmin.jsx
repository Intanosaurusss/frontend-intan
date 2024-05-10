import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const DashboardAdmin = () => {
    const [totalBarang, setTotalBarang] = useState(0);

  useEffect(() => {
    // Contoh: Ambil data barang dari API dan hitung jumlah barang
    fetch("http://127.0.0.1:8000/api/databarang")
      .then(response => response.json())
      .then(data => {
        setTotalBarang(data.data.length); // Misalnya, data adalah array dari barang, dan kita menghitung panjang array untuk mendapatkan jumlah barang
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Layout >
        <style>
            {`
            .title {
                margin-top: 0.8rem;
                // font-weight: bold; /* Seharusnya bold, bukan semibold */
                color: #333;
                margin-bottom: 1rem;
                padding-left: 1px;
                display: flex;
                align-items: center;
                font-family: 'Poppins', sans-serif;
              }
              `}
        </style>
      <div className='px-3'>
            <h1 className="title">Dashboard</h1>
            <div className='container-fluid'>
                
                <div className='row g-3 my-2'>
                    <Link to="/databarang" className='col-md-4 p-1 text-decoration-none text-dark'>
                        <div className='p-3 bg-box1 shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                            <h3 className='fs-2'>{totalBarang}</h3> {/* Menggunakan state totalBarang */}
                            <p className='fs-5'>Barang</p>
                            </div>
                            <i className='bi bi-cart-plus p-3 fs-1'></i>
                        </div>
                    </Link>
                    <Link to="/datapeminjaman" className='col-md-4 p-1 text-decoration-none text-dark'>
                        <div className='p-3 bg-box2 shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>2</h3>
                                <p className='fs-5'>Peminjam</p>
                            </div>
                            <i className='bi bi-currency-dollar p-3 fs-1'></i>
                        </div>
                    </Link>
                    <Link to="/riwayatpeminjaman" className='col-md-4 p-1 text-decoration-none text-dark'>
                        <div className='p-3 bg-box3 shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>3</h3>
                                <p className='fs-5'>Riwayat</p>
                            </div>
                            <i className='bi bi-truck p-3 fs-1'></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardAdmin;