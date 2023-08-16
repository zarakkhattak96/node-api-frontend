// connecting frontend to backend part

import type { ContactInfo } from "../components/phonebook/Contact";
import type { NewContact } from "../components/phonebook/NewContactForm";

const BASE_URL = "http://localhost:3000/api/v1";

export const addNewContact = async (c: NewContact) => {
	const r = await fetch(`${BASE_URL}/users/register`, {
		headers: { "Content-Type": "application/json" },
		method: "POST",
		body: JSON.stringify(c),
	});

	return r.json();
};

export const fetchContacts = async (): Promise<ContactInfo[]> => {
	const r = await fetch(`${BASE_URL}/users`, {
		headers: { accept: "application/json" },
		method: "GET",
	});

	return r.json();
};
