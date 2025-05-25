import { NOT_FOUND_ROUTE } from "constants/Router";
import { INBOX_FOLDER, STARRED_FOLDER, TRASH_FOLDER, SENT_FOLDER } from "constants/Folders";
import { redirect } from "react-router";

export const ALLOWED_FOLDERS = [
  INBOX_FOLDER,
  STARRED_FOLDER,
  TRASH_FOLDER,
  SENT_FOLDER,
];

export async function validateFolderLoader({ params }) {
  const folder = params.folder;
  if (!ALLOWED_FOLDERS.includes(folder)) {
    return redirect(NOT_FOUND_ROUTE);
  }

  return { folder };
}
