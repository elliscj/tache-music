import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CenteredTabs = ({ currentPage, handlePageChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Music" onClick={() => handlePageChange("music")} />
        <Tab label="Bio" onClick={() => handlePageChange("bio")} />
        <Tab label="Contact" onClick={() => handlePageChange("contact")} />
      </Tabs>
    </Box>
  );
};

export default CenteredTabs;
