const TeamComponent = () => {
  return (
    <section id="tim" style={{ backgroundColor: 'rgb(106, 153, 187)', }}>
      <style>{`
        .team-card {
          opacity: 0;
          visibility: hidden;
          animation: fadeInUp 0.8s ease forwards;
          display: flex;
          flex-direction: column;
          height: 100%; /* Mengisi tinggi kontainer card */
          justify-content: center; /* Mengatur konten di tengah secara horizontal */
          align-items: center; /* Mengatur konten di tengah secara vertikal */
        }
        .card-img-top {
          width: 100%; /* Lebar gambar 100% dari kontainer */
          height: auto; /* Tinggi gambar menyesuaikan proporsi */
          object-fit: cover; /* Memastikan gambar tetap proporsional */
          max-width: 100%; /* Lebar gambar 100% dari kontainer */
          max-height: 100%; /* Tinggi gambar 100% dari kontainer */
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="container">
        <div className="row text-center">
          <div className="col text-center">
            <h1 className="mb-3 mt-3 text-5xl font-bold text-blue-500 text-white">Tim</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 mb-2">
            <div className="card team-card">
              <img src="src/assets/nadia.jpeg" className="card-img-top" alt="nadia sebagai analyst" />
              <div className="card-body">
                <p className="card-text">Hallo saya Nadia Nurfitria, sebagai Analyst</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <div className="card team-card">
              <img src="src/assets/intan.jpeg" className="card-img-top" alt="intan sebagai designer dan frontend" />
              <div className="card-body">
                <p className="card-text">Hallo saya Intan Nuraeni, sebagai Designer dan Frontend</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <div className="card team-card">
              <img src="src/assets/syarah.jpg" className="card-img-top" alt="syarah sebagai backend" />
              <div className="card-body">
                <p className="card-text">Hallo saya Syarah Ramadhani Widjaya, sebagai Backend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
