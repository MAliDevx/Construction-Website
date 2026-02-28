/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialPage } from './pages/TestimonialPage';
import { PackagesPage } from './pages/PackagesPage';
import { BookingProvider } from './context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/testimonials" element={<TestimonialPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}
