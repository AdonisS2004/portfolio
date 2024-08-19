import Link from "next/link";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageNavigation({numbers, currentPage, setCurrentPage}:{numbers:Array<number>, currentPage:any, setCurrentPage:Function}){
    return(
        <nav className="h-12 w-full bg-green-100 flex">
            <li className="">
                <Link href="#" onClick={() => prevPage(currentPage, setCurrentPage)}>
                    <FontAwesomeIcon icon={faArrowLeft} className=""></FontAwesomeIcon>
                </Link>
            </li>
            {
                numbers.map((n,i) => (
                    <li className={`${currentPage === n ? "bg-yellow-950" : "bg-red-500"}`} key={i} onClick={() => toPage(n, setCurrentPage)}>
                        {n}
                    </li>
                ))
            }
            <li>
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
    setFunction(page)
}