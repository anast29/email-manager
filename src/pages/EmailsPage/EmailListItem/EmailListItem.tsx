import React, { FC, memo, useCallback, useMemo } from "react";
import { generatePath, useNavigate, useParams } from "react-router";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { DEFAULT_FOLDER_ROUTE } from "constants/Router";
import { IEmail } from "interfaces";
import { useEmailStore } from "hooks";
import { formatDate } from "helpers";
import { ContextualMenu } from "./ContextualMenu";
import { StyledBadge, StyledListItemButton } from "./styled";

interface IProps {
  email: IEmail;
}

export const EmailListItem: FC<IProps> = memo(({ email }) => {
  const { folder, emailId } = useParams();

  const { updateEmail } = useEmailStore();
  const navigate = useNavigate();

  const { id, from, subject, content, isRead, date } = email;

  const formattedDate = useMemo(() => formatDate(date), [date]);

  const handleOpenEmailViewer = useCallback(() => {
    if (emailId === id) return;
    if (!isRead) {
      updateEmail(id, { isRead: true });
    }

    navigate(generatePath(DEFAULT_FOLDER_ROUTE, { folder, emailId: id }));
  }, [navigate, updateEmail, folder, id, isRead]);

  const handleUpdateEmail = useCallback(
    (changes: Partial<IEmail>) => {
      updateEmail(id, changes);
    },
    [updateEmail, id]
  );

  return (
    <>
      <StyledListItemButton
        disableRipple
        isRead={isRead}
        onClick={handleOpenEmailViewer}
      >
        {!isRead && <StyledBadge color="primary" variant="dot" />}
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography variant="subtitle2" color="info">
            {from.name}
          </Typography>
          <ContextualMenu email={email} onUpdateEmail={handleUpdateEmail} />
        </Stack>

        <ListItemText
          primary={subject}
          secondary={
            <Typography component="span" variant="body2">
              {content}
            </Typography>
          }
        />
        <Stack width="100%">
          <Typography variant="caption" textAlign="end">
            {formattedDate}
          </Typography>
        </Stack>
      </StyledListItemButton>
      <Divider />
    </>
  );
});
