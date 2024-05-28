import { FaPrint } from "react-icons/fa6";

const PrintComponent = () => {
    const handlePrint = () => {
        window.open('http://127.0.0.1:8000/api/laporan_peminjaman/export-pdf', '_blank');
    };

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
                    display: flex;
                    align-items: center;
                    max-width: 200px;
                    width: 115px;
                }
                .btn-primary {
                    margin-left: 16px;
                }
                .btn-icon {
                    margin-right: 5px;
                    flex-shrink: 0;
                }
                `}
            </style>
            <div className="flex-container">
                <button className="btn btn-primary bg-blue-500" onClick={handlePrint}>
                    <FaPrint className="btn-icon" />
                    <span>Cetak</span>
                </button>
            </div>
        </div>
    );
};

export default PrintComponent;
