import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [dark, setDark] = useState(systemPreference || false);

  useEffect(() => {
    dark && document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="hidden sm:flex h-4 w-10 bg-zinc-600 dark:bg-primary-200 justify-start dark:justify-end items-center rounded-lg"
      onClick={toggleTheme}
    >
      <SunIcon className="theme-switcher invisible dark:visible" />
      <MoonIcon className="theme-switcher dark:invisible" />
    </div>
  );
};

export default ThemeToggle;
