import ImageCarousel from "../image-carousel";

export default function ProjectContainer({Project} : {Project:any}){
    const h2CSS = [
        'text-2xl', 'mb-2'
    ]
    const pCSS = [

    ]
    return(
        <main className="w-full h-full bg-gray-200 flex space-x-2">
            <div className="bg-blue-200 w-1/2 h-full overflow-hidden">
                <span className="flex items-end w-full bg-yellow-100 capitalize text-4xl p-4">{Project.title}</span>
                <ImageCarousel />
            </div>
            <div className="bg-blue-200 w-1/2 h-full p-4 overflow-scroll">
                <h2 className={h2CSS.join(" ")}>Description</h2>
                <p>{Project.description}</p>
                <h2 className={h2CSS.join(" ")}>Skills and Technologies:</h2>
                <p>{Project.skills}</p>
            </div>
        </main>
    );
}