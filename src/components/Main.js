import { useState } from "react";
import Music from "../pages/Music";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";
import CenteredTabs from "./Navbar";

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
    <div>
      <CenteredTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
};

export default Main;
