import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./pages/Public/Public";
import Login from "./pages/auth/Login";
import DashLayout from "./components/DashLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Staff from "./pages/admin/staff/StaffList";

const App = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashLayout />}>
              <Route index="dashboard" element={<Dashboard />} />
              <Route path="employee" element={<Staff />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
