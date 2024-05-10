import { useState } from 'react';
import PropTypes from 'prop-types';

const EditProfilUser = ({ onClose }) => {
  const [previewImage, setPreviewImage] = useState(null);

  // Fungsi untuk menangani perubahan pada input file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
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
            background-color: rgba(0, 0, 0, 0.5); 
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

          .popup label {
            display: block;
            margin-bottom: 10px;
            font-size: 17px;
          }

          .popup input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            background-color: white;
            border: 2px solid grey;
            border-radius: 5px;
          }

          .popup .upload-container {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }

          .popup .upload-container label {
            background-color: #5896FF;
            color: white;
            padding: 8px 15px;
            border-radius: 0%;
            cursor: pointer;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .popup .upload-container input[type="file"] {
            display: none;
          }

          .popup .button-container {
            text-align: right;
            margin-top: 20px;
          }

          .popup button.cancel {
            background-color: red;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            margin-right: 20px;
            border-radius: 5px;
          }

          .popup button.add {
            background-color: blue;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
          }

          .upload-preview {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ccc;
            margin-right: 10px;
          }

          .upload-preview img {
            max-width: 100%;
            max-height: 100%;
          }
        `}
      </style>
      <div className="popup-container">
        <div className="popup">
          <div className="popup-inner">
            <h2 style={{ marginBottom: '20px' }}>Edit Profil</h2> 
            <form>
              <div className="upload-container">
                <div className="upload-preview">
                  {previewImage && <img src={previewImage} alt="Preview" />}
                </div>
                <label htmlFor="upload-file">Upload Foto</label>
                <input type="file" id="upload-file" onChange={handleFileChange} />
              </div>
              <label>Username</label> 
              <input type="text" name="nama_barang" placeholder='Silakan isi username baru' />
              <label>Password</label> 
              <input type="password" name="nama_barang" placeholder='Silakan isi password baru' />
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

EditProfilUser.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default EditProfilUser;
