import NavbarComponent from '../components/NavbarComponent'
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutComponent";
import TeamComponent from "../components/TeamComponent";
import ContactComponent from "../components/ContactComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  return (
    <>
    <NavbarComponent />
    <HomeComponent/>
    <AboutComponent />
    <TeamComponent/>
    <ContactComponent/>
    <FooterComponent/>
    </>
  );
};

export default HomePage;