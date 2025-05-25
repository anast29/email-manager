import { IEmail } from "interfaces";
import { INBOX_FOLDER, STARRED_FOLDER, TRASH_FOLDER, SENT_FOLDER } from "constants/Folders";

export const filterByFolder = (currentFolder: string, emails: IEmail[]) => {
  switch (currentFolder) {
    case INBOX_FOLDER:
      return emails.filter(
        ({ folder, isDeleted }) => !isDeleted && folder === INBOX_FOLDER
      );
    case STARRED_FOLDER:
      return emails.filter(
        ({ isStarred, isDeleted }) => !isDeleted && isStarred
      );
    case SENT_FOLDER:
      return emails.filter(({ isDeleted, folder }) => !isDeleted && folder === SENT_FOLDER);
    case TRASH_FOLDER:
      return emails.filter(({ isDeleted }) => isDeleted);
    default:
      return [];
  }
};
