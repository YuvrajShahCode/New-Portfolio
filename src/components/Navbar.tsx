"use client";

import { useEffect, useState } from "react";

const navItems = ["home", "about", "skills", "projects", "contact"];

export default function Navbar({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) {
  const [activeElement, setActiveElement] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const id of navItems) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 260) {
          current = id;
        }
      }
      setActiveElement(current);
    };

    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const scrollTo = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass-panel mx-auto flex h-16 w-full max-w-5xl items-center justify-between rounded-lg px-3 sm:px-4">
        <a
          href="#home"
          onClick={(event) => scrollTo(event, "home")}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line-color)] text-[var(--text-color)] transition-colors hover:bg-[var(--surface-soft)]"
          aria-label="Go to home"
        >
          <i className="fa-solid fa-house text-sm" aria-hidden="true" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(event) => scrollTo(event, item)}
              className={`rounded-md px-3 py-2 text-sm font-semibold capitalize transition-colors ${
                activeElement === item
                  ? "bg-[var(--surface-soft)] text-[var(--text-color)]"
                  : "text-[var(--muted-color)] hover:text-[var(--text-color)]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line-color)] text-sm font-bold transition-colors hover:bg-[var(--surface-soft)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☾" : "☼"}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line-color)] text-lg font-bold md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </div>

        {menuOpen && (
          <div className="glass-panel absolute left-4 right-4 top-[4.75rem] grid gap-1 rounded-lg p-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(event) => scrollTo(event, item)}
                className={`rounded-md px-3 py-3 text-center text-sm font-semibold capitalize ${
                  activeElement === item
                    ? "bg-[var(--surface-soft)]"
                    : "text-[var(--muted-color)]"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
