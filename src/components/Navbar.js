import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';    
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Wardrobe from './Wardrobe';
import {BrowserRouter , Route, Switch, Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
    
  }));

  

const NavBar = () => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

    return(   
        <div>
            
            <AppBar position="static">
            <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                         <MenuIcon />
                    </IconButton>
                    <Grid item xs={3} md={'auto'}>
                        <ButtonGroup                       
                            variant="contained"
                            color="initial"
                            size="large"                                                                                                           
                            >
                            <Link to="/Wardrobe">
                            <Button
                               variant="contained"
                               color="initial"
                               size="large"  
                               >Wardrobe</Button>
                            </Link>
                            <Button>View sets</Button>
                            <Button>View set for a day</Button>
                            <Button>Plan trip</Button>
                            <Button>Add cloth</Button>
                            <Button>View profile</Button>
                        </ButtonGroup>
                
                   </Grid>
                <Typography variant="h3" className={classes.title} >

                </Typography>

          {auth && (
            <div>
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        
                    >
                        <AccountCircle />
                    </IconButton>
                           <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
            </div>
          )}
                   
          
                        
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;