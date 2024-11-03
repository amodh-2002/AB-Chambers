import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Cookie from "./component/Cookie"; // Import the Cookie component
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import About from "./pages/About";
import MissionVision from "./pages/MissionVision";
import TeamPage from "./pages/TeamPage";
import PracticeAreaPage from "./pages/PracticeAreaPage";
import Careers from "./pages/Careers";
import OurFounder from "./pages/OurFounder";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20"> {/* Add padding-top here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/our-firm" element={<About />} />
            <Route path="/our-founder" element={<OurFounder />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/our-team" element={<TeamPage />} />
            <Route path="/practice-areas" element={<PracticeAreaPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Cookie /> {/* Add the Cookie component here */}
      </div>
    </Router>
  );
};

// Placeholder components for each route
// const OurFirm = () => <h1>Our Firm</h1>;
// const OurFounder = () => <h1>Our Founder</h1>;
// const MissionVision = () => <h1>Mission & Vision</h1>;
// const OurTeam = () => <h1>Our Team</h1>;
// const PracticeAreas = () => <h1>Practice Areas</h1>;
// const Careers = () => <h1>Careers</h1>;
// const ContactUs = () => <h1>Contact Us</h1>;

export default App;
