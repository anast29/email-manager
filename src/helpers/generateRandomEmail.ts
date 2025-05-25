import { fakerEN } from "@faker-js/faker";
import { IEmail } from "interfaces";

export const generateRandomEmail = (): IEmail => {
  const { string, lorem, person, internet } = fakerEN;
  return {
    id: string.uuid(),
    subject: lorem.sentence(),
    content: lorem.paragraph(),
    folder: "inbox",
    from: {
      name: person.fullName(),
      email: internet.email(),
    },
    date: new Date().toISOString(),
    isRead: false,
    isDeleted: false,
    isStarred: false,
  };
};
