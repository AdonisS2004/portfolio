import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className = "text-white py-4 fixed left-0 right-0 bottom-0">
            <div className="container mx-auto px-4 text-center">
                <p className="drop-shadow-md">&copy; 2024 My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}