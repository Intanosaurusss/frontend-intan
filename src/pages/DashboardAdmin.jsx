import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardAdmin = () => {
    const [totalBarang, setTotalBarang] = useState(0);
    const [totalPeminjam, setTotalPeminjam] = useState(0);
    const [totalLaporan, setTotalLaporan] = useState(0);

    useEffect(() => {
        // Mengambil data barang dari API dan menghitung jumlah barang
        fetch("http://127.0.0.1:8000/api/data_barangs/show")
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setTotalBarang(data.data.length);
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        // Mengambil data peminjam dari API dan menghitung jumlah peminjam
        fetch("http://127.0.0.1:8000/api/data_peminjaman/show")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTotalPeminjam(data.length);
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        // Mengambil data laporan peminjaman dari API dan menghitung jumlah laporan
        fetch("http://127.0.0.1:8000/api/laporan_peminjaman/show")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTotalLaporan(data.length);
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <Layout>
            <style>
                {`
                .title {
                    margin-top: 0.8rem;
                    // font-weight: bold; 
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
                                    <h3 className='fs-2'>{totalBarang}</h3>
                                    <p className='fs-5'>Barang</p>
                                </div>
                                <i className='bi bi-cart-plus p-3 fs-1'></i>
                            </div>
                        </Link>
                        <Link to="/datapeminjaman" className='col-md-4 p-1 text-decoration-none text-dark'>
                            <div className='p-3 bg-box2 shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>{totalPeminjam}</h3>
                                    <p className='fs-5'>Peminjam</p>
                                </div>
                                <i className='bi bi-currency-dollar p-3 fs-1'></i>
                            </div>
                        </Link>
                        <Link to="/riwayatpeminjaman" className='col-md-4 p-1 text-decoration-none text-dark'>
                            <div className='p-3 bg-box3 shadow-sm d-flex justify-content-around align-items-center rounded'>
                                <div>
                                    <h3 className='fs-2'>{totalLaporan}</h3>
                                    <p className='fs-5'>Riwayat</p>
                                </div>
                                <i className='bi bi-truck p-3 fs-1'></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DashboardAdmin;
