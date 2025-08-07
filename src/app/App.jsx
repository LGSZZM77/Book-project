import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Cart from "../pages/Cart";
import Explore from "../pages/Explore";
import Community from "../pages/Community";

import PrivateRoute from "../shared/routes/PrivateRoute";

function AppContent() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/my"
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
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
