const AboutComponent = () => {
  return (
    <section id="about">
      <style>{`
        .hero {
          min-height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .animated-text {
          opacity: 0;
          visibility: hidden;
          animation: fadeInUp 0.8s ease forwards;
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
    <div className="hero min-h-screen" style={{backgroundImage: 'url(src/assets/2.png)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Tentang Kami</h1>
      <p className="mb-2">Teman Pinjam Lab adalah sebuah aplikasi yang dibuat untuk </p>
      <p className="mb-2">membantu admin dalam mengelola fasilitas yang akan </p>
      <p className="mb-5">dipinjamkan kepada siswa yang membutuhkannya di sekolah</p>
      </div>
  </div>
</div>
</section>
  );
};

export default AboutComponent;
