import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import Footer from "../widgets/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Join from "../pages/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Sidebar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/my" element={<MyPage />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<Join />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
