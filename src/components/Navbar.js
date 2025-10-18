import React from "react";

export default function Navbar({ onLogout }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Contact Management</h2>
      <div>
        <button style={styles.btn} onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#333",
    color: "#fff",
    padding: "10px 20px"
  },
  logo: {
    margin: 0
  },
  btn: {
    background: "#ff4d4d",
    border: "none",
    padding: "8px 12px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
