// Returning submitted data to the page

import Contact from "./Contact";
import { contacts } from "../../state/contacts";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { fetchContacts } from "../../services/phonebook";

export const ContactListContainer = () => {
  const [currentContacts, setContacts] = useAtom(contacts);

  useEffect(() => {
    fetchContacts().then((contacts) => {
      setContacts(contacts);
    });
  }, []);

  return (
    <div className="userClass">
      {currentContacts.map((c) => {
        return <Contact key={c.id} {...c} />;
      })}
      <br />
    </div>
  );
};
