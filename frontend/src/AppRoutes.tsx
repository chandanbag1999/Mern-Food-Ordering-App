import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/Home';
import AuthCallbackPage from './pages/AuthCallbackPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/user-profile" element={<span>USER PROFILE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

