import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faJs, faReact, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function Landing() {
    // for the font awesome icons
    const technologiesIcons = [
        {fa: faPython, key:'py'},
        {fa: faReact, key:'react'},
        {fa: faHtml5, key:'html5'},
        {fa: faCss3, key:'css3'},
        {fa: faJs, key:'js'},
    ]

    // for the svg icons
    const fs = require('fs')
    const path = require('path')
    const technologiesSVGs = fs.readdirSync(path.resolve("public/assets/icons"))
    console.log(technologiesSVGs)

    const technologies_css = [

    ]

    // const technologiesItems = technologiesIcons.map((icon) => 
    //     <FontAwesomeIcon key={icon.key} icon={icon.fa} className="text-4xl text-zinc-200 bg-slate-500 p-2 rounded-sm bg-opacity-50"/>
    // );

    const technologiesItems = technologiesSVGs.map((res:any) => 
        res != ".DS_Store" ? <Image src={("/assets/icons/" + res)} alt="tech icon" width={50} height={50} className="w-8 md:w-10"></Image>: <span></span>
    );

    return (
        <main className = "w-full grid grid-cols-3 grid-rows-8 text-black h-full">
            <div className={"lg:pl-28 row-span-7 col-span-3 lg:col-span-2 w-full h-full flex flex-col justify-center items-center lg:items-start rounded-md text-white font-customSpartan"}>
                <span className="mt-4 mb-2 w-full font-bold text-2xl md:text-4xl xl:text-5xl text-center lg:text-left">
                    ADONIS SERRANO 
                </span>
                <div className="h-2 w-1/4 bg-white mb-5"></div>
                <span className="w-full text-sm md:text-lg font-light italic text-neutral-300 underline">
                    Engineer fueled by:
                </span>
                <span className="w-full text-md md:text-2xl xl:text-4xl mb-5 font-bold">
                    Drive, <span>Determination</span>, & <span className="text-teal-300 drop-shadow-landing">INNOVATION</span>
                </span>
                <div className="corner mb-4 p-5 text-gray-200 text-center text-xs md:text-sm xl:">
                I am an engineer with a passion for innovation and technology. I currently attend
                the Massachusetts Institute of Technology where I am majoring in an Engineering track 
                Concentrated in Controls, Instrumentation, and Robotics. I have Software Developement experience building
                tools for companies such as Amazon and Intel. I also have modeling, prototyping, and fabrication experience
                through teama and personal projects, as well as through courses I take at university. Check out my resume 
                and feel free to learn about me with the links below!
                </div>
                
                <div id="technologies" className="hidden md:flex space-x-2">
                    { technologiesItems }
                </div>
        
            </div>
            <div className={"row-span-7 col-span-1 w-full h-full hidden lg:flex rounded-md justify-center items-center"}>
                <Image src={"/assets/other/robot.png"} alt="Robot for landing page" width={500} height={300}></Image>
            </div>
            <div className="row-span-1 col-span-3 w-full h-full rounded-md flex items-center justify-center space-x-6 text-sm md:text-base">
                <Link href="https://drive.google.com/file/d/1akXA_cgAoRW8BnbrE2CJQM9VTZZQBFAj/view?usp=drive_link" className="text-white bg-slate-500 px-4 py-3 font-bold rounded-xl shadow-md shadow-slate-200 hover:bg-slate-100 hover:text-blue-950 transition ease-in-out duration-200 hover:shadow-teal-400">
                    Resume
                </Link>
                <Link href="/pages/portfolio" className="text-white bg-slate-500 px-4 py-3 font-bold rounded-xl shadow-md shadow-slate-200 hover:bg-slate-100 hover:text-blue-950 transition ease-in-out duration-200 hover:shadow-teal-400">
                    Learn More
                </Link>
            </div>
        </main>
    )
}