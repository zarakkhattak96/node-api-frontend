import { useSetAtom } from "jotai";
import { contacts } from "../../state/contacts";

import { type NewContact, NewContactForm } from "./NewContactForm";
import { addNewContact } from "../../services/phonebook";

export const NewContactContainer = () => {
  const setContacts = useSetAtom(contacts);

  const onSubmit = async (info: NewContact) => {
    return addNewContact(info).then((c) => {
      setContacts((oldContacts) => [...oldContacts, c]);
    });
  };

  return <NewContactForm onSubmit={onSubmit} />;
};
