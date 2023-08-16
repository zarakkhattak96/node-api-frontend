// user registeration form

import { FormEvent, useState } from "react";
import type { ContactInfo } from "./Contact";

export type NewContact = Omit<ContactInfo, "id">;

type NewContactFormProps = {
  onSubmit: (info: NewContact) => Promise<void>;
};

export const NewContactForm = ({ onSubmit }: NewContactFormProps) => {
  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // to stop the form from loading again by clicking Add User
    e.preventDefault();

    // Using spread so as to get values instead of an array

    onSubmit({
      name,
      email,
      phone,
      address,
      password,
    }).then(() => {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setPassword("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name here..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <br />
      <br />

      <label htmlFor="email">Email </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email here..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password here..."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br />
      <br />

      <label htmlFor="phone"> Phone </label>
      <input
        type="text"
        name="phone"
        placeholder="Enter your phone here..."
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <br />

      <label htmlFor="address">Address </label>
      <input
        type="text"
        name="address"
        placeholder="Enter your address here..."
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <br />
      <br />

      <button type="submit">Add User</button>
    </form>
  );
};
