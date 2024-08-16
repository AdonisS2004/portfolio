export default function Menu({isMenuOpen} : {isMenuOpen:any}) {
    
    return(
        <main className={"fixed top-0 left-0 right-0 w-full h-full z-40 " + (isMenuOpen ? 'flex' : 'hidden') + " bg-white text-black justify-center items-center lg:hidden"} >
            <h1>Menu...</h1>
        </main>
    );
}