import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useEmailStore } from 'hooks';
import { EmailListItem } from './EmailListItem';
import { EmailViewer } from './EmailViewer';
import { StyledList } from './styled';

export const EmailsPage: FC = () => {
  const { emailId } = useParams();
  const { emails, fetchIncomingEmails$, setEmails } = useEmailStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const subscription = fetchIncomingEmails$.subscribe((data) => {
      setEmails(data);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <CircularProgress />;

  if (emails.length === 0) {
    return <Typography variant="h4">Empty folder</Typography>;
  }

  return (
    <Stack direction="row" width="100%" height="100%">
      {/* TODO// add virtual list */}
      <StyledList>
        {emails.map((email) => (
          <EmailListItem key={email.id} email={email} />
        ))}
      </StyledList>
      <Divider orientation="vertical" />
      <Stack
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        {emailId ? (
          <EmailViewer emailId={emailId} />
        ) : (
          <Typography variant="h4">Please select an email</Typography>
        )}
      </Stack>
    </Stack>
  );
};
