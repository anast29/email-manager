import dayjs from "dayjs";
import { IEmail } from "interfaces";
import {
  INBOX_FOLDER,
  STARRED_FOLDER,
  SENT_FOLDER,
  TRASH_FOLDER,
} from "constants/Folders";
import { filterByFolder } from "../filterByFolder";

const mockEmails: IEmail[] = [
  {
    id: "1",
    subject: "Test inbox",
    content: "Test inbox content",
    folder: INBOX_FOLDER,
    isDeleted: false,
    isRead: true,
    isStarred: false,
    date: dayjs().toISOString(),
    from: { name: "test", email: "test@test.com" },
  },
  {
    id: "2",
    subject: "Test starred",
    content: "Test starred comtent",
    folder: INBOX_FOLDER,
    isDeleted: false,
    isRead: false,
    isStarred: true,
    date: dayjs().toISOString(),
    from: { name: "test", email: "test@test.com" },
  },
  {
    id: "3",
    subject: "Test sent",
    content: "Test sent comtent",
    folder: SENT_FOLDER,
    isDeleted: false,
    isRead: true,
    isStarred: false,
    date: dayjs().toISOString(),
    from: { name: "test", email: "test@test.com" },
  },
  {
    id: "4",
    subject: "Test trash",
    content: "Test trash content",
    folder: INBOX_FOLDER,
    isDeleted: true,
    isRead: false,
    isStarred: false,
    date: dayjs().toISOString(),
    from: { name: "test", email: "test@test.com" },
  },
];

describe("filterByFolder", () => {
  it('should return related emails for "inbox" folder', () => {
    const result = filterByFolder(INBOX_FOLDER, mockEmails);
    expect(result).toHaveLength(2);
    expect(
      result.every((email) => email.folder === INBOX_FOLDER && !email.isDeleted)
    ).toBe(true);
  });

  it('should return related emails for "starred" folder', () => {
    const result = filterByFolder(STARRED_FOLDER, mockEmails);
    expect(result).toHaveLength(1);
    expect(result[0].isStarred).toBe(true);
    expect(result[0].isDeleted).toBe(false);
  });

  it('should return related emails for "sent" folder', () => {
    const result = filterByFolder(SENT_FOLDER, mockEmails);
    expect(result).toHaveLength(1);
    expect(result[0].folder).toBe(SENT_FOLDER);
    expect(result[0].isDeleted).toBe(false);
  });

  it('should return related emails for "trash" folder', () => {
    const result = filterByFolder(TRASH_FOLDER, mockEmails);
    expect(result).toHaveLength(1);
    expect(result[0].isDeleted).toBe(true);
  });
});
