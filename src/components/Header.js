import "../css/Menu.css";
import { useNavigate } from "react-router-dom";
import { logOut, getAuth } from "../lib/firebase-config";
import React, { useEffect, useState } from "react";

export default function Header(props) {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const { updateComandaOrders, updateComandaOrders2 } = props;
  const auth = getAuth();
  const userData = auth.currentUser;

  useEffect(() => {
    
      const userEmail = userData.email;
      const initial = userEmail[0];
      if (initial === "a") {
        setRole("admin");
      } else if (initial === "w") {
        setRole("waiter");
      } else if (initial === "c") {
        setRole("chef");
      }
    
  }, [userData]);

  const returnLogin = () => {
    logOut();
    navigate("/");
  };

  if (role === "admin") {
    return (
      <header className="header-container">
        <img
          className="logo"
          alt="logoBQ"
          src={require("../assets/burger4.png")}
        />
        <p className="menu">MENU</p>
        <button id="btnMenu" onClick={updateComandaOrders}>Employees</button>
        <button id="btnOrder" onClick={updateComandaOrders2}>Product</button>
        <button className="btnOut" onClick={returnLogin} />
      </header>
    );
  } else if (role === "waiter") {
    return (
      <header className="header-container">
        <img
          className="logo"
          alt="logoBQ"
          src={require("../assets/burger4.png")}
        />
        <p className="menu">MENU</p>
        <button id="btnMenu">Menu</button>
        <button id="btnOrder" onClick={updateComandaOrders}>
          Order
        </button>
        <button className="btnOut" onClick={returnLogin} />
      </header>
    );
  } else if (role === "chef") {
    return (
      <header className="header-container">
        <img
          className="logo"
          alt="logoBQ"
          src={require("../assets/burger4.png")}
        />
        <p className="menu">KITCHEN</p>
        <button className="btnOut" onClick={returnLogin} />
      </header>
    );
  }
}
