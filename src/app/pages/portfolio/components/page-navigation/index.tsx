import Link from "next/link";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageNavigation(
    {numbers, currentPage, setCurrentPage}:{numbers:Array<number>, currentPage:any, setCurrentPage:Function}
){
    const arrows_css = [
        "flex items-center p-1 text-gray-400",
        "transition ease-in-out duration-100",
        "hover:text-blue-400"
    ]

    const numbers_css = [
        "flex items-center justify-center w-10 h-10 rounded-full",
        "transition ease-in-out duration-100",
        "hover:border-blue-300 hover:border-2 hover:text-blue-600 hover:drop-shadow-lg"
    ]
    return(
        <nav className="h-12 w-full flex items-center justify-center text-lg space-x-2">
            <li className={`${arrows_css.join(" ")} hover:-translate-x-1`}>
                <Link href="#" onClick={() => prevPage(currentPage, setCurrentPage)}>
                    <FontAwesomeIcon icon={faArrowLeft} className=""></FontAwesomeIcon>
                </Link>
            </li>
            {
                numbers.map((n,i) => (
                    <li className={`${currentPage === n ? "bg-blue-400 text-white shadow-md border-" : "bg-none text-blue-200"} ${numbers_css.join(" ")}`} key={i} onClick={() => toPage(n, setCurrentPage)}>
                        <a href="#" className="w-full h-full flex items-center justify-center">{n}</a>
                    </li>
                ))
            }
            <li className={`${arrows_css.join(" ")} hover:translate-x-1`}>
                <Link href="#" onClick={() => nextPage(currentPage, setCurrentPage, numbers)}>
                    <FontAwesomeIcon icon={faArrowRight} className=""></FontAwesomeIcon>
                </Link>
            </li>
        </nav>
    );
}

function prevPage(current:any, setFunction:any){
    if (current > 1){
        setFunction(current - 1);
    }
}

function nextPage(current:any, setFunction:any, numbers:any){
    if (current < numbers.length){
        setFunction(current + 1);
    }
}

function toPage(page:any, setFunction:any){
    setFunction(page);
}