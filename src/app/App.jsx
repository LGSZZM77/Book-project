import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import Footer from "../widgets/Footer";

// React-Router-Dom 도입하여 pages 컴포넌트 연결하기
import Home from "../pages/Home";
// import MyPage from "../pages/MyPage";
// import Cart from "../pages/Cart";
// import Login from "../pages/Login";
// import Join from "../pages/Join";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Sidebar />
      <div className="flex-1">
        <Home />
        {/* <MyPage />
      <Cart />
      <Login />
      <Join /> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
