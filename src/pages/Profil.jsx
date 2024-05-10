import Layout from "../components/Layout";
import { useState } from "react";
import EditProfil from "./Edit/EditProfil";

const Profil = () => {
  const [showEditProfilPopup, setShowEditProfilPopup] = useState(false); // State untuk mengontrol tampilan popup edit ruang

  const handleEditProfilClick = () => {
    setShowEditProfilPopup(true);
  };

  // Fungsi untuk menutup popup edit ruang
  const handleCloseEditProfil = () => {
    setShowEditProfilPopup(false);
  };
  return (
    <>
      <Layout >
        <style>
            {``}
            </style>
            <div>
  <div className="flex-container">
    <h1 className="title ml-3 pt-2">Profil</h1>
  </div>
  <div className="flex items-center ml-5 mt-4 border-2 border-blue-500 mr-6 rounded-4">
    {/* Lingkaran gambar */}
    <div className="rounded-full w-48 h-48 mr-4 ml-20 mt-5 mb-5 ">
      <img
        src="src/assets/logo tpl bgremov.png" // Ganti dengan path gambar profil
        alt="Profil Picture"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Teks "Admin" dan tombol "Edit Profil" */}
    <div className="ml-20">
      <p className="text-lg text-center">Admin</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"  onClick={handleEditProfilClick}>
        Edit Profil
      </button>
    </div>
    {/* Tampilkan popup edit ruang jika showEditRuangPopup bernilai true */}
    {showEditProfilPopup && <EditProfil onClose={handleCloseEditProfil} />}
  </div>
</div>

            
            </Layout>
            </>
  )
}

export default Profil;