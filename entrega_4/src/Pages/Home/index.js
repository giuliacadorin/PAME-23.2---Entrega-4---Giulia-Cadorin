import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Header
        handleToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <Footer />
    </div>
  );
};

export default Home;
