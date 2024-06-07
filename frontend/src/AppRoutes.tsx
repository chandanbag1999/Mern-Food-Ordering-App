import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/user-profile" element={<span>USER PROFILE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

