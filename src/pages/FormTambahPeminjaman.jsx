import PropTypes from 'prop-types'; // Import PropTypes
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const FormTambahPeminjaman = ({ onClose }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format tanggal ke yyyy-mm-dd
    setCurrentDate(formattedDate);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    
    // Mengambil nilai-nilai dari formulir
    const nama = event.target.nama.value;
    const kelas = event.target.kelas.value;
    const nama_barang = event.target.nama_barang.value;
    const merek = event.target.merek.value;
    const kode = event.target.kode.value;
    const tanggal_pinjam = event.target.tanggal_pinjam.value;
    const status = event.target.status.value;

    // Mengambil userId dari localStorage
    const userId = localStorage.getItem("user_id");
  
    try {
      // Mengirimkan data ke server menggunakan method POST
      const response = await axios.post(`http://127.0.0.1:8000/api/data_peminjaman/store/${userId}`, {
        nama,
        kelas,
        nama_barang,
        merek,
        kode,
        tanggal_pinjam,
        status,
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
      toast.error("Terjadi kesalahan saat menambahkan data peminjaman", {
        position: "top-center",
        duration: 4000,
      });
      console.error('Error adding peminjaman:', error);
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
            height: 98%;
          }

          /* Gaya untuk label */
          .popup label {
            display: block;
            margin-bottom: 1px; /* Jarak antara label dan input */
          }

          /* Gaya untuk input */
          .popup input, .popup select {
            width: 100%; /* Mengisi lebar kontainer */
            padding: 5px; /* Ruang dalam input */
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
            margin-top: 5px; /* Jarak antara tombol dan form */
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
            <h2 style={{ marginBottom: '10px' }}>Tambah Data Peminjaman</h2> {/* Tambahkan margin-bottom di sini */}
            {/* Form tambah barang di sini */}
            <form onSubmit={handleSubmit}>
              <label style={{ marginBottom: '1px' }}>Nama</label> {/* Tambahkan margin-bottom di sini */}
              <input type="text" name="nama" placeholder='silahkan isi nama peminjam ' />
              <br></br>
              <label>Kelas</label>
              <input type="text" name="kelas" placeholder='silahkan isi kelas peminjam'/>
              <br></br>
              <label>Nama Barang</label>
              <input type="text" name="nama_barang" placeholder='silahkan isi nama barang yang akan dipinjam'/>
              <br></br>
              <label>Merk</label>
              <input type="text" name="merek" placeholder='silahkan isi merk barang yang akan dipinjam'/>
              <br></br>
              <label>Kode</label>
              <input type="text" name="kode" placeholder='silahkan isi kode barangnya'/>
              <br></br>
              <label>Tanggal Pinjam</label>
            <input type="text" name="tanggal_pinjam" value={currentDate} readOnly />
            <br></br>
              <label>Status</label>
              <input type="text" name="status" value="Dipinjam" readOnly />
              <br></br>
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

FormTambahPeminjaman.propTypes = {
  onClose: PropTypes.func.isRequired // Validate onClose as a required function prop
};

export default FormTambahPeminjaman;
