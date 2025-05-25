import React from "react";
import { NavLink } from "react-router";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { SIDEBAR_OPTIONS } from "./sidebarOptions";
import { StyledListItem, StyledDrawer, StyledListItemIcon } from "./styled";

export const Sidebar = () => {
  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>
        {SIDEBAR_OPTIONS.map(({ title, icon: Icon, to }) => (
          <StyledListItem
            key={title}
            component={NavLink}
            to={to}
            disablePadding
          >
            <StyledListItemIcon sx={{ minWidth: 40 }}>
              <Icon />
            </StyledListItemIcon>
            <ListItemText primary={title} />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};
