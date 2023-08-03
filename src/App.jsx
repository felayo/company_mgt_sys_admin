// import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./pages/Public/Public";
import Login from "./pages/auth/Login";
import DashLayout from "./components/DashLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Staff from "./pages/admin/staff/StaffList";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashLayout />}>
              <Route index="dashboard" element={<Dashboard />} />
              <Route path="stafflist" element={<Staff />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
