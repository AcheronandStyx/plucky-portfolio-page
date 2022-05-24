import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS-> materialUi or chakraUI component libraries
//materialUI looks very nice
// Tailwinds CSS

// JobSearch Apply to everything, its a numbers game,
// DemoDay and career services
// keep learning and building
// check out codeWars for practice
// employers sometimes send problems through hackerRank

// High level technical questions - checking for soft skills

// call swapPage in the main section of the app to swap pages as they are selected
function App() {
  // declare the variables to track the active page and set the default active page to the About Me section.
  const [activePage, setActivePage] = useState("About");

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
  }

  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage}></Header>
      <div class="content">{swapPage()}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
