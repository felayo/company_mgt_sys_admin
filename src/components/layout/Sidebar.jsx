/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  Dashboard,
  Person2,
  ChevronRightOutlined,
  GroupWork,
  ExitToApp,
  Payment,
  Groups2Outlined,
  ModelTraining,
  QueryBuilder,
  Announcement,
  Close,
  PersonAdd,
  Segment,
  DomainAdd,
  Folder,
  Add,
  DriveEta,
  CarRepair,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "../styledComponents/styledComponents";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/wine_logo.jpg"

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const { isManager, isAdmin } = useAuth();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const navItems = [
    {
      id: 1,
      text: "Dashboard",
      icon: <Dashboard />,
      link: "",
    },
    {
      id: 2,
      text: "Employee",
      icon: null,
      link: "#",
    },
    {
      id: 3,
      text: "My Profile",
      icon: <Person2 />,
      link: "/profile",
    },
    {
      id: 4,
      text: isManager || isAdmin ? "Employees" : null,
      icon: isManager || isAdmin ? <Groups2Outlined /> : null,
      link: "/employees",
    },
    {
      id: 5,
      text: "WIP",
      icon: <GroupWork />,
      link: "/wips",
    },
    {
      id: 6,
      text: "Leave Tracker",
      icon: <ExitToApp />,
      link: "/leave",
    },
    {
      id: 7,
      text: "Paystubs",
      icon: <Payment />,
      link: "/paystubs",
    },
    {
      id: 8,
      text: "Trainings",
      icon: <ModelTraining />,
      link: "/trainings",
    },
    {
      id: 9,
      text: "Queries",
      icon: <QueryBuilder />,
      link: "/query",
    },
    {
      id: 10,
      text: "Announcements",
      icon: <Announcement />,
      link: "/announcement",
    },
    {
      id: 11,
      text: "Exit",
      icon: <Close />,
      link: "#",
    },
    {
      id: 21,
      text: isManager ? "User" : null,
      icon: null,
      link: "#",
    },
    {
      id: 22,
      text: isManager ? "Users" : null,
      icon: isManager ? <Groups2Outlined /> : null,
      link: "/users",
    },
    {
      id: 23,
      text: isManager ? "Add New User" : null,
      icon: isManager ? <PersonAdd /> : null,
      link: "/add-user",
    },
    {
      id: 12,
      text: "Department",
      icon: null,
      link: "#",
    },
    {
      id: 13,
      text: isManager || isAdmin ? "Department Records" : null,
      icon: isManager || isAdmin ? <Segment /> : null,
      link: "/department-records",
    },
    {
      id: 14,
      text: isManager || isAdmin ? "Assign Employee" : null,
      icon: isManager || isAdmin ? <DomainAdd /> : null,
      link: "/assign-employee",
    },
    {
      id: 15,
      text: isManager || isAdmin ? "Documents" : null,
      icon: isManager || isAdmin ? <Folder /> : null,
      link: "/dept-document",
    },
    {
      id: 16,
      text: "Vehicle",
      icon: null,
      link: "#",
    },
    {
      id: 17,
      text: isManager || isAdmin ? "Add Vehicle" : null,
      icon: isManager || isAdmin ? <Add /> : null,
      link: "/add-new-vehicle",
    },
    {
      id: 18,
      text: isManager || isAdmin ? "Vehicle Records" : null,
      icon: isManager || isAdmin ? <DriveEta /> : null,
      link: "/vehicle-records",
    },
    {
      id: 19,
      text: isManager || isAdmin ? "Maintenance Records" : null,
      icon: isManager || isAdmin ? <CarRepair /> : null,
      link: "/maintenance-records",
    },
    {
      id: 20,
      text: isManager || isAdmin ? "Add Vehicle User" : null,
      icon: isManager || isAdmin ? <PersonAdd /> : null,
      link: "/add-vehicle-user",
    },
  ];

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.success.dark,
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}>
          <Box width="100%">
            <Box m="1.1rem 2rem 1.1rem 2rem">
              <FlexBetween color={theme.palette.success.main}>
                <Box display="flex" alignItems="center" gap="0.5rem" ml={3}>
                  <Box component="img" src={Logo} alt="logo"/>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <Divider />
            <List>
              {navItems.map((navItem) => {
                const marginCondition =
                  isManager || isAdmin ? "1.5rem 0 1rem 2rem" : "0"; // set margin according to roles

                if (!navItem.icon) {
                  return (
                    <Typography
                      fontWeight="bold"
                      key={navItem.id}
                      sx={{ m: `${marginCondition}` }}>
                      {isManager || isAdmin ? navItem.text : null}
                    </Typography>
                  );
                }

                if (!isManager && navItem.text == "Dashboard") {
                  navItem.text = "Home";
                }

                return (
                  <ListItem key={navItem.id} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/dashboard${navItem.link}`);
                      }}
                      sx={{
                        backgroundColor:
                          pathname === `/dashboard${navItem.link}`
                            ? theme.palette.neutral.dark
                            : "transparent",
                        color:
                          pathname === `/dashboard${navItem.link}`
                            ? theme.palette.background.alt
                            : theme.palette.neutral.dark,
                      }}>
                      <ListItemIcon
                        sx={{
                          ml: "1rem",
                          color:
                            pathname === `/dashboard${navItem.link}`
                              ? theme.palette.background.alt
                              : theme.palette.neutral.dark,
                        }}>
                        {navItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={navItem.text} />
                      {pathname === `/dashboard${navItem.link}` && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
