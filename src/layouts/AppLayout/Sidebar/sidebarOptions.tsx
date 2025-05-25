import { FC } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import TrashIcon from "@mui/icons-material/Delete";
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import { INBOX_ROUTE, SENT_ROUTE, STARRED_ROUTE, TRASH_ROUTE } from "constants/Router";

interface ISideBarOprion {
  title: string;
  icon: FC<SvgIconProps>;
  to: string;
}

export const SIDEBAR_OPTIONS: ISideBarOprion[] = [
  {
    title: "Inbox",
    icon: InboxIcon,
    to: INBOX_ROUTE,
  },
  {
    title: "Starred",
    icon: StarIcon,
    to: STARRED_ROUTE,
  },
  {
    title: "Sent",
    icon: SendIcon,
    to: SENT_ROUTE,
  },
  {
    title: "Deleted",
    icon: TrashIcon,
    to: TRASH_ROUTE,
  },
];
