import { Link } from "react-router-dom";

const Foothers = () => {
    return(
        <footer className="bg-white shadow dark:bg-gray-950 mt-5">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="https://www.nasa.gov/es/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Nasa-Logo.png" className="h-12" alt="Flowbite Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Nasa</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/" className="hover:underline me-4 md:me-6">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/eventos" className="hover:underline me-4 md:me-6">Eventos</Link>
                        </li>
                        <li>
                            <Link to="/noticias" className="hover:underline me-4 md:me-6">Noticias</Link>
                        </li>
                        <li>
                            <Link to="/multimedia" className="hover:underline me-4 md:me-6">Multimedia</Link>
                        </li>
                        <li>
                            <Link to="/imagenes" className="hover:underline">Imagenes</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="dark:text-white text-2xl font-semibold mt-5">The National Aeronautics and Space Administration</h1>
                    <p className="dark:text-gray-400 mt-2">NASA explores the unknown in air and space, innovates for the benefit of humanity,<br/> and inspires the world through discovery.</p>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Ander-Dev™</a>. Todos los derechos Reservados .</span>
            </div>
        </footer>
    )
}

export default Foothers