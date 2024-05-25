import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import toast from 'react-hot-toast';
import { format } from "date-fns";

const TambahServis = ({ onClose }) => {
    const [tanggalMulai, setTanggalMulai] = useState(null);
    const [tanggalSelesai, setTanggalSelesai] = useState(null);
    const handleSubmit = async (event) => {
      event.preventDefault(); // Mencegah pengiriman formulir secara default
      
      // Mengambil nilai-nilai dari formulir
      const nama_barang = event.target.nama_barang.value;
      const kode_barang = event.target.kode_barang.value;
      const kerusakan = event.target.kerusakan.value;
      const deskripsi = event.target.deskripsi.value;
      const mulai = format(tanggalMulai, "yyyy-MM-dd"); // Format tanggalMulai
      const selesai = format(tanggalSelesai, "yyyy-MM-dd"); // Format tanggalSelesai
      const teknisi = event.target.teknisi.value;
      const biaya = event.target.biaya.value;
      try {
        // Mengirimkan data ke server menggunakan method POST
        const response = await axios.post('http://127.0.0.1:8000/api/data_servis/store', {
          nama_barang,
          kode_barang,
          kerusakan,
          deskripsi, // Sesuaikan nama field dengan yang diharapkan oleh server
          mulai,
          selesai,
          teknisi,
          biaya
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
            height: 105%;
          }

          /* Gaya untuk label */
          .popup label {
            display: block;
            margin-bottom: 2px; /* Jarak antara label dan input */
          }

          /* Gaya untuk input */
          .popup input, .popup select {
            width: 100%; /* Mengisi lebar kontainer */
            padding: 8px; /* Ruang dalam input */
            margin-bottom: 10px; /* Jarak antara input */
            background-color: white;
            border: 2px solid grey; /* Border berwarna abu */
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
            text-align: left; /* Posisi tombol di sebelah kiri */
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
          .react-datepicker-wrapper {
            width: 100%;
          }
        `}
      </style>
      <div className="popup-container">
        <div className="popup">
          <div className="popup-inner">
            <h2 style={{ marginBottom: '5px' }}>Tambah Servis Barang</h2> {/* Tambahkan margin-bottom di sini */}
            {/* Form tambah barang di sini */}
            <form onSubmit={handleSubmit}>
            <label>Nama Barang</label>
              <input type="text" name="nama_barang" placeholder='silahkan isi nama barang' style={{ height: '20px' }}/>
              <br></br>
              <label>Kode Barang</label>
              <input type="text" name="kode_barang" placeholder='silahkan isi kode barang' style={{ height: '20px' }}/>
              <br></br>
              <label>Kerusakan</label> {/* Tambahkan margin-bottom di sini */}
              <input type="text" name="kerusakan" placeholder='silahkan isi kerusakan' style={{ height: '20px' }}/>
              <br></br>
              <label>Deskripsi</label>
              <input type="text" name="deskripsi" placeholder='silahkan isi deskripsi kerusakan' style={{ height: '20px' }}/>
              <br></br>
              <label>Tanggal Servis</label>
              <DatePicker 
              className="mulai" 
              placeholderText='silahkan pilih tanggal mulai servis'
              selected={tanggalMulai} 
              onChange={(date) => setTanggalMulai(date)} style={{ height: '20px' }}/>
              <br></br>
              <label>Tanggal Selesai Servis</label>
              <DatePicker 
              className="selesai" 
              placeholderText='silahkan pilih tanggal selesai servis'
              selected={tanggalSelesai} 
              onChange={(date) => setTanggalSelesai(date)} style={{ height: '20px' }} />
              <br></br>
              <label>Teknisi</label>
              <input type="text" name="teknisi" placeholder='silahkan isi nama teknisi' style={{ height: '20px' }}/>
              <br></br>
              <label>Biaya</label>
              <input type="text" name="biaya" placeholder='silahkan isi biaya servis' style={{ height: '20px' }}/>
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

TambahServis.propTypes = {
  onClose: PropTypes.func.isRequired // Validate onClose as a required function prop
};

export default TambahServis;
