import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { FacebookRounded, LinkedIn, Twitter } from "@mui/icons-material";

const PublicPageFooter = () => {
  return (
    <AppBar position="static" sx={{ background: "#666", color: "#fff" }}>
      <Toolbar>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Winelight Analytical Systems Limited
        </Typography>
        <IconButton color="primary">
          <LinkedIn sx={{ fontSize: 25 }}/>
        </IconButton>
        <IconButton color="primary">
          <FacebookRounded sx={{ fontSize: 25 }}/>
        </IconButton>
        <IconButton color="primary">
          <Twitter  sx={{ fontSize: 25 }}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default PublicPageFooter;
