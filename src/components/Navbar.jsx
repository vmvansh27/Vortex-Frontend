import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LogoutIcon from "@mui/icons-material/Logout";

const Dropdown = ({ title, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {title}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {items.map(({ label, to }) => (
          <MenuItem
            key={label}
            component={Link}
            to={to}
            onClick={() => setAnchorEl(null)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = (
    <>
      <Button component={Link} to="/whychooseus" color="inherit">
        Use Cases
      </Button>
      <Button component={Link} to="/productsServices" color="inherit">
        Products & Services
      </Button>
      <Dropdown
        title="Opps and Leads"
        items={[
          { label: "Register Deal", to: "/home/opps/register" },
          { label: "View Registered Deals", to: "/home/opps/registered" },
          // { label: "View Opportunities", to: "/home/opps/opportunities" },
        ]}
      />
      <Button component={Link} to="/technology" color="inherit">
        Technology
      </Button>

      {user && (
        <Button color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </Button>
      )}
    </>
  );

  const drawerList = (
    <Box
      sx={{ width: 250, bgcolor: "#e8e8e8", height: "100%" }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        <ListItem button component={Link} to="/whychooseus">
          <ListItemText
            primary="Why Choose Us"
            primaryTypographyProps={{ style: { color: "#404040" } }}
          />
        </ListItem>
        <ListItem button component={Link} to="/productsServices">
          <ListItemText
            primary="Products & Services"
            primaryTypographyProps={{ style: { color: "#404040" } }}
          />
        </ListItem>
        <Divider sx={{ bgcolor: "#1f2b4a" }} />
        <ListItem button component={Link} to="/home/opps/register">
          <ListItemText
            primary="Register Deal"
            primaryTypographyProps={{ style: { color: "#404040" } }}
          />
        </ListItem>
        <ListItem button component={Link} to="/home/opps/registered">
          <ListItemText
            primary="View Registered Deals"
            primaryTypographyProps={{ style: { color: "#404040" } }}
          />
        </ListItem>
        <ListItem button component={Link} to="/home/opps/opportunities">
          <ListItemText
            primary="View Opportunities"
            primaryTypographyProps={{ style: { color: "#404040" } }}
          />
        </ListItem>
        <Divider sx={{ bgcolor: "#1f2b4a" }} />
        <ListItem button component={Link} to="/university">
          <ListItemText
            primary="Partner University"
            primaryTypographyProps={{ style: { color: "#404040" } }}
          />
        </ListItem>
        <ListItem button component={Link} to="/assets">
          <ListItemText
            primary="Assets"
            primaryTypographyProps={{ style: { color: "#404040" } }}
          />
        </ListItem>
        {user && (
          <>
            <Divider sx={{ bgcolor: "#1f2b4a" }} />
            <ListItem button onClick={handleLogout}>
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{ style: { color: "#404040" } }}
              />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#e8e8e8", color: "#040404", py: 2 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <img src={Logo} alt="logo" height="40" />
              <Typography style={{ color: "#CDC9CE", fontWeight: "600" }}>
                India
              </Typography>
            </Box>
          </Link>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "1rem",
              alignItems: "center",
            }}
          >
            {navItems}
          </Box>

          {/* Mobile Hamburger Menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
