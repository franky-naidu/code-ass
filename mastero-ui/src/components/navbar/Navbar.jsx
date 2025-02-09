import { Box, Drawer, List, ListItem, ListItemText,ListItemIcon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import HomeOutlined from "@mui/icons-material/HomeOutlined"
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { NavLink, useMatch } from 'react-router-dom';
const NavDrawer = ()=>{
  //to-do dynamically generate the navList database from the state
  const navList= [{
    title:"Dashboard",
    path:"/qwewq/dashboard",
    icon: <HomeOutlined/>
  },{
    title:"Archive",
    path:"/archive",
    icon: <ArchiveOutlined/>
  },{
    title:"Collections",
    path:"/collection",
    icon: <CollectionsOutlinedIcon/>
  }

]
  return (
    <div>
      <Toolbar>
        <div className='flex'>
          <p className='font-semibold text-md text-end'> Welcome  Bryan</p>
        </div>
      </Toolbar>
      <List>
       
        {navList.map(navInfo=>{
          const isActive= useMatch(navInfo.path) !=null;
        
          return (
            <NavLink to={navInfo.path} key={navInfo}>
               <ListItem button={true} key={navInfo.title} sx={(isActive)?{
                color:"white",
                background:"blue"
              }:{}}>
              {navInfo.icon && ( <ListItemIcon sx={(isActive)?{
                color:"white",
              }:{}} >
                {navInfo.icon}
              </ListItemIcon>)}
             <ListItemText primary={navInfo.title} />
           </ListItem>
            </NavLink>
          )
        })}
      </List>
    </div>
  )
}


const Navbar = ({mobileOpen=false, drawerWidth=240, handleDrawerToggle,props}) => {
  return (
    <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="sidebar navigation"
  >
    {/* Mobile Drawer (Temporary) */}
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <NavDrawer/>
    </Drawer>

    {/* Desktop Drawer (Persistent, always open) */}
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      <NavDrawer/>
    </Drawer>
  </Box>
  )
}

export default Navbar