import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

import Layout from "./components/layout/Layout";
import DashLayout from "./components/layout/DashLayout";

import Public from "./pages/Public/Public";
import Login from "./pages/auth/login/Login";
import PersistLogin from "./pages/auth/login/PersistLogin";
import RequireAuth from "./pages/auth/login/RequireAuth";
import { ROLES } from "./config/roles";
import Dashboard from "./pages/dashboard/Dashboard";
import FleetRecords from "./pages/fleets/FleetRecords";
import Users from "./pages/users/users";
import EditUser from "./pages/users/EditUser";
import Employees from "./pages/employee/adminAllEmployees";
import EmployeeDetails from "./pages/employee/adminEmployeeProfile";
import Profile from "./pages/employee/employeeProfile";
import Prefetch from "./redux/prefetch/Prefetch";

const App = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<Public />} />
            <Route path="/login" element={<Login />} />
            {/* Protected Routes */}
            <Route element={<PersistLogin />}>
              <Route
                element={
                  <RequireAuth allowedRoles={[...Object.values(ROLES)]} />
                }>
                <Route element={<Prefetch />}>
                  <Route path="/dashboard" element={<DashLayout />}>
                    <Route index="dashboard" element={<Dashboard />} />
                    <Route path="vehicle-records" element={<FleetRecords />} />
                    <Route path="profile" element={<Profile />} />

                    <Route path="users">
                      <Route index element={<Users />} />
                      <Route path=":id" element={<EditUser />} />
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>
                      <Route path="employees">
                        <Route index element={<Employees />} />
                        <Route path=":userId" element={<EmployeeDetails />} />
                      </Route>
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
            {/* End Protected Routes */}
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
