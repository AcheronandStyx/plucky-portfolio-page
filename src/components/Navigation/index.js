import React from "react";

// use the onClick react event handler to set the activePage to whatever the user has selected from the navbar
function Nav(props) {
  const { activePage, setActivePage } = props;
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about" onClick={() => setActivePage("About")}>
            About Me
          </a>
        </li>
        <li className="mx-2">
          <a href="#portfolio" onClick={() => setActivePage("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li className="mx-2">
          <a href="#contact" onClick={() => setActivePage("Contact")}>
            Contact
          </a>
        </li>
        <li className="mx-2">
          <a href="#resume" onClick={() => setActivePage("Resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
