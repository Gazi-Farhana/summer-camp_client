import { useEffect, useState } from "react";

const DarkModeToggler = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">Light Mode</div>
      <div className="swap-off">Dark Mode</div>
    </label>
  );
};

export default DarkModeToggler;
