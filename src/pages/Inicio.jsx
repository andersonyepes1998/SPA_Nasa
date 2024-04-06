import { useState } from "react";
import Cards from "../components/Cards";

const Inicio = () => {

    const [operation, setOperation] = useState(0);

    const handleOperation = (oper) => {
      if(oper === 'suma'){
        setOperation(operation + 1)
      }else if(oper === 'resta'){
        setOperation(operation - 1)
      }
    }

    return(
        <div>
          <div className="relative">
            <img src="https://images-assets.nasa.gov/image/iss042e013697/iss042e013697~large.jpg?w=1920&h=1277&fit=crop&crop=faces%2Cfocalpoint" alt="banner" className="w-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center mt-5 lg:mt-28">
              <h1 className="lg:text-8xl  font-bold text-white text-3xl ">
                  Nuestro Sistema Solar
              </h1>
              <p className="text-gray-400 lg:text-4xl">
                  Explora el universo y descubre tu planeta natal con nosotros, en tu idioma.
              </p>
            </div>
          </div>
        <div className="flex justify-center mt-10">
          <p className="text-center lg:text-2xl"> 
            Ayudenos a responder ¿Cuantas veces has entrado a nuestra plataforma? 
          </p>
        </div>
        <div className="flex justify-center">
          <button 
            onClick={() => handleOperation('suma')} 
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5 mr-3"
          >
            Sumar
          </button>
            <h3 className="mt-7 font-bold">{operation}</h3>
          <button 
            onClick={() => handleOperation('resta')} 
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5 ml-3"
          >
            Restar
          </button>
        </div>
        <Cards/>
      </div>
    )
}

export default Inicio