import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faJs, faReact, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function Landing() {
    const technologiesIcons = [
        {fa: faPython, key:'py'},
        {fa: faReact, key:'react'},
        {fa: faHtml5, key:'html5'},
        {fa: faCss3, key:'css3'},
        {fa: faJs, key:'js'},
    ]

    const technologies_css = [

    ]

    const technologiesItems = technologiesIcons.map((icon) => 
        <FontAwesomeIcon key={icon.key} icon={icon.fa} className="text-4xl text-zinc-200 bg-slate-500 p-2 rounded-sm bg-opacity-50"/>
    );

    return (
        <main className = "w-full grid grid-cols-3 grid-rows-8 text-black h-full p-8">
            <div className={"lg:pl-28 md:pl-20 row-span-7 col-span-3 md:col-span-2 w-full h-full flex flex-col justify-center items-center md:items-start rounded-md text-white font-customSpartan"}>
                
                <span className="w-full text-6xl mb-2 font-bold">
                    ADONIS SERRANO 
                </span>
                <div className="h-2 w-1/4 bg-white mb-5"></div>
                <span className="w-full text-lg font-light italic text-neutral-300 underline">
                    Engineer fueled by:
                </span>
                <span className="w-full text-4xl mb-5 font-bold">
                    Drive, <span>Determination</span>, & <span className="text-teal-300 drop-shadow-landing">INNOVATION</span>
                </span>
                <div className="mb-4 corner p-5 text-gray-200">
                I am an engineer with a passion for innovation and technology. I currently attend
                the Massachusetts Institute of Technology where I am majoring in an Engineering track 
                Concentrated in Controls, Instrumentation, and Robotics. I have Software Developement experience building
                tools for companies such as Amazon and Intel. I also have modeling, prototyping, and fabrication experience
                through teama and personal projects, as well as through courses I take at university. Check out my resume 
                and feel free to learn about me with the links below!
                </div>
                
                <div id="technologies" className="space-x-3">
                    { technologiesItems }
                </div>
        
            </div>
            <div className={"row-span-7 col-span-1 w-full h-full hidden md:flex rounded-md justify-center items-center"}>
                <Image src={"/assets/other/robot.png"} alt="Robot for landing page" width={500} height={300}></Image>
            </div>
            <div className="row-span-1 col-span-3 w-full h-full rounded-md flex items-center justify-center space-x-14">
                <Link href="https://drive.google.com/file/d/1akXA_cgAoRW8BnbrE2CJQM9VTZZQBFAj/view?usp=drive_link" className="text-white bg-indigo-400 px-8 py-3 text-md font-bold rounded-xl shadow-md shadow-slate-200">
                    Resume
                </Link>
                <Link href="/pages/portfolio" className="text-white bg-indigo-400 px-8 py-3 text-md font-bold rounded-xl shadow-md shadow-slate-200">
                    Learn More
                </Link>
            </div>
        </main>
    )
}