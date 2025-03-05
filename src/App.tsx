import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import NewEntryPage from './pages/dashboard/NewEntryPage';
import EntryDetailPage from './pages/dashboard/EntryDetailPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import TermsPage from './pages/legal/TermsPage';
import LGPDPage from './pages/legal/LGPDPage';

function App() {
  // Mock authentication state
  const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/lgpd" element={<LGPDPage />} />
        
        {/* Protected Routes - In a real app, these would be protected with authentication */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/new-entry" element={<NewEntryPage />} />
        <Route path="/dashboard/entry/:id" element={<EntryDetailPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
