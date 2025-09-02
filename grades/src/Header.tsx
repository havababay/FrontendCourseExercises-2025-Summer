import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
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
            <Typography variant="h6" component="div">
              Grade Insight
            </Typography>
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
