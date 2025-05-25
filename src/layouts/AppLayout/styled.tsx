import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const AppContainer = styled(Stack)({
  position: 'relative',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
});

export const OutletContainer = styled(Stack)({
  position: 'relative',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});
