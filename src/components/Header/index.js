import React from "react";
import Nav from "../Navigation";

function Header(props) {
  // pull out the useState variables and drill them down farther into the nav component
  const { activePage, setActivePage } = props;
  return (
    <header className="flex-row px-1">
      <h1>
        Matthew Danielson
      </h1>
      <Nav activePage={activePage} setActivePage={setActivePage}></Nav>
    </header>
  );
}
// Setup Nav as child of the Header component
export default Header;
