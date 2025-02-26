import React from "react";
const navItems = [
  { label: "About Me", href: "/#about-me" },
  { label: "Skills", href: "/#skills" },
  { label: "Project", href: "/#project" },
  { label: "Contact", href: "/#contact" },
];
const DesktopNavBar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="text-black hover:text-red-900 transition-colors text-xl font-sora font-semibold"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavBar;
