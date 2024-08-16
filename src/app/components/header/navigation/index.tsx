import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Navigation(){
    const list_item_css = [
        'pt-6', 'pb-4', 'px-4', 'border-b-4', 'bg-neutral-200', 'bg-opacity-0',
        'border-black', 'border-opacity-0', "hover:text-teal-900", 'hover:border-opacity-100', 
        'hover:bg-opacity-40','hover:shadow-md', 'hover:text-neutral-600', 'hover:font-medium',
      'transition', 'ease-in-out', 'duration-300']
    
      const external_link_css = [
        'hover:text-neutral-200', 'drop-shadow-2xl', 'hover:text',
        'transition', 'ease-in-out', 'duration-300'
      ]

    return(
        <nav className = "hidden lg:flex md:items-center lg:gap-x-4">
            <ul className = "md:flex md:items-center text-sm font-">
            <li><Link href={"/pages/landing"} className = {list_item_css.join(' ')}>HOME</Link></li>
            <li><Link href={"/pages/about"} className = {list_item_css.join(' ')}>ABOUT</Link></li>
            <li><Link href={"/pages/experience"} className = {list_item_css.join(' ')}>EXPERIENCE</Link></li>
            <li><Link href={"/pages/portfolio"} className = {list_item_css.join(' ')}>PORTOFOLIO</Link></li>
            <li><Link href={"/pages/contact"} className = {list_item_css.join(' ')}>CONTACT</Link></li>
            </ul>
            <ul className="flex items-center gap-x-4 md:mx-8 lg:mx-16 text-3xl">
              <li className={external_link_css.join(' ')}><a href="https://www.linkedin.com/in/adonis-serrano/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li className={external_link_css.join(' ')}><a href="https://github.com/AdonisS2004" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
      </nav>
    );
}