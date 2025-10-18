import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [editingContact, setEditingContact] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (!token) {
    return showLogin ? (
      <Login setToken={setToken} setShowLogin={setShowLogin} />
    ) : (
      <Register setToken={setToken} setShowLogin={setShowLogin} />
    );
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div style={{ padding: "20px" }}>
        <h1>Contact Management</h1>
        <ContactForm
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />
        <ContactList setEditingContact={setEditingContact} />
      </div>
    </div>
  );
}

export default App;
