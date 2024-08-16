"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "./logo/index"
import Navigation from "./navigation";
import MenuToggle from "./menu-toggle";
import Menu from "./menu";

import { useState } from "react";

export default function Header() {
  const [isActive, toggleActive] = useState(false);
  return (
  <main>
    <header className = "fixed top-0 left-0 right-0 z-50 bg-opacity-0 text-gray-900 flex justify-between items-center font-customInter">
      <Logo />
      <MenuToggle isMenuOpen={isActive} toggleMenu={toggleActive}/>
      <Navigation />
    </header>
    <Menu isMenuOpen={isActive}/>
  </main>
  );
}