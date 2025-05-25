import React, { FC, memo, useMemo } from 'react';
import { IEmail } from 'interfaces';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { getActions } from './getActions';

interface IProps {
  email: IEmail;
  onUpdateEmail: (changes: Partial<IEmail>) => void;
}

export const Actions: FC<IProps> = memo(({ email, onUpdateEmail }) => {
  const actions = useMemo(
    () => getActions({ email, onUpdateEmail }),
    [email, onUpdateEmail]
  );

  return (
    <Stack direction="row" spacing={1}>
      {actions.map(({ id, icon: Icon, onClick }) => (
        <IconButton key={id} onClick={onClick}>
          <Icon />
        </IconButton>
      ))}
    </Stack>
  );
});
