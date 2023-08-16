import { atom } from "jotai";
import type { ContactInfo } from "../components/phonebook/Contact";

export const contacts = atom<ContactInfo[]>([]);
