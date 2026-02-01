import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './hooks/useCart';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Packages from './pages/Packages';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="alat" element={<Catalog />} />
                            <Route path="detail/:slug" element={<Detail />} />
                            <Route path="keranjang" element={<Cart />} />
                            <Route path="checkout" element={<Checkout />} />
                            <Route path="tentang" element={<About />} />
                            <Route path="kontak" element={<Contact />} />
                            <Route path="paket" element={<Packages />} />
                        </Route>
                    </Routes>
                </Router>
            </CartProvider>
        </HelmetProvider>
    );
};

export default App;
