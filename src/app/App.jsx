import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Layout from "./Layout";

import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Cart from "../pages/Cart";
import Explore from "../pages/Explore";
import Community from "../pages/Community";

function AppContent() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
