import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <header className = "fixed top-0 left-0 right-0 z-10 bg-white text-black flex justify-between items-center p-4">
      <span id="logo"></span>
      <span id="menu-icon" className = "md:hidden">
        <FontAwesomeIcon 
        icon={faBars} 
        className="text-2xl"
        />
      </span>
      <nav className = "hidden md:flex md:items-center md:gap-x-4">
        <ul className = "md:flex md:items-center md:gap-x-4">
          <li className = "hover:text-blue-500"><a href="#">Home</a></li>
          <li className = "hover:text-blue-500"><a href="#">About</a></li>
          <li className = "hover:text-blue-500"><a href="#">Resume</a></li>
          <li className = "hover:text-blue-500"><a href="#">Portfolio</a></li>
          <li className = "hover:text-blue-500"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}