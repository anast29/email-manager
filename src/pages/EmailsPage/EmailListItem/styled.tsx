import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Badge from '@mui/material/Badge';

interface IStyledListItemButtonProps {
  isRead: boolean;
}

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isRead',
})<IStyledListItemButtonProps>(({ theme, isRead }) => ({
  flexDirection: 'column',
  alignItems: 'baseline',
  width: '100%',
  backgroundColor: isRead ? 'transparent' : theme.palette.common.white,
  padding: theme.spacing(1, 2, 1, 3),
}));

export const StyledBadge = styled(Badge)({
  position: 'absolute',
  top: '50%',
  left: 8,
});
