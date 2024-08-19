import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Menu({isMenuOpen} : {isMenuOpen:any}) {
    const nav_button_css = [
        'w-4/5 pt-8 pb-8 border-b-4 border-opacity-5 border-teal-900 mx-6', 
        'transition ease-in-out duration-200',
        'hover:bg-neutral-50 hover:border-opacity-50 hover:shadow-md hover:font-medium'
    ];

    const external_link_css = [
        'hover:text-teal-900', 'drop-shadow-2xl',
        'transition', 'ease-in-out', 'duration-300'
    ]

    return(
        <main className={"fixed top-0 left-0 right-0 w-full h-full z-40 flex flex-col transition ease-in-out duration-500 " + (isMenuOpen ? 'translate-x-0' : 'translate-x-full') + " bg-white text-black justify-center items-center lg:hidden"} >
            <button className={nav_button_css.join(' ')} onClick={() => location.href = "/pages/landing"}>HOME</button>
            <button className={nav_button_css.join(' ')} onClick={() => location.href = "/pages/about"}>ABOUT</button>
            <button className={nav_button_css.join(' ')} onClick={() => location.href = "/pages/experience"}>EXPERIENCE</button>
            <button className={nav_button_css.join(' ')} onClick={() => location.href = "/pages/portfolio"}>PORTFOLIO</button>
            {/* <button className={nav_button_css.join(' ')} onClick={() => location.href = "/pages/contact"}>CONTACT</button> */}
            <ul className="flex items-center gap-x-4 md:mx-8 lg:mx-16 text-3xl mt-4">
                <li className={external_link_css.join(' ')}><a href="https://www.linkedin.com/in/adonis-serrano/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li className={external_link_css.join(' ')}><a href="https://github.com/AdonisS2004" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </main>
    );
}