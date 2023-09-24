import Avatar from "@mui/material/Avatar";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import MathCharacter from "./MathCharacter";
import "./index.css";



function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      
      <Grid container spacing={0}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
              bgcolor: "#E9DADA",
              height: "30vh",
              width: "100vh",
              m: 1,
            }}>
            <Tooltip title="Símbolos matematicos">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 0 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar sx={{ width: 38, height: 38, bgcolor: "#883E3E" }}>
                  &#x222B;
                </Avatar>
              </IconButton>
            </Tooltip>
      
            <MathCharacter></MathCharacter>
   
    
            <Tooltip title="Símbolos griegos">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar sx={{ width: 38, height: 38, bgcolor: "#883E3E" }}>
                  &#x03B2;
                </Avatar>
              </IconButton>
            </Tooltip>
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
            </Menu>
          </Box>
        </Container>
      </Grid>

      <Grid container spacing={0}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100vh" },
            }}
            noValidate
            autoComplete="off">
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Código Latex"
                multiline
                rows={8}
                defaultValue="Escriba su ecuación en la caja"
              />
            </div>
          </Box>
        </Container>
      </Grid>
    </React.Fragment>
  );
}

//const root = ReactDOM.createRoot(document.getElementById("root"));



//root.render(<AccountMenu />);

//reportWebVitals(console.log);
export default AccountMenu;
