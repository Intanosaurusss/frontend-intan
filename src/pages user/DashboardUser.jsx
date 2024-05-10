import LayoutUser from "./LayoutUser";
import { Link } from "react-router-dom";

const DashboardUser = () => {
  return (
    <>
      <LayoutUser >
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
                    <Link to="/datapeminjamanuser" className='col-md-6 p-1 text-decoration-none text-dark'>
                        <div className='p-3 bg-box1 shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>1</h3>
                                <p className='fs-5'>Barang Dipinjam</p>
                            </div>
                            <i className='bi bi-cart-plus p-3 fs-1'></i>
                        </div>
                    </Link>
                    <Link to="/riwayatpeminjamanuser" className='col-md-6 p-1 text-decoration-none text-dark'>
                        <div className='p-3 bg-box2 shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>3</h3>
                                <p className='fs-5'>Riwayat Peminjaman</p>
                            </div>
                            <i className='bi bi-currency-dollar p-3 fs-1'></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </LayoutUser>
    </>
  );
};

export default DashboardUser;