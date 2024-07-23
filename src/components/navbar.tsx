"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { IconButton, Drawer, List, ListItem } from "@mui/material";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#edu" },
    { name: "Contact", href: "#contacts" },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function handleLinkClick(event: React.MouseEvent, href: string) {
    event.preventDefault();
    const offset = 90;
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav
      className={`flex items-center p-4 justify-between px-10 text-black bg-transparent dark:text-white lg:px-36 sticky top-0 z-50 bg-opacity-85 backdrop-blur-2xl`}
    >
      <Image
        src="/heroImage.png"
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full"
      />
      {/* For larger devices */}
      <div className="hidden sm:flex justify-center items-center">
        <div className="border-2 p-2 space-x-7 text-center items-center justify-center flex rounded-full px-5">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="cursor-pointer hover:text-blue-600"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {theme === "dark" ? (
        <FaSun
          onClick={toggleTheme}
          className=" hidden sm:block cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={toggleTheme}
          className=" hidden sm:block cursor-pointer"
        />
      )}
      {/* For smaller devices */}
      <div className="block sm:hidden">
        <div className="flex items-center space-x-4">
          {theme === "dark" ? (
            <FaSun onClick={toggleTheme} />
          ) : (
            <FaMoon onClick={toggleTheme} />
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <AiOutlineMenu />
          </IconButton>
        </div>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            style: {
              width: "75%",
              padding: "20px",
              backgroundColor: "transparent",
              backdropFilter: "blur(50px)",
              boxShadow: "none",
            },
          }}
        >
          <div
            onClick={toggleDrawer(false)}
            className="flex text-2xl justify-end font-bold cursor-pointer"
          >
            <CgClose className="text-black dark:text-white" />
          </div>
          <List>
            {links.map((link, index) => (
              <ListItem key={index} button onClick={toggleDrawer(false)}>
                <Link
                  href={link.href}
                  className="w-full block text-lg mb-2 text-black dark:text-white"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </nav>
  );
}
