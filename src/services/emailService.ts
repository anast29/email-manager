import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { catchError, concatMap, delay, map } from "rxjs/operators";
import { IEmail } from "interfaces";

export const fetchEmails$ = () =>
  fromFetch("/api/emails").pipe(
    delay(1000),
    concatMap((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    }),
    map(({ data }) => data),
    catchError((error) => {
      console.error(error);
      return of([]);
    })
  );

export const updateEmail$ = (id: string, changes: Partial<IEmail>) =>
  fromFetch(`/api/emails/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changes),
  }).pipe(
    concatMap((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    }),
    map(({ data }) => data),
    catchError((error) => {
      console.error(error);
      return of([]);
    })
  );
