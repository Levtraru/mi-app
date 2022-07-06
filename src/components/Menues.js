import '../stylesheets/HamburgerMenu.css';
import velCampLogo from '../images/velcamp-logo.png';
import { Link } from 'react-router-dom';

// Sidebar
const HamburgerMenu = () => (
        <div className="hamburger-menu">
            {/* Muestra o esconde el sidebar */}
            <input id="menu-toggle" type="checkbox"/>
            <label className="menu-btn" htmlFor="menu-toggle">
                <span></span>
            </label>
            {/* Lista de links en la página */}
            <ul className="menu-box">
                <li><Link to="/" className="menu-item">             Inicio          </Link></li>
                <li><Link to="/testimonios" className="menu-item">  Testimonios     </Link></li>
                <li><Link to="/clicker" className="menu-item">      Clicker         </Link></li>
                <li><Link to="/calculadora" className="menu-item">  Calculadora     </Link></li>
                <li><Link to="/tareas" className="menu-item">       Tareas          </Link></li>
            </ul>
        </div>
);

// Logo
const VelcampLogo = () => (
    <div className="velcamp-logo-contenedor">
            <img
                className='velcamp-logo'
                src={velCampLogo}
                alt='Logo de velCamp'/>
            </div>
);

export {HamburgerMenu, VelcampLogo};