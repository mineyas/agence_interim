// import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

// import {
//   Box,
//   CssBaseline,
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   Divider,
//   List,
//   Badge,
//   IconButton,
//   Table,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
//   Grid,
// } from "@material-ui/core";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Book from "@material-ui/icons/Book";
// import Assessment from "@material-ui/icons/Assessment";
// import AddIcCall from "@material-ui/icons/AddIcCall";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import Admin from "./Admin";
// import AgencyList from "./AgencyList";

// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//     //   paddingLeft: 200,
//     backgroundColor: "#CCD5AE", // keep right padding when drawer closed
//   },
//   title: {
//     paddingLeft: 224,
//     flexGrow: 1,
//     textAlign: "left",
//   },
//   paper: {
//     // width: "500px",
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//   },
//   drawer: {
//     width: drawerWidth,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   root: {
//     display: "flex",
//   },
// }));
// const drawerWidth = 240;

// export default function PermanentDrawerAdmin() {
//   const classes = useStyles();

//   return (
//     <div>

//     </div>
//     // <div className={classes.root}>
//     //   <AppBar>
//     //     <Toolbar className={classes.toolbar}>
//     //       <Typography
//     //         component="h1"
//     //         variant="h6"
//     //         color="inherit"
//     //         noWrap
//     //         className={classes.title}
//     //       >
//     //         Dashboard
//     //       </Typography>
//     //       <IconButton>
//     //         <Badge badgeContent={5} color={"secondary"}>
//     //           <NotificationsIcon style={{ color: "red" }} />
//     //         </Badge>
//     //       </IconButton>
//     //     </Toolbar>
//     //   </AppBar>
//     //   <Drawer
//     //     className={classes.drawer}
//     //     variant="permanent"
//     //     anchor="left"
//     //     classes={{ paper: classes.drawerPaper }}
//     //   >
//     //     <Toolbar />
//     //     <Divider />
//     //     <List>
//     //       {["Messages", "Contrat Evoyé", "Agences"].map((text, index) => (
//     //         <ListItem key={text} disablePadding>
//     //           <ListItemButton>
//     //             <ListItemIcon>
//     //               {index % 2 === 0 ? <Book /> : <NotificationsIcon />}
//     //             </ListItemIcon>
//     //             <ListItemText primary={text} />
//     //           </ListItemButton>
//     //         </ListItem>
//     //       ))}
//     //     </List>
//     //     <Divider />
//     //     <List>
//     //       {["Tous les contrats", "En Attente"].map((text, index) => (
//     //         <ListItem key={text} disablePadding>
//     //           <ListItemButton>
//     //             <ListItemIcon>
//     //               {index % 2 === 0 ? <Book /> : <NotificationsIcon />}
//     //             </ListItemIcon>
//     //             <ListItemText primary={text} />
//     //           </ListItemButton>
//     //         </ListItem>
//     //       ))}
//     //     </List>
//     //   </Drawer>
//     //   {/* <Admin /> */}
//     //   <Grid item xs={12} >
//     //     <Paper className={classes.paper}>
//     //       <AgencyList />
//     //     </Paper>
//     //   </Grid>
//     // </div>
//   );
// }
