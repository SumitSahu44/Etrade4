import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import { Home } from './pages/Home';
import { BuyerPlatform } from './pages/BuyerPlatform';
import { SellerPlatform } from './pages/SellerPlatform';
import { ProductsPage } from './pages/ProductsPage';  
import { About } from './pages/About';
import { Contact } from './pages/Contact';  
import { LiveChat } from './components/Common/LiveChat';
import { TenderSection } from './components/Platform/TenderSection';
import { SocialSidebar } from './components/Common/SocialSidebar';
import { MediaGallery } from './pages/MediaGallery';
import { Tenders } from './pages/Tender';
import { Careers } from './pages/Careers';
import { News } from './pages/News';
import { TradeEnquiry } from './pages/TradeEnquiry';  
import { Quotation } from './pages/Quotation';
import { Auction } from './pages/Auction';  

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <SocialSidebar />
        <LiveChat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/buyer" element={<BuyerPlatform />} />
          <Route path="/seller" element={<SellerPlatform />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<MediaGallery />} />
          <Route path="/Tender" element={<TenderSection />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/circulars" element={<News title="Circulars" />} />
          <Route path="/blog" element={<News title="Latest Blogs" />} />
          <Route path="/trade-enquiry" element={<TradeEnquiry />} />
          <Route path="/quotation" element={<Quotation />} />
<Route path="/auction" element={<Auction />} />
        </Routes>
        {/* Floating WhatsApp stays everywhere */}
        <a href="#" className="fixed bottom-10 right-10 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-all">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6" alt="WA" />
        </a>
      </div>
    </Router>
  );
}

export default App;