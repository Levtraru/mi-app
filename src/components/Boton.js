import '../stylesheets/Boton.css'
// Componente Boton que evalua esBotonDeClick para poner las clases boton-click o boton-reiniciar
// También añade la funcion manejarClick al ser clickeado
const Boton = ({ texto, esBotonDeClick, manejarClick }) => (
      <button
        className={ esBotonDeClick ? 'clicker-boton boton-click' : 'clicker-boton boton-reiniciar' }
        onClick={manejarClick}>
        {texto}
      </button>
    );
    
export default Boton;