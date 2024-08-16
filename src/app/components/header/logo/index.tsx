import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Logo(){
    return(
        <span id="logo" className="lg:mx-16 pt-6 px-8 pb-4">
            <Link href="/pages/landing">
                <FontAwesomeIcon 
                icon={faSeedling} 
                className="text-3xl drop-shadow-2xl hover:text-teal-900 transition ease-in-out duration-300 hover:drop-shadow-logo" 
                />
            </ Link>
        </span>
    );
}