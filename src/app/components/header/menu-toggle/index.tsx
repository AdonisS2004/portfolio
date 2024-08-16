"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MenuToggle({isMenuOpen, toggleMenu} : {isMenuOpen:any, toggleMenu:any}){
    return (
        <button id="menu-icon" className = "lg:hidden pt-6 pb-4 px-4" onClick={() => toggleMenu((prev:any) => !prev)}>
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </button>
    );
}