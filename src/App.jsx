import React, { useState, useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    const htmltag = document.querySelector("html");
    htmltag.classList.remove("dark", "light");

    htmltag.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider
        value={{ themeMode, darkMode, lightMode, myName: "Nilesh" }}
      >
        <div className="h-dvh w-dvw flex flex-col items-center justify-center gap-8 dark:bg-neutral-900 text-white">
          <ThemeBtn />
          <Card />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
