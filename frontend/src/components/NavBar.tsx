import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import Button from "./Button";

export default function NavBar() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  const navItens = [
    { label: "Funcionalidades", hrfe: "" },
    { label: "Depoimentos", hrfe: "" },
    { label: "Planos", hrfe: "" },
    { label: "FAQ", hrfe: "" },
    { label: "Contato", hrfe: "" },
    { label: "Admin", hrfe: "" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6">
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-color1">Tracker</span>
          <span className="dark:text-color2 text-black">Safe</span>
        </h1>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <button
          onClick={toggleTheme}
          className="cursor-pointer hover:bg-color7/70 rounded-full p-2 dark:text-color2 light:text-color4 hover:text-color1"
          aria-label="Toggle theme"
        >
          {darkTheme ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          onClick={toggleMenu}
          className="text-color4 dark:text-color5"
          aria-label="Toggle menu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full px-6 py-4 flex-col gap-4 border border-color5 dark:border-color3 dark:bg-color4/ md:static md:flex md:flex-row md:items-center md:gap-x-6 md:w-auto md:bg-transparent md:border-none md:p-0`}
      >
        <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-6 items-center">
          {navItens.map((item) => (
            <li
              key={item.hrfe}
              className="dark:text-color5 text-black hover:text-color1 font-bold"
            >
              <Link to={item.hrfe} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4 md:mt-0 flex items-center gap-4">
            <button
                onClick={toggleTheme}
                className="hidden md:inline cursor-pointer hover:bg-color7/70 rounded-full p-2 dark:text-color2 light:text-color4 hover:text-color1"
                aria-label="Toggle theme"
            >
                {darkTheme ? <SunIcon /> : <MoonIcon />}
            </button>
            <Button className="text-color2 bg-color1 hover:bg-color7 w-full md:w-auto">
                Comece Agora
            </Button>          
        </div>
      </div>
    </nav>
  );
}
