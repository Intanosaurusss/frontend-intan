import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes
// import { useState } from 'react';
import toast from 'react-hot-toast';

const FormTambahUser = ({ onClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    
    // Mengambil nilai-nilai dari formulir
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const nisn = event.target.nisn.value;
    // const status = event.target.Status.value;
  
    try {
      // Mengirimkan data ke server menggunakan method POST
      const response = await axios.post('http://127.0.0.1:8000/api/users', {
        name,
        email: email, // Sesuaikan nama field dengan yang diharapkan oleh server
        password: password,
        nisn: nisn,
      });
  
      // Menampilkan pesan toast sukses
      toast.success(response.data.message, {
        position: "top-center",
        duration: 4000,
      });
  
      // Menutup popup setelah berhasil menambahkan barang
      onClose();
    } catch (error) {
      // Menampilkan pesan toast jika terjadi kesalahan
      toast.error("Terjadi kesalahan saat menambahkan user", {
        position: "top-center",
        duration: 4000,
      });
      console.error('Error adding user:', error);
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
            height: 83%;
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
            text-align: right; /* Posisi tombol di sebelah kanan */
            margin-top: 6px; /* Jarak antara tombol dan form */
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
            <h2 style={{ marginBottom: '20px' }}>Tambah User</h2> {/* Tambahkan margin-bottom di sini */}
            {/* Form tambah barang di sini */}
            <form onSubmit={handleSubmit}>
              <label style={{ marginBottom: '10px' }}>Nama</label> {/* Tambahkan margin-bottom di sini */}
              <input type="text" name="name" placeholder='silahkan isi nama user' />
              <br></br>
              <label>Email</label>
              <input type="text" name="email" placeholder='silahkan isi email user'/>
              <br></br>
              <label>Password</label>
              <input type="text" name="password" placeholder='silahkan isi password user'/>
              <label>NISN</label>
              <input type="text" name="nisn" placeholder='silahkan isi NISN user'/>
              <div className="button-container">
                <button type="button" className="cancel" onClick={onClose}>Batal</button>
                <button type="submit" className="add">Tambah</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

FormTambahUser.propTypes = {
  onClose: PropTypes.func.isRequired // Validate onClose as a required function prop
};

export default FormTambahUser;
