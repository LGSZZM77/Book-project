import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Layout from "./Layout";

import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Cart from "../pages/Cart";

function AppContent() {
  const location = useLocation();
  const hideNavbar = ["/my", "/cart"].includes(location.pathname);

  return (
    <Layout hideNavbar={hideNavbar}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />
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
