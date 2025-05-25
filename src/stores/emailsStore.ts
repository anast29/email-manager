import { BehaviorSubject, map, Observable, switchMap, timer } from "rxjs";
import { IEmail } from "interfaces";
import { filterByFolder } from "helpers";
import { fetchEmails$ } from "services";

const emailsSubject = new BehaviorSubject<IEmail[]>([]);

export const emails$ = emailsSubject.asObservable();

export const filteredEmails$ = (folder: string): Observable<IEmail[]> =>
  emailsSubject
    .asObservable()
    .pipe(
      map((emails) =>
        filterByFolder(folder, emails).sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      )
    );

export const fetchIncomingEmails$ = timer(0, 61000).pipe(
  switchMap(() => fetchEmails$())
);

export const getCurrentEmails = (): IEmail[] => emailsSubject.getValue();

export const setEmails = (emails: IEmail[]): void => emailsSubject.next(emails);

export const updateEmail = (updatedEmail: IEmail) => {
  const current = getCurrentEmails();
  const updated = current.map((email) =>
    email.id === updatedEmail.id ? updatedEmail : email
  );

  setEmails(updated);
};
