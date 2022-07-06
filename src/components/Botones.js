function Botones (props) {
	// Designa como operador aquellos que no son números ni punto
	const esOperador = valor => {
		return isNaN(valor) && (valor !== '.');
	};
	// Si un botón de 'botones-contenedor' es un operador le agrega la clase operador
	// Además, activa la función setClick cuando un botón es clickeado  
	return (
		<div
			className={`botones-contenedor ${esOperador(props.children) ? 'operator' : ''}`.trimEnd()}
			onClick={() => props.setClick(props.children)}>
			{props.children}
		</div>
	);
}
// Espacio donde se ven lo que se digita en la calculadora
const Pantalla = ({ input }) => (
	<div className="input">
		{input}
	</div>
);
// Botón que limpia la pantalla
const BotonClear = (props) => (
	<div className="boton-clear" onClick={props.clearCalc}>
		Clear
	</div>
);

export {Botones, Pantalla, BotonClear} ;