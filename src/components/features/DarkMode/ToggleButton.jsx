import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";

// ToggleButton component allows the user to switch between dark mode and light mode. The component maintains the dark mode state and toggles between dark and light modes. It also stores the hours when dark mode is toggled to calculate an average time and set the mode accordingly on reload.

function ToggleButton() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(function (prevMode) {
      const nextMode = !prevMode;
      // Sets the body class based on the dark mode state
      document.body.className = nextMode ? "dark-mode" : "";
      // Tracks the time when the dark mode is toggled
      averageTimeToggled();
      return nextMode;
    });
  };

  // Stores the current hour in localStorage every time dark mode is toggled and calculates the average time when dark mode is toggled
  function averageTimeToggled() {
    const now = new Date();

    // Retrieve stored dark mode toggle times from localStorage
    const darkModeTimes = JSON.parse(
      localStorage.getItem("darkModeTimes") || "[]"
    );
    // Stores the current hour when the dark mode is toggled
    darkModeTimes.push(now.getHours());
    localStorage.setItem("darkModeTimes", JSON.stringify(darkModeTimes));
  }
  useEffect(() => {
    // Get dark mode toggled time from localStorage
    const darkModeTimes = JSON.parse(
      localStorage.getItem("darkModeTimes") || "[]"
    );
    // console.log(darkModeTimes);
    let averageTime = 0;
    // Calculates the average toggle time if there are any stored times
    if (darkModeTimes.length > 0) {
      averageTime = darkModeTimes.reduce((previous, current) => {
        return previous + current;
      }, 0);
      averageTime = averageTime / darkModeTimes.length;
    }
    const now = new Date();
    // If the current time is greater than the average toggle time, set dark mode
    if (now.getHours() > averageTime) {
      setDarkMode(true);
      document.body.className = "dark-mode";
    }
  });
  return (
    // Button that toggles dark mode when clicked
    <button onClick={toggleDarkMode} className="toggleButton">
      <IoMoon />
    </button>
  );
}

export default ToggleButton;
