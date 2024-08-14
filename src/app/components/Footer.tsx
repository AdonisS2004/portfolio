import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2024 My Portfolio. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://github.com/AdonisS2004" className="hover:text-gray-400 mx-2">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/adonis-serrano/" className="hover:text-gray-400 mx-2">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    );
}