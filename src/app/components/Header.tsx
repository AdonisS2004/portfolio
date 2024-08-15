import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Header() {
  const list_item_css = [
    'pt-6', 'pb-4', 'px-4', 'border-b-4', 'bg-neutral-200', 'bg-opacity-0',
    'border-black', 'border-opacity-0', "hover:text-teal-900", 'hover:border-opacity-100', 
    'hover:bg-opacity-40','hover:shadow-md', 'hover:text-neutral-600', 'hover:font-semibold',
  'transition', 'ease-in-out', 'duration-300']

  return (
    <header className = "fixed top-0 left-0 right-0 z-50 bg-opacity-0 text-gray-900 flex justify-between items-center font-customInter">
      <span id="logo" className="lg:mx-16 pt-6 px-8 pb-4">
        <FontAwesomeIcon 
        icon={faSeedling} 
        className="text-2xl drop-shadow-2xl hover:text-teal-900 transition ease-in-out duration-300" 
        />
      </span>

      <span id="menu-icon" className = "md:hidden">
        <FontAwesomeIcon 
        icon={faBars} 
        className="text-2xl"
        />
      </span>
      <nav className = "hidden md:flex md:items-center md:gap-x-4">
        <ul className = "md:flex md:items-center text-sm">
          <li><Link href={"/pages/landing"} className = {list_item_css.join(' ')}>HOME</Link></li>
          <li><Link href={"/pages/about"} className = {list_item_css.join(' ')}>ABOUT</Link></li>
          <li><Link href={"/pages/experience"} className = {list_item_css.join(' ')}>EXPERIENCE</Link></li>
          <li><Link href={"/pages/portfolio"} className = {list_item_css.join(' ')}>PORTOFOLIO</Link></li>
          <li><Link href={"/pages/contact"} className = {list_item_css.join(' ')}>CONTACT</Link></li>
        </ul>
        <ul className="flex items-center gap-x-4 md:mx-8 lg:mx-16 text-2xl">
          <li className="hover:text-blue-500 drop-shadow-2xl"><a href="https://www.linkedin.com/in/adonis-serrano/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li className="hover:text-blue-500 drop-shadow-2xl"><a href="https://github.com/AdonisS2004" target="_"><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
      </nav>
    </header>
  );
}