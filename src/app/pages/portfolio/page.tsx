"use client"
import { useState } from "react"
import PageNavigation from "./components/page-navigation"
import ProjectContainer from "./components/project-container"
import Projects from "@/app/data/project-data.json"


export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1)
    const npages = Projects.length
    const numbers = Array.from(Array(npages), (_, i) => i+1)

    return (
        <main className="bg-white w-full h-full rounded-lg text-black flex flex-col justify-center items-center p-4 space-y-2">
            <ProjectContainer Project={Projects[currentPage-1]}/>
            <PageNavigation numbers={numbers} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </main>
    )
}