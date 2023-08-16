// Homepage which contains all the components

import Header from "../components/phonebook/Header";
import { NewContactContainer } from "../components/phonebook/NewContactContainer";
import { ContactListContainer } from "../components/phonebook/ContactListContainer";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <NewContactContainer />
      <ContactListContainer />
    </div>
  );
};
