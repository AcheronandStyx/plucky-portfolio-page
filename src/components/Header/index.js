import React from "react";
import Nav from "../Navigation";

function Header(props) {
  // pull out the useState variables and drill them down farther into the nav component
  const { activePage, setActivePage } = props;
  return (
    <header className="flex-row px-1">
      <h2>
        <p>Matthew Danielson</p>
      </h2>
      <Nav activePage={activePage} setActivePage={setActivePage}></Nav>
    </header>
  );
}
// Setup Nav as child of the Header component
export default Header;
