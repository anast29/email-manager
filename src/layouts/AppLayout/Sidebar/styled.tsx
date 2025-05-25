import { alpha, styled } from '@mui/material/styles';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLinkProps } from 'react-router';

const DRAWER_WIDTH = 200;

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  [`.${drawerClasses.paper}`]: {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
  },
}));

export const StyledListItem = styled(ListItem)<ListItemProps & NavLinkProps>(
  ({ theme }) => ({
    padding: theme.spacing(1, 2),
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.light, 0.1),
    },
  })
);

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 40,
  color: theme.palette.common.white,
}));
