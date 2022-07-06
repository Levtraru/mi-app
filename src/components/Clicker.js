import '../stylesheets/Clicker.css'
import Boton from './Boton';
import Contador from './Contador';
import { HamburgerMenu, VelcampLogo } from '../components/Menues';
import { useState } from 'react';


function Clicker() {
    // El estado cambia al clickear (el botón)
    const [numClicks, setNumClicks] = useState(0);
    // Función que agrega 1 al estado
    const manejarClick = () => {
        setNumClicks(numClicks + 1);

    };
    // Función que vuelve el contador a 0
    const reiniciarContador = () => {
        setNumClicks(0);
    };
    
    return (
        <div className="Clicker">
             <VelcampLogo />    {/* Logo de la página */}
            <HamburgerMenu />   {/* Sidebar */}
            <div className="contenedor-principal-clicker">
                <Contador numClicks={numClicks} /> {/* Muestra el estado, la cantidad de clicks */}
                {/* Botón que suma +1 al estado */}
                <Boton 
                texto='Click' 
                esBotonDeClick={true}
                manejarClick={manejarClick}
                />
                {/* Botón que vuelve el contador a 0 */}
                <Boton
                texto='Reiniciar'
                esBotonDeClick={false}
                manejarClick={reiniciarContador}
                />
            </div>
        </div>
    );
}

export default Clicker;