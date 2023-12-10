import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Login from './componentes/Login';
import Error404 from './componentes/Error404';
import Cargando from './componentes/Cargando';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <Router>
      {isLoading ? (
        <Cargando imagen="logo.webp"/>
      ) : (
        <>
          <Header/>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/horarios-contacto' element={<Inicio/>} />
            <Route path='/entrenamientos' element={<Inicio/>} />
            <Route path='/equipo' element={<Inicio/>} />
            <Route path='/registrarme' element={<Inicio/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/usuario' element={<Inicio/>} />
            <Route path="*" element={<><Error404/><Navigate to="/not-found" replace /></>}/>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;