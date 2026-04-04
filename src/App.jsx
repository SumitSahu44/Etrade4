import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import { Footer } from './components/Common/Footer'; // Fixed Import
import { Home } from './pages/Home';
import { BuyerPlatform } from './pages/BuyerPlatform';
import { SellerPlatform } from './pages/SellerPlatform';
import { ProductsPage } from './pages/ProductsPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { LiveChat } from './components/Common/LiveChat';
import { SocialSidebar } from './components/Common/SocialSidebar';
import { MediaGallery } from './pages/MediaGallery';
import { Tenders } from './pages/Tender';
import { Careers } from './pages/Careers';
import { News } from './pages/News';
import { TradeEnquiry } from './pages/TradeEnquiry';
import { Quotation } from './pages/Quotation';
import { Auction } from './pages/Auction';
import { Management } from './pages/Management'; // NEW
import { Terms } from './pages/Terms'; // NEW
import { AppointmentPage } from './pages/Appointment'; // NEW
import ScrollToTop from './components/Common/ScrollToTop'; // NEW
import Map from './components/Home/Map'; // NEW
import { Circulars } from './pages/Circular';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollToTop />
        <SocialSidebar />
        <LiveChat />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/buyer" element={<BuyerPlatform />} />
          <Route path="/seller" element={<SellerPlatform />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<MediaGallery />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/management" element={<Management />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/circulars" element={<Circulars />} />
          <Route path="/blog" element={<News title="Latest Blogs" />} />
          <Route path="/trade-enquiry" element={<TradeEnquiry />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/textile-map" element={<Map />} />
        </Routes>

        <Footer />

        {/* Floating WhatsApp stays everywhere */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-26 right-5  z-50 bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-white"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6" alt="WA" />
        </a>
      </div>
    </Router>
  );
}

export default App;