// MathCharacter.js
import Divider from '@mui/material/Divider'; // Import Divider
import ListItemIcon from '@mui/material/ListItemIcon'; // Import ListItemIcon
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; // Import MenuItem
import React, { useState } from 'react';

function MathCharacter() {
  const [anchorEl, setAnchorEl] = useState(null); // Define anchorEl state
  const [open, setOpen] = useState(false); // Define open state



  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div>
  <Menu
  anchorEl={anchorEl}
  id="account-menu"
  open={open}
  onClose={handleClose}
  onClick={handleClose}
  PaperProps={{
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: 1,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 2,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(0%) rotate(45deg)",
        zIndex: 0,
      },
    },
  }}
  transformOrigin={{ horizontal: "right", vertical: "top" }}
  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  MenuListProps={{
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between", // Alinea los elementos en filas de 5
    },
  }}>
  <Divider />
  <MenuItem onClick={handleClose} sx={{ paddingLeft: 0 }}>
    <ListItemIcon>
      {/* ∑ = &#x2211; */}
      <MathCharacter symbol="∑" />
    </ListItemIcon>
    &#x2211;
  </MenuItem>
  <Divider />
</Menu>
</div>
  );

}

export default MathCharacter;
