import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function ImageCarousel({Project}:{Project:{ title: string; description: string; skills: string; images: string[]; }}){
    const [currentImage, setCurrentImage] = useState(0)
    const nimgs = Project.images.length
    const nimgs_array = Array.from(Array(nimgs), (_, i) => i)

    return(
        <main className="w-full h-full relative">
                {/* <div id="image-container" style={{ backgroundImage: "url(" + Project.images[currentImage] + ")" }} className="w-full h-full bg-no-repeat bg-contain bg-top"></div> */}
            <Image src={Project.images[currentImage]} alt="Project.img" width={300} height={300} className="absolute"></Image>
        </main>
    );
}