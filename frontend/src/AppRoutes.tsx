import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/layout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>} />
      <Route path="/user-profile" element={<span>USER PROFILE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

