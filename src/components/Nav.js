import React from 'react';
import logo from "../images/Logo.svg"


const Nav = () => {
  return (
    <nav>
      <a href="/"> <img src={logo} alt="logo" /></a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order online</li>
        <li>Login</li>
      </ul>

    </nav>
  )
}

export default Nav