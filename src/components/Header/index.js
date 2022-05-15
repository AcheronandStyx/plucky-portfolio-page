import React from "react";
import Nav from "../Navigation";

function Header() {
  return (
    <header className="flex-row px-1">
      <h2>
        <p>Matthew Danielson</p>
      </h2>
      <Nav></Nav>
    </header>
  );
}
// Setup Nav as child of the Header component
export default Header;
