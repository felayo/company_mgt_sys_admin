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
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "../styledComponents/styledComponents";
import profileImage from "../../assets/user.png";
import useAuth from "../../hooks/useAuth";

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
  const { email, role, isManager, isAdmin } = useAuth();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const navItems = [
    {
      id: 1,
      text: "Dashboard",
      icon: <HomeOutlined />,
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
      icon: <ShoppingCartOutlined />,
      link: "/profile",
    },
    {
      id: 4,
      text: isManager || isAdmin ? "Winelight Employees" : null,
      icon: isManager || isAdmin ? <Groups2Outlined /> : null,
      link: "/employees",
    },
    {
      id: 5,
      text: "WIP",
      icon: <ReceiptLongOutlined />,
      link: "#",
    },
    {
      id: 6,
      text: "Leave Tracker",
      icon: <ReceiptLongOutlined />,
      link: "/leave",
    },
    {
      id: 7,
      text: "Paystubs",
      icon: <ReceiptLongOutlined />,
      link: "/paystubs",
    },
    {
      id: 8,
      text: "Trainings",
      icon: <PublicOutlined />,
      link: "/trainings",
    },
    {
      id: 9,
      text: "Queries",
      icon: <PublicOutlined />,
      link: "/query",
    },
    {
      id: 10,
      text: "Announcements",
      icon: <PublicOutlined />,
      link: "/announcement",
    },
    {
      id: 5,
      text: "Exit",
      icon: <ReceiptLongOutlined />,
      link: "#",
    },
    {
      id: 11,
      text: "Department",
      icon: null,
      link: "#",
    },
    {
      id: 12,
      text: isManager || isAdmin ? "Department Records" : null,
      icon: isManager || isAdmin ? <PublicOutlined /> : null,
      link: "/department-records",
    },
    {
      id: 13,
      text: isManager || isAdmin ? "Assign Employee" : null,
      icon: isManager || isAdmin ? <PublicOutlined /> : null,
      link: "/assign-employee",
    },
    {
      id: 14,
      text: isManager || isAdmin ? "Deparments Document" : null,
      icon: isManager || isAdmin ? <PublicOutlined /> : null,
      link: "/dept-document",
    },
    {
      id: 15,
      text: "Vehicle",
      icon: null,
      link: "#",
    },
    {
      id: 16,
      text: isManager || isAdmin ? "Add New Vehicle" : null,
      icon: isManager || isAdmin ? <PointOfSaleOutlined /> : null,
      link: "/add-new-vehicle",
    },
    {
      id: 17,
      text: isManager || isAdmin ? "Vehicle Records" : null,
      icon: isManager || isAdmin ? <PointOfSaleOutlined /> : null,
      link: "/vehicle-records",
    },
    {
      id: 18,
      text: isManager || isAdmin ? "Maintenance Records" : null,
      icon: isManager || isAdmin ? <PointOfSaleOutlined /> : null,
      link: "/maintenance-records",
    },
    {
      id: 19,
      text: isManager || isAdmin ? "Add New Vehicle User" : null,
      icon: isManager || isAdmin ? <PointOfSaleOutlined /> : null,
      link: "/add-vehicle-user",
    },
    {
      id: 20,
      text: isManager ? "User" : null,
      icon: null,
      link: "#",
    },
    {
      id: 21,
      text: isManager ? "Users" : null,
      icon: isManager ? <PointOfSaleOutlined /> : null,
      link: "/users",
    },
    {
      id: 22,
      text: isManager ? "Add New User" : null,
      icon: isManager ? <TodayOutlined /> : null,
      link: "/add-user",
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
              color: theme.palette.grey[1000],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}>
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 2rem">
              <FlexBetween color={theme.palette.success.dark}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h3" fontWeight="bold">
                    Winelight
                  </Typography>
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
                  isManager || isAdmin ? "2.25rem 0 1rem 2rem" : "0"; // set margin according to roles

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
                            ? theme.palette.secondary.main
                            : "transparent",
                        color:
                          pathname === `/dashboard${navItem.link}`
                            ? theme.palette.background.alt
                            : theme.palette.primary[100],
                      }}>
                      <ListItemIcon
                        sx={{
                          ml: "1rem",
                          color:
                            pathname === `/dashboard${navItem.link}`
                              ? "green"
                              : theme.palette.primary[200],
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

          <Box position="relative" bottom="0.5rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 1rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.primary[100] }}>
                  {email}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.primary[200] }}>
                  {role}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.primary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
