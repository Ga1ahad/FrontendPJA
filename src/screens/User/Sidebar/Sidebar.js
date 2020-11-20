import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Menu } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemIcon, Drawer, AppBar, IconButton, Toolbar } from '@material-ui/core';
import Logo from '../../../assets/images/clothesy.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  logo: {
    height: '70%',
    width: '70%',
    margin: 'auto'
  },
}));

export default function Sidebar({ routes }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
            <img src={Logo} alt="Clothesy" className={classes.logo} />
          </ListItem>
          {routes.map(({ path, sidebarName, ...prop }, index) => {
            return (
              <ListItem button to={path} component={Link} onClick={handleDrawerClose} key={index} >
                <ListItemIcon>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText primary={sidebarName} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
