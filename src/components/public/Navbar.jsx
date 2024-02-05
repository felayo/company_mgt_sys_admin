import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Link,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/wine_logo.jpg";

const PublicNavbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "white" }} position="sticky">
        <Container>
          <Toolbar>
            <Grid container>
              <Grid item xs={4}>
                <Box
                  sx={{ paddingTop: 1, paddingBottom: 1 }}
                  alt="logo"
                  src={Logo}
                  component="img"
                />
              </Grid>
              <Grid item xs={8}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ paddingTop: 4 }}>
                  <Button
                    onClick={() => navigate("/")}
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "1.2em",
                    }}>
                    Home
                  </Button>
                  <Link href="https://www.zoho.com/login.html" target="_blank" rel="noopener">
                    <Button
                      sx={{
                        color: "black",
                        marginRight: 5,
                        textTransform: "capitalize",
                        fontSize: "1.2em",
                      }}>
                      Zoho-login
                    </Button>
                  </Link>
                  <Button
                    onClick={() => navigate("/login")}
                    sx={{
                      border: "1px solid black",
                      background: "green",
                      color: "white",
                    }}>
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default PublicNavbar;
