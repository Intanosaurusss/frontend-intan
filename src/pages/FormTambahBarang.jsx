import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes
// import { useState } from 'react';
import toast from 'react-hot-toast';

const FormTambahBarang = ({ onClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    
    // Mengambil nilai-nilai dari formulir
    const nama_barang = event.target.nama_barang.value;
    const merk_barang = event.target.merk_barang.value;
    const ruang_barang = event.target.ruang_barang.value;
    // const status = event.target.Status.value;
  
    try {
      // Mengirimkan data ke server menggunakan method POST
      const response = await axios.post('http://127.0.0.1:8000/api/databarang', {
        nama_barang,
        merek: merk_barang, // Sesuaikan nama field dengan yang diharapkan oleh server
        ruang: ruang_barang,
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
      toast.error("Terjadi kesalahan saat menambahkan barang", {
        position: "top-center",
        duration: 4000,
      });
      console.error('Error adding barang:', error);
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
            height: 70%;
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
            margin-top: 20px; /* Jarak antara tombol dan form */
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
            <h2 style={{ marginBottom: '20px' }}>Tambah Barang</h2> {/* Tambahkan margin-bottom di sini */}
            {/* Form tambah barang di sini */}
            <form onSubmit={handleSubmit}>
              <label style={{ marginBottom: '10px' }}>Nama Barang:</label> {/* Tambahkan margin-bottom di sini */}
              <input type="text" name="nama_barang" placeholder='silahkan isi nama barang' />
              <br></br>
              <label>Merk:</label>
              <input type="text" name="merk_barang" placeholder='silahkan isi merk barang'/>
              <br></br>
              <label>Ruang:</label>
              <select name="ruang_barang">
                <option value="ruang">Ruang lab pplg</option>
                <option value="ruang1">Ruang lab pplg 1</option>
                <option value="ruang2">Ruang lab pplg 2</option>
                <option value="ruang3">Ruang lab pplg 3</option>
              </select>
              {/* <label>Status:</label>
              <select name="Status">
                <option value="Status-Barang">Status-Barang</option>
                <option value="Dikembalikan">Dikembalikan</option>
                <option value="Dipinjam">Dipinjam</option>
              </select>
              <br></br> */}
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

FormTambahBarang.propTypes = {
  onClose: PropTypes.func.isRequired // Validate onClose as a required function prop
};

export default FormTambahBarang;
