import { useState } from 'react';

const NavbarComponent = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">SI Teman Pinjam Lab</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} aria-current="page" href="#home" onClick={() => handleSetActive('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleSetActive('about')}>Tentang</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'tim' ? 'active' : ''}`} href="#tim" onClick={() => handleSetActive('tim')}>Tim</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => handleSetActive('contact')}>Kontak</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default NavbarComponent;
