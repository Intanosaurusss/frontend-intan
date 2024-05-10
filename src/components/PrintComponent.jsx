import { FaPrint } from "react-icons/fa6";

const PrintComponent = () => {
    return (
        <div>
            <style>
                {`
                .btn-container {
                    margin-top: 0.8rem;
                    display: flex;
                    align-items: center;
                }
                .btn {
                    background-color: #0D6EFD;
                    border: none;
                    color: white;
                    padding: 5px 20px;
                    text-align: center;
                    text-decoration: none;
                    font-size: 16px;
                    cursor: pointer;
                    display: flex; /* Menjadikan kontainer tombol flex */
                    align-items: center; /* Menyusun ikon dan teks secara vertikal */
                    max-width: 200px; /* Menentukan lebar maksimum tombol */
                    width: 115px; /* Melebarkan tombol */
                }
                .btn-primary {
                    margin-left: 16px; /* Mengurangi margin agar sejajar dengan ikon */
                }
                .btn-icon {
                    margin-right: 5px; /* Memberikan sedikit ruang antara ikon dan teks */
                    flex-shrink: 0; /* Mencegah ikon meregang sepanjang flex container */
                }
                `}
            </style>
            <div className="flex-container">
                <a className="btn btn-primary bg-blue-500" href="#" role="button">
                    <FaPrint className="btn-icon" />
                    <span>Cetak</span>
                </a>
            </div>
        </div>
    );
};

export default PrintComponent;
