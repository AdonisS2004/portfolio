"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MenuToggle({isMenuOpen, toggleMenu} : {isMenuOpen:any, toggleMenu:any}){
    return (
        <button id="menu-icon" className = "lg:hidden m-6" onClick={() => toggleMenu((prev:any) => !prev)}>
            {!isMenuOpen ? <FontAwesomeIcon icon={faBars} className="text-3xl transition ease-in-out duration-300 hover:text-teal-900" />:<FontAwesomeIcon icon={faX} className="text-3xl text-neutral-400 hover:text-neutral-600 transition ease-in-out duration-300" />}
        </button>
    );
}