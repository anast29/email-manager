import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  filteredEmails$,
  fetchIncomingEmails$,
  setEmails,
  updateEmail,
  getCurrentEmails,
} from "stores";
import { IEmail } from "interfaces";
import { updateEmail$ } from "services";

export function useEmailStore() {
  const { folder } = useLoaderData();
  const currentEmails = getCurrentEmails();
  const [emails, setCurrentEmails] = useState<IEmail[]>(currentEmails);

  useEffect(() => {
    const subscription = filteredEmails$(folder).subscribe(setCurrentEmails);
    return () => subscription.unsubscribe();
  }, [folder]);

  const handleUpdateEmail = (id: string, changes: Partial<IEmail>) => {
    updateEmail$(id, changes).subscribe(updateEmail);
  };

  return {
    emails,
    fetchIncomingEmails$,
    setEmails,
    updateEmail: handleUpdateEmail,
  };
}
