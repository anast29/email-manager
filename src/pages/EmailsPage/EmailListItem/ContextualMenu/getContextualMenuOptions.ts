import { IEmail } from "interfaces/IEmail";

interface IGetContextualMenuOptionsParams {
  email: IEmail;
  onUpdateEmail: (changes: Partial<IEmail>) => void;
}

interface IGetContextualMenuOptions {
  id: string;
  title: string;
  onClick: () => void;
}

export const getContextualMenuOptions = ({
  email,
  onUpdateEmail,
}: IGetContextualMenuOptionsParams): IGetContextualMenuOptions[] => {
  const { isRead, isStarred, isDeleted, folder } = email;
  return [
    {
      id: "read",
      title: isRead ? "Mark as unread" : "Mark as read",
      onClick: () => onUpdateEmail({ isRead: !isRead }),
    },
    {
      id: "starred",
      title: isStarred ? "Mark as unstarred" : "Mark as starred",
      onClick: () => onUpdateEmail({ isStarred: !isStarred }),
    },
    {
      id: "delete",
      title: isDeleted ? "Move to inbox" : "Delete",
      onClick: () => onUpdateEmail({ isDeleted: !isDeleted }),
    },
  ];
};
