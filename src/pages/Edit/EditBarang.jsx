import PropTypes from 'prop-types'; // Import PropTypes

const EditBarang = ({ onClose }) => {
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
            height: 68%;
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
            <h2 style={{ marginBottom: '20px' }}>Edit Barang</h2> {/* Tambahkan margin-bottom di sini */}
            {/* Form tambah barang di sini */}
            <form>
              <label style={{ marginBottom: '10px' }}>Nama Barang:</label> {/* Tambahkan margin-bottom di sini */}
              <input type="text" name="nama_barang" placeholder='silahkan isi nama barang' />
              <br></br>
              <label>Merk:</label>
              <input type="text" name="merk_barang" placeholder='silahkan isi merk barang'/>
              <br></br>
              <label>Ruang:</label>
              <select name="ruang_barang">
                <option value="ruang1">Ruang lab pplg</option>
                <option value="ruang2">Ruang 2</option>
                <option value="ruang3">Ruang 3</option>
              </select>
              <br></br>
              <div className="button-container">
                <button type="button" className="cancel" onClick={onClose}>Batal</button>
                <button type="submit" className="add">Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

EditBarang.propTypes = {
  onClose: PropTypes.func.isRequired // Validate onClose as a required function prop
};

export default EditBarang;
