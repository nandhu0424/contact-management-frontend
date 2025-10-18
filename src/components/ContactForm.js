import React, { useState, useEffect } from "react";
import API from "../api";
import "./ContactList.css";

export default function ContactForm({ editingContact, setEditingContact }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });

  useEffect(() => {
    if (editingContact) setForm(editingContact);
  }, [editingContact]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingContact) {
      await API.put(`/contacts/${editingContact._id}`, form);
      alert("Contact updated!");
    } else {
      await API.post("/contacts", form);
      alert("Contact added!");
    }
    setForm({ name: "", email: "", phone: "", notes: "" });
    setEditingContact(null);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form-container">
      <h2>{editingContact ? "Edit Contact" : "Add Contact"}</h2>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      /><br />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      /><br />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      /><br />
      <input
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
      /><br />
      <button className= "cs-btn" type="submit">{editingContact ? "Update" : "Add"}</button>
    </form>
  );
}
