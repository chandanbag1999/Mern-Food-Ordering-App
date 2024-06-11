import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/Home';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout showHero><Home /></Layout>} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

