import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { Avatar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useEmailStore } from 'hooks';
import { IEmail } from 'interfaces';
import { Actions } from './Actions';

interface IProps {
  emailId: string;
}

export const EmailViewer: FC<IProps> = memo(({ emailId }) => {
  const navigate = useNavigate();
  const { emails, updateEmail } = useEmailStore();

  const email = useMemo(
    () => emails.find(({ id }) => emailId === id),
    [emails, emailId]
  );

  useEffect(() => {
    if (!email?.isRead) {
      updateEmail(emailId, { isRead: true });
    }
  }, []);

  const handleUpdateEmail = useCallback(
    (changes: Partial<IEmail>) => {
      if (changes.isDeleted) {
        navigate(-1);
      }
      updateEmail(emailId, changes);
    },
    [updateEmail, emailId]
  );

  if (!email) return <Typography variant="h4">Email not found</Typography>;

  const { subject, content, from, date } = email;

  const formattedDate = dayjs(date).format('DD MMM YYYY, hh:mm A');

  return (
    <Stack height="100%" width="100%" p={4} spacing={3} boxSizing="border-box">
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="h6">{subject}</Typography>
        <Actions email={email} onUpdateEmail={handleUpdateEmail} />
      </Stack>

      <Stack spacing={1} direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar sx={{ width: 30, height: 30 }}>
            <PersonIcon fontSize="small" />
          </Avatar>
          <Stack>
            <Typography variant="subtitle1">{from.name}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {from.email}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="subtitle2">{formattedDate}</Typography>
      </Stack>
      <Typography>{content}</Typography>
    </Stack>
  );
});
