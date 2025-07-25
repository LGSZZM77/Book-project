import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import Footer from "../widgets/Footer";
import Navbar from "../widgets/Navbar";

const Layout = ({ children, hideNavbar }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Sidebar />
      {!hideNavbar && <Navbar />}
      <main className="flex-1 bg-main-bg">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
