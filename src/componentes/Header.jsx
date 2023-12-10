import '../Assets/CSS/header.css'
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Header = () =>{
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 2250);
    }, []);
    return(
        <>
            <nav className={`navbar ${isActive ? 'active' : ''}`}>
                <NavLink to="/"><img src="./UTM.webp" alt="UTM" id='UTM'></img></NavLink>
                <div className='options'>
                    <NavLink to="/" activeclassname="active">INICIO</NavLink>
                    <NavLink to="/horarios-contacto" activeclassname="active">HORARIOS Y CONTACTO</NavLink>
                    <NavLink to="/entrenamientos" activeclassname="active">ENTRENAMIENTO</NavLink>
                    <NavLink to="/equipo" activeclassname="active">EQUIPO</NavLink>
                    <NavLink to="/registrarme" activeclassname="active">REGISTRARME</NavLink>
                    <NavLink to="/login"><img src="./user.png" alt="Usuario" id='Usuario'></img></NavLink>
                </div>
            </nav>
        </> 
    )
}

export default Header