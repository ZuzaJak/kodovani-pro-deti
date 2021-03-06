import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import StyleIcon from "@material-ui/icons/Style";
import Nav from "../Nav/nav.jsx";
import { HashLink } from "react-router-hash-link";

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
   
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
   
    color: "#0d0638",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  
  },
  hide: {
    textDecoration: 'none', 
    display: "none",
  },
  drawer: {
    
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
  
    width: drawerWidth,
  },
  drawerHeader: {
   
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {

    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


export default function PersistentDrawerLeft() {
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
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Nav>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            
          >
            <MenuIcon />
          </IconButton>
        </Nav>
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
        <div className={classes.drawerHeader} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List> 
          {["<HTML>", "<body>", "<h1>", "<p>", "<list>", "<a href>"].map(
            (text, index) => (
              <HashLink style={{textDecoration:"none"}} to={{ hash: text }}>
                <ListItem style={{color:'hotPink' }} button key={text}>
                  <ListItemIcon>
                    {index ? <CodeIcon /> : <CodeIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text}  />
                </ListItem>
              </HashLink>
            )
          )}
        </List>
        <Divider />
        <List>
          {[
            "CSS",
            ".background-color",
            ".border",
            ".font-family",
            ".font-size",
          ].map((text, index) => (
            <HashLink style={{textDecoration:"none"}} to={{ hash: text }}>
            <ListItem style={{color:'grey' }} button key={text}>
              <ListItemIcon>
                {index ? <StyleIcon /> : <StyleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </HashLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
