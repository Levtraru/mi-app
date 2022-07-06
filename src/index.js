import {Testimonios, Clicker, Calculadora, Tareas} from './components/Exportes'
import './index.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"           element={<App />}         />
      <Route path="testimonios" element={<Testimonios />} />
      <Route path="clicker"     element={<Clicker />}     />
      <Route path="calculadora" element={<Calculadora />} />
      <Route path="tareas" element={<Tareas />} />
    </Routes>
  </BrowserRouter>
);