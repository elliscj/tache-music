import { useState } from "react";
import Music from "../pages/Music";
import Navbar from "./Navbar";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";

const Main = () => {
  const renderPage = () => {
    if (currentPage === "music") {
      return <Music />;
    }
    if (currentPage === "bio") {
      return <Bio />;
    }
    return <Contact />;
  };

  const [currentPage, setCurrentPage] = useState("about");

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
};

export default Main;
