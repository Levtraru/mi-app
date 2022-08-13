import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

// id: identifica la tarea de forma unica
// texto: texto que se va a mostrar
// completada: si la tarea se va a mostrar o no
// completarTarea, eliminarTarea: funciones pasadas como props para completar y eliminar una tarea
function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  const [aCompletar, setACompletar] = useState(false);

  return (
// Si el prop 'completada' es True     le pone esta clase    si no,    ésta
    <div className = {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className = "tarea-texto"    onClick = {() => completarTarea(id)}>
        {texto}
      </div>
        <div className = "tarea-contenedor-iconos"
          onClick = {() => eliminarTarea(id)}
          onMouseEnter = {() => setACompletar(true)}
          onMouseLeave = {() => setACompletar(false)}>
            {aCompletar ?
              <AiFillCheckCircle className="tarea-icono-check"/> :
              <AiOutlineCheckCircle className="tarea-icono-close" />}
        {/* {(setACompletar(true)) ? <AiFillCheckCircle className="tarea-icono"/> : <AiFillCheckSquare/>} */}
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function TareaFormulario (props) {
  // Estado del input del formulario
  const [input, setInput] = useState('');
  // Escucha cualquier cambio en el formulario
  const setCambio = e => {
    setInput(e.target.value);
  };
  // Maneja el envio de datos con el boton al lado del formulario
  const setEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className = "tarea-formulario"
      onSubmit = {setEnvio}>
      <input
        className = "tarea-input"
        type = "text"
        placeholder = "Escribe una Tarea"
        name = "texto"
        onChange = {setCambio}
      />
      <button className = "tarea-boton">Agregar Tarea</button>
    </form>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ListaDeTareas () {
  // Estado (array) de la lista de tareas
  const [tareas, setTareas] = useState([]);
  // Funcion que agrega una tarea a la lista de tareas
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      // Actualiza el estado de tareas
      setTareas(tareasActualizadas);
    }
  };

  // Funcion que elimina una tarea de la lista de tareas
  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    // <> </> Es un fragmento, cumple el requisito de que todo esté dentro de algo sin crear un div
    <>
      <TareaFormulario onSubmit = {agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          // Map es un método que va a tomar cada una de las 'tarea', las va a pasar 1 por 1 como argumento para otra funcion
            // y va a realizar lo que nosotros especifiquemos con esa 'tarea'
          tareas.map((tarea) =>
            <Tarea
              key = {tarea.id}
              id= {tarea.id}
              texto = {tarea.texto}
              completada = {tarea.completada}
              eliminarTarea = {eliminarTarea}
              completarTarea = {completarTarea}
            />)
        }
      </div>
    </>
  );
}

export { Tarea, TareaFormulario, ListaDeTareas };