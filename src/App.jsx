import { useEffect } from "react";
import "./App.css";
import Curtain from "./components/templates/curtain.jsx";
import Hero from "./components/templates/hero.jsx";
import Aboutme from "./components/templates/aboutme.jsx";
import Header from "./components/templates/header.jsx";
import Skills from "./components/templates/skills.jsx";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const menus = document.querySelectorAll(".headerWhole li ul");
    const skillsCards = document.querySelectorAll(".skillsCard");

    if (!cursor) return;

    // Move cursor based on mouse movement
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    // Hide cursor when hovering over menus or skillsCard
    const hideCursor = () => cursor.style.opacity = "0"; // Use opacity instead of display:none to prevent layout shifts
    const showCursor = () => cursor.style.opacity = "1";

    menus.forEach((menu) => {
      menu.addEventListener("mouseenter", hideCursor);
      menu.addEventListener("mouseleave", showCursor);
    });

    skillsCards.forEach((card) => {
      card.addEventListener("mouseenter", hideCursor);
      card.addEventListener("mouseleave", showCursor);
    });

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      menus.forEach((menu) => {
        menu.removeEventListener("mouseenter", hideCursor);
        menu.removeEventListener("mouseleave", showCursor);
      });
      skillsCards.forEach((card) => {
        card.removeEventListener("mouseenter", hideCursor);
        card.removeEventListener("mouseleave", showCursor);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>

      <div className="whole">
        <Header />
        <div className="wrapTop">
          <Curtain />
          <Hero />
        </div>
        <Aboutme />
        <Skills />
      </div>
    </>
  );
}

export default App;
