import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="260px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;
