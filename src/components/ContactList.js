import React, { useEffect, useState } from "react";
import API from "../api";
import "./ContactList.css"
export default function ContactList({ setEditingContact }) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await API.get("/contacts");
    setContacts(res.data.data.items);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this contact?")) {
      await API.delete(`/contacts/${id}`);
      fetchContacts();
    }
  };

  return (
    <div className="contacts-container">
      <div className="contacts-card">
        <h2 className="contacts-title">Contacts</h2>

        <table className="contacts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length > 0 ? (
              contacts.map((c) => (
                <tr key={c._id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.notes || "—"}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => setEditingContact(c)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(c._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
