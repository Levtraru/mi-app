import '../stylesheets/Calculadora.css';
import { useState } from 'react';
import { HamburgerMenu, VelcampLogo } from '../components/Menues';
import { BotonClear, Botones, Pantalla } from './Botones';
import { evaluate } from 'mathjs';

function Calculadora() {
    // Lo que se ingrese en la calculadora y sus resultados modifican el estado
    const [input, setInput] = useState('');
    // Promesa para crear un retraso
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    // Función que ingresa los números u operadores a la calculadora
    const addInput = val => {
        setInput(input + val);
    };
    // Función que calcula y muestra el resultado
    const calcResult = () => {
        if (input) {
        setInput(evaluate(input)) // Envía '=' solamente si hay algo en la pantalla de la calculadora
        } else {async function handleError() {
            setInput('Ingrese un número'); // Si no, muestra un mensaje de error en la pantalla
            await delay(1000);             // Retraso de 1 segundo
            setInput('');                  // Borra el mensaje de error
            }
            handleError();                 // Activa la función que evita el problema
        }
    };

    return(
        <div className='Calculadora'>
            <VelcampLogo />        {/* Logo */}
            <HamburgerMenu/>       {/* Sidebar */}
            <div className='contenedor-calculadora'>
                <Pantalla input={input} />                          {/* Donde se muestra lo que se ingresa con la calculadora */}
                <div className='fila'>                              {/* Fila de numeros y operadores */}
                    <Botones setClick={addInput}>7</Botones>
                    <Botones setClick={addInput}>8</Botones>
                    <Botones setClick={addInput}>9</Botones>
                    <Botones setClick={addInput}>*</Botones></div>
                <div className='fila'>                              {/* Fila de numeros y operadores */}
                    <Botones setClick={addInput}>4</Botones>
                    <Botones setClick={addInput}>5</Botones>
                    <Botones setClick={addInput}>6</Botones>
                    <Botones setClick={addInput}>-</Botones></div>
                <div className='fila'>                              {/* Fila de numeros y operadores */}
                    <Botones setClick={addInput}>1</Botones>
                    <Botones setClick={addInput}>2</Botones>
                    <Botones setClick={addInput}>3</Botones>
                    <Botones setClick={addInput}>+</Botones></div>
                <div className='fila'>                              {/* Fila de numeros y operadores */}
                    <Botones setClick={addInput}>.</Botones>
                    <Botones setClick={addInput}>0</Botones>
                    <Botones setClick={calcResult}>=</Botones>
                    <Botones setClick={addInput}>/</Botones></div>
                <div className='fila'>                              {/* Botón reseteador */}
                    <BotonClear clearCalc={() => setInput('')} />
                </div>
            </div>
        </div>
    );
}

export default Calculadora;