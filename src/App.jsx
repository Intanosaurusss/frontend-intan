import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import DashboardAdmin from './pages/DashboardAdmin';
import DaftarPage from './pages/DaftarPage';
import DataBarang from './pages/DataBarangPage';
import DataServis from './pages/DataServis';
import DataRuang from './pages/DataRuang';
import DataUser from './pages/DataUser';
import DataPeminjaman from './pages/DataPeminjaman';
import RiwayatPeminjaman from './pages/RiwayatPeminjaman';
import FormTambahBarang from './pages/FormTambahBarang';
import FormTambahRuang from './pages/FormTambahRuang';
import DetailDataBarang from './pages/DetailDataBarang';
import FormTambahPeminjaman from './pages/FormTambahPeminjaman';
import EditBarang from './pages/Edit/EditBarang';
import EditRuang from './pages/Edit/EditRuang';
import EditServis from './pages/Edit/EditServis';
import Profil from './pages/Profil';
import { Toaster } from 'react-hot-toast';
import DashboardUser from './pages user/DashboardUser';
import DataPeminjamanUser from './pages user/DataPeminjamanUser';
import RiwayatPeminjamanUser from './pages user/RiwayatPeminjamanUser';
import ProfilUser from './pages user/ProfilUser';
import DetailDataBarangUser from './pages user/DetailDataBarangUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Daftar" element={<DaftarPage />} />
        <Route path="/Dashboard" element={<DashboardAdmin />} />
        <Route path="/Databarang" element={<DataBarang />} />
        <Route path="/Dataservis" element={<DataServis />} />
        <Route path="/Dataruang" element={<DataRuang />} />
        <Route path="/Datauser" element={<DataUser />} />
        <Route path="/Datapeminjaman" element={<DataPeminjaman />} />
        <Route path="/Riwayatpeminjaman" element={<RiwayatPeminjaman />} />
        <Route path="/detaildatabarang/:id" Component={DetailDataBarang} />
  {/* Sisipkan route lain di sini */}
        <Route path="/Formtambahbarang" element={<FormTambahBarang />} />
        <Route path="/Formtambahruang" element={<FormTambahRuang />} />
        <Route path="/Formtambahpeminjaman" element={<FormTambahPeminjaman />} />
        <Route path="/Editbarang" element={<EditBarang />} />
        <Route path="/Editruang" element={<EditRuang />} />
        <Route path="/Editservis" element={<EditServis />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Dashboarduser" element={<DashboardUser />} />
        <Route path="/Datapeminjamanuser" element={<DataPeminjamanUser />} />
        <Route path="/Riwayatpeminjamanuser" element={<RiwayatPeminjamanUser />} />
        <Route path="/Profiluser" element={<ProfilUser />} />
        <Route path="/Detaildatabaranguser" element={<DetailDataBarangUser />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
