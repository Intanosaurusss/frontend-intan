import { FaInstagram, FaTiktok, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactComponent = () => {
  return (
    <section id="contact">
      <style>{`
        .contact-link {
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
      <div className="hero min-h-screen" style={{backgroundImage: 'url(src/assets/3.png)'}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Kontak Kami</h1>
            <div className="flex items-center mb-3 contact-link">
              <Link to="https://www.instagram.com/pplgsmkn1ciomas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center no-underline text-white">
                <FaInstagram className="mr-2" />
                <span>Instagram</span>
              </Link>
            </div>
            <div className="flex items-center mb-3 contact-link">
              <Link to="https://www.tiktok.com/@pplgsmkn1ciomas?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="flex items-center no-underline text-white">
                <FaTiktok className="mr-2" />
                <span>TikTok</span>
              </Link>
            </div>
            <div className="flex items-center mb-3 contact-link">
              <Link to="https://pplgsmkn1ciomas.com/" target="_blank" rel="noopener noreferrer" className="flex items-center no-underline text-white">
                <FaGoogle className="mr-2" />
                <span>Website</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
