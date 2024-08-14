import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className = "fixed top-0 left-0 right-0 z-10 bg-opacity-0 text-gray-900 flex justify-between items-center p-6">
      <span id="logo" className="lg:mx-16">
        <FontAwesomeIcon 
        icon={faSeedling} 
        className="text-2xl hover:text-blue-500 drop-shadow-2xl" 
        />
      </span>

      <span id="menu-icon" className = "md:hidden">
        <FontAwesomeIcon 
        icon={faBars} 
        className="text-2xl"
        />
      </span>
      <nav className = "hidden md:flex md:items-center md:gap-x-4">
        <ul className = "md:flex md:items-center md:gap-x-4 md:space-x-2">
          <li className = "hover:text-blue-500 drop-shadow-2xl"><a href="#">Home</a></li>
          <li className = "hover:text-blue-500 drop-shadow-2xl"><a href="#">About</a></li>
          <li className = "hover:text-blue-500 drop-shadow-2xl"><a href="#">Resume</a></li>
          <li className = "hover:text-blue-500 drop-shadow-2xl"><a href="#">Portfolio</a></li>
          <li className = "hover:text-blue-500 drop-shadow-2xl"><a href="#">Contact</a></li>
        </ul>
        <ul className="flex items-center gap-x-4 md:mx-8 lg:mx-16 text-2xl">
          <li className="hover:text-blue-500 drop-shadow-2xl"><a href="https://www.linkedin.com/in/adonis-serrano/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li className="hover:text-blue-500 drop-shadow-2xl"><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
      </nav>
    </header>
  );
}