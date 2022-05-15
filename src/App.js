import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

// call swapPage in the main section of the app to swap pages as they are selected
function App() {
  // declare the variables to track the active page and set the default active page to the About Me section.
  const [activePage, swapActivePage] = useState("About");

  // function to swap the page based on the users selection from the nav bar.
  function swapPage() {
    if (activePage === "About") {
      return <About></About>;
    } else if (activePage === "Portfolio") {
      return <Portfolio></Portfolio>;
    } else if (activePage === "Resume") {
      return <Resume></Resume>;
    } else if (activePage === "Contact") {
      return <Contact></Contact>;
    }
    console.log(activePage);
  }

  return (
    <div>
      <Header activePage={activePage}></Header>
      <main>{swapPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
