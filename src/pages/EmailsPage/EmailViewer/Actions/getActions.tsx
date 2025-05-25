import { FC } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { IEmail } from "interfaces";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

interface IActionsParams {
  email: IEmail;
  onUpdateEmail: (changes: Partial<IEmail>) => void;
}

interface IActions {
  id: string;
  icon: FC<SvgIconProps>;
  onClick: () => void;
}

export const getActions = ({
  email,
  onUpdateEmail,
}: IActionsParams): IActions[] => {
  const { isRead, isStarred, isDeleted } = email;
  return [
    {
      id: "read",
      icon: isRead ? MarkEmailUnreadIcon : MarkEmailReadIcon,
      onClick: () => onUpdateEmail({ isRead: !isRead }),
    },
    {
      id: "starred",
      icon: isStarred ? StarIcon : StarOutlineIcon,
      onClick: () => onUpdateEmail({ isStarred: !isStarred }),
    },
    {
      id: "delete",
      icon: isDeleted ? RestoreFromTrashIcon : DeleteIcon,
      onClick: () => onUpdateEmail({ isDeleted: !isDeleted }),
    },
  ];
};
