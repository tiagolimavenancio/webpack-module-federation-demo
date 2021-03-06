import React from 'react';
import { Link } from "react-router-dom";

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles(theme => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
}));

export default function SideNav() {
    const classes = useStyles();
  
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button component={Link} to="/page1">
            <ListItemText primary="Dialog" />
          </ListItem>
          <ListItem button component={Link} to="/page2">
            <ListItemText primary="Styled Components" />
          </ListItem>
        </List>
      </Drawer>
    );
  }