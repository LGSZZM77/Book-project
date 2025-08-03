import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import Footer from "../widgets/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Sidebar />
      <main className="flex-1 flex bg-main-bg">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
