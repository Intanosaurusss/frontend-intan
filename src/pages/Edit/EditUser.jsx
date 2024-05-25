import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const EditUser = ({ onClose, user }) => {
  // Fungsi untuk mendapatkan token otentikasi dari local storage
  const getAuthToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not available. Please login.");
      return null;
    }
    return token;
  };

  // Buat state untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    nisn: user.nisn,
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Fungsi untuk menangani pengiriman data
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = getAuthToken(); // Dapatkan token otentikasi
      if (!token) return; // Jika token tidak tersedia, hentikan eksekusi
      await axios.put(`http://127.0.0.1:8000/api/users/${user.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}` // Sertakan token dalam header permintaan
        }
      });
      onClose(); // Tutup form setelah berhasil
    } catch (error) {
      console.error('Gagal mengedit user:', error);
    }
  };

  return (
    <>
      <style>
        {`
          .popup-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Warna abu dengan opasitas */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          
          .popup {
            background-color: white;
            padding: 20px;
            border: 1px solid #ccc;
            width: 50%;
            height: 80%;
          }

          /* Gaya untuk label */
          .popup label {
            display: block;
            margin-bottom: 10px; /* Jarak antara label dan input */
          }

          /* Gaya untuk input */
          .popup input, .popup select {
            width: 100%; /* Mengisi lebar kontainer */
            padding: 8px; /* Ruang dalam input */
            margin-bottom: 15px; /* Jarak antara input */
            background-color: white;
            border: 2px solid grey; /* Border berwarna biru */
            border-radius: 5px; /* Agar sudut menjadi melengkung */
          }

          /* Gaya untuk select */
          .popup select {
            appearance: none; /* Hilangkan tampilan default */
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333" width="18px" height="18px"><path d="M7 10l5 5 5-5H7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'); /* Tambahkan ikon menu */
            background-repeat: no-repeat; /* Hindari pengulangan ikon */
            background-position: right 10px center; /* Posisi ikon di sebelah kanan */
            padding-right: 30px; /* Ruang untuk ikon menu */
          }

          /* Gaya untuk button-container */
          .popup .button-container {
            text-align: left; /* Posisi tombol di sebelah kanan */
            margin-top: 10px; /* Jarak antara tombol dan form */
          }

          /* Gaya untuk tombol "Batal" */
          .popup button.cancel {
            background-color: red; /* Warna latar merah */
            color: white; /* Warna teks putih */
            border: none; /* Hilangkan border */
            padding: 10px 20px; /* Ruang dalam tombol */
            cursor: pointer; /* Ubah kursor saat diarahkan ke tombol */
            margin-right: 20px;
            border-radius: 5px;
          }

          /* Gaya untuk tombol "Tambah" */
          .popup button.add {
            background-color: blue; /* Warna latar biru */
            color: white; /* Warna teks putih */
            border: none; /* Hilangkan border */
            padding: 10px 20px; /* Ruang dalam tombol */
            cursor: pointer; /* Ubah kursor saat diarahkan ke tombol */
            border-radius: 5px;
          }
        `}
        </style>
      <div className="popup-container">
        <div className="popup">
          <div className="popup-inner">
            <h2 style={{ marginBottom: '20px' }}>Edit User</h2>
            <form onSubmit={handleSubmit}>
              <label style={{ marginBottom: '10px' }}>Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Silahkan isi nama user"
              />
              <br />
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Silahkan isi email user"
              />
              <br />
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Silahkan isi password user"
              />
              <br />
              <label>NISN</label>
              <input
                type="text"
                name="nisn"
                value={formData.nisn}
                onChange={handleChange}
                placeholder="Silahkan isi NISN user"
              />
              <br />
              <div className="button-container">
                <button type="button" className="cancel" onClick={onClose}>
                  Batal
                </button>
                <button type="submit" className="add">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

EditUser.propTypes = {
    onClose: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

export default EditUser;
