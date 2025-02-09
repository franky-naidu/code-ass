import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Card,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Navbar } from "../../navbar";

const drawerWidth = 240;
const BasicDashboardLayout=(props)=>{
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // State for Avatar Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle avatar menu
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleLogout = () => {
    // Perform your logout logic here
    console.log("Logged out");
    setAnchorEl(null);
  };


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // Shift the AppBar right on desktop by drawerWidth
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
        color="primary"
      >
        <Toolbar>
          {/* Menu Icon (mobile only) */}
          <IconButton
            color="silver"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" color="white" noWrap component="div">
                Maestro
          </Typography>

          {/* Right-side icons */}
          <Box  className="ml-auto flex items-center">
            {/* Filter Icon */}
            <Tooltip title="filter by teams">
              <IconButton color="silver">
                <FilterListIcon />
              </IconButton>
            </Tooltip>

            {/* Avatar + Popup Menu */}
            <IconButton color="inherit" onClick={handleAvatarClick}>
              <Avatar alt="User Avatar" sx={{ width: 30, height: 30 }}>
                <span className="text-sm font-semibold"> BC</span>
              </Avatar>
            </IconButton>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

    
      <Navbar mobileOpen={mobileOpen} drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>

   
     <div className="bg-gray-100 h-screen w-full">
     <Box
        component="main"
        sx={{
          flexGrow: 1
        }}
      >
        <Toolbar />
        {props.children}
        
      </Box>
     </div>
    </Box>
  );
}

export default BasicDashboardLayout;
