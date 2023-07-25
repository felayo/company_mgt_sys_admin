import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const DashLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default DashLayout;
