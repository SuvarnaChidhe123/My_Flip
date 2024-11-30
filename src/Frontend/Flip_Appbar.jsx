import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Flip_Appbar() {
  // State for menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2874f0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Section 1: Logo */}
        <Box sx={{ flexBasis: '15%', display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', cursor: 'pointer' }}
          >
            Flipkart
          </Typography>
        </Box>

        {/* Section 2: Search Bar */}
        <Box
          sx={{
            flexBasis: '50%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 1,
            padding: '0 10px',
          }}
        >
          <InputBase
            placeholder="Search for products, brands and more"
            sx={{ flex: 1 }}
          />
          <IconButton type="submit" sx={{ p: '10px' }}>
            <SearchIcon sx={{ color: '#2874f0' }} />
          </IconButton>
        </Box>

        {/* Section 3: Profile/Login and Links */}
        <Box
          sx={{
            flexBasis: '35%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {/* Profile/Login */}
          <Button
            variant="text"
            sx={{ color: 'white', textTransform: 'none', marginRight: 2 }}
          >
            Login
          </Button>

          {/* Become a Seller */}
          <Typography
            variant="body2"
            sx={{ color: 'white', marginRight: 2, cursor: 'pointer' }}
          >
            Become a Seller
          </Typography>

          {/* Cart */}
          <IconButton color="inherit" sx={{ marginRight: 2 }}>
            <ShoppingCartIcon />
          </IconButton>

          {/* More Options */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Notifications</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
