import { Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<span>HOME PAGE</span>} />
      <Route path="/user-profile" element={<span>USER PROFILE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

