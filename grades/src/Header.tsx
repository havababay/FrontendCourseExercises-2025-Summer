import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Grade Insight
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
