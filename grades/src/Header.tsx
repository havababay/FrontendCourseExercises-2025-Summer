import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    navigate(url);
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h1" component="div">
              Grade Insight
            </Typography>
            {!isMobile && (
              <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
                <List>
                  <ListItem component="button" onClick={() => handleNavigation("/")}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem component="button" onClick={() => handleNavigation("/help")}>
                    <ListItemText primary="Help" />
                </ListItem>
                </List>
    </div>)}
          </Toolbar>
        </AppBar>
      </header>
      <Drawer open={open} onClose={toggleDrawer}>
        <div style={{ width: "250px" }}>
          <List>
            <ListItem onClick={() => handleNavigation("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={() => handleNavigation("/help")}>
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem onClick={() => handleNavigation("/students")}>
              <ListItemText primary="Students Management" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
