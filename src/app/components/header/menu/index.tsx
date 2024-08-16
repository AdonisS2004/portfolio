export default function Menu({isMenuOpen} : {isMenuOpen:any}) {
    const nav_button_css = [
        'w-4/5 pt-8 pb-8 border-b-4 border-opacity-5 border-teal-900 mx-6', 
        'transition ease-in-out duration-200',
        'hover:bg-neutral-50 hover:border-opacity-50 hover:shadow-md hover:font-medium'
    ]

    return(
        <main className={"fixed top-0 left-0 right-0 w-full h-full z-40 flex-col " + (isMenuOpen ? 'flex' : 'hidden') + " bg-white text-black justify-center items-center lg:hidden"} >
            <button className={nav_button_css.join(' ')}>HOME</button>
            <button className={nav_button_css.join(' ')}>ABOUT</button>
            <button className={nav_button_css.join(' ')}>EXPERIENCE</button>
            <button className={nav_button_css.join(' ')}>PORTFOLIO</button>
            <button className={nav_button_css.join(' ')}>CONTACT</button>
        </main>
    );
}