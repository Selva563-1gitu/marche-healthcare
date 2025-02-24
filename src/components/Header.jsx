import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/header.css";
import logo from "../assets/logo.png";
import circleLogo from "../assets/Marche logo-circle.png";

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", path: "/", subItems: [] },
    {
      title: "About",
      path: "/about",
      subItems: [
        { name: "Story", path: "/about#story" },
        { name: "Purpose", path: "/about#purpose" },
        { name: "Mission", path: "/about#mission" },
        { name: "Vision", path: "/about#vision" },
        { name: "Imaya", path: "/about#imaya" },
      ],
    },
    {
      title: "Media Center",
      path: "/news",
      subItems: [
        { name: "Social Media", path: "/news#social" },
        { name: "News & Events", path: "/news#news" },
      ],
    },
    {
      title: "Products",
      path: "/products",
      subItems: [{ name: "Marche Robo", path: "/products#marche-robo" }],
    },
    { title: "Videos", path: "/videos", subItems: [] },
    { title: "Contact", path: "/contact", subItems: [] },
  ];

  return (
    <nav
      className={`navbar ${
        isHovered ? "navbar-expanded" : isScrolled ? "navbar-small" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveMenu(null);
      }}
    >
      {/* Logo added here */}
      <div
        className={`logo-container1 ${
          isScrolled && !isHovered ? "hide-logo" : ""
        }`}
      >
        <Link to="/">
          <img
            src={isHovered ? circleLogo : logo}
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>

      <ul className="nav-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="nav-item"
            onMouseEnter={() => setActiveMenu(index)}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link onpage" : "nav-link"
              }
              onClick={scrollToTop}
            >
              {item.title}
            </NavLink>

            {item.subItems.length > 0 && (
              <div
                className={`submenu ${activeMenu === index ? "show" : "hide"}`}
              >
                {item.subItems.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className="submenu-item"
                    style={{ transitionDelay: `${subIndex * 0.1}s` }} // Dynamic delay
                  >
                    <Link to={sub.path} className="submenu-link">
                      {sub.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
