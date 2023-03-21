import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  Badge,
  IconButton,
  Paper,
  Grid,
  Avatar,
  Container,
} from "@material-ui/core";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Book from "@material-ui/icons/Book";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "#FAEDCD", // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  avatar:{
    margin: '0 auto',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  },
  
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  toolbarchild: theme.mixins.toolbar,
}));
const drawerWidth = 240;

export default function DrawerUser({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard User
          </Typography>
          <IconButton>
            <Badge badgeContent={5} color={"secondary"}>
              <NotificationsIcon style={{ color: "red" }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Paper className={classes.avatar}>
          <Typography variant="h4">User Bob</Typography>
          <Avatar
            alt="User Bob"
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
          />
        </Paper>

        <Toolbar />
        <Divider />
        <List>
          {["Messages", "Contrats en attent", "Contrat Validé"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Book /> : <NotificationsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Tous les contrats", "Contrat passé"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Book /> : <NotificationsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container maxWidth="lg" className={classes.container}>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div className={classes.toolbarchild} />
          <div>{children}</div>
        </Paper>
      </Grid>
      </Container>

    </div>
  );
}
