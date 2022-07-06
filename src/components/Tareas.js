import '../stylesheets/Tareas.css'
import { HamburgerMenu, VelcampLogo } from '../components/Menues';
import {ListaDeTareas} from './Tarea';

function Tareas () {
  return (
    <div className='Tareas'>
      <VelcampLogo />    {/* Logo de la página */}
      <HamburgerMenu />   {/* Sidebar */}
      <div className='contenedor-tareas'>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default Tareas;