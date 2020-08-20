import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles, MenuItem, Menu, Typography, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import { WorkRounded, CalendarTodayRounded, AddRounded, TodayRounded, CollectionsRounded, AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

//zmiana
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
const Sidebar = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const sideList = side => (

    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button component={Link} to="/" class="center">
          <ListItemIcon>  <img src="./Capture-1.png" alt="bug" height={50} /></ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/clothes/list">
          <ListItemIcon> <CollectionsRounded /></ListItemIcon>
          <ListItemText primary={'SZAFA'} />
        </ListItem>
        <ListItem button component={Link} to="/TodaysSet">
          <ListItemIcon> <TodayRounded /></ListItemIcon>
          <ListItemText primary={"ZESTAW NA DZIŚ"} />
        </ListItem>
        <ListItem button component={Link} to="/clothes/add">
          <ListItemIcon> <AddRounded /></ListItemIcon>
          <ListItemText primary={'DODAJ UBRNIE'} />
        </ListItem>
        <ListItem button component={Link} to="/trip/list">
          <ListItemIcon> <WorkRounded /></ListItemIcon>
          <ListItemText primary={'PODRÓŻE'} />
        </ListItem>
        <ListItem button component={Link} to="/trip/add">
          <ListItemIcon> <CalendarTodayRounded /></ListItemIcon>
          <ListItemText primary={'PLANOWANIE PODRÓŻY'} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
            <MenuIcon />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
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
                <Link to="/Profile">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/MyAccount">
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Sidebar;