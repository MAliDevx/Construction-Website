/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PackagesPage } from './pages/PackagesPage';
import { BookingProvider } from './context/BookingContext';
import {ConstructionServices} from './pages/ConstructionServices';
import { InteriorDesigningServices } from './pages/InteriorDesigningServices';
import { ProjectAnalysisServices } from './pages/ProjectAnalysis.service';
import { ProjectPlanningServices } from './pages/ProjectPlaningService';
import { ReviewsPage } from './pages/ReviewsPage';
const PageWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <motion.div
    className="min-h-screen"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <ServicesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/packages"
          element={
            <PageWrapper>
              <PackagesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/reviews"
          element={
            <PageWrapper>
              <ReviewsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/construction"
          element={
            <PageWrapper>
              <ConstructionServices />
            </PageWrapper>
          }
        />
        <Route
          path="/interior-designing"
          element={
            <PageWrapper>
              <InteriorDesigningServices />
            </PageWrapper>
          }
        />
        <Route
          path="/project-analysis"
          element={
            <PageWrapper>
              <ProjectAnalysisServices />
            </PageWrapper>
          }
        />
        <Route
          path="/project-planning"
          element={
            <PageWrapper>
              <ProjectPlanningServices />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </BookingProvider>
  );
}
