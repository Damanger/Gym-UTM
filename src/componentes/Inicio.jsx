import '../Assets/CSS/inicio.css';

const Inicio = () => {

    return (
        <div className='Inicio'>
            <p className='intro'>"Nuestros entrenadores están aquí para apoyarte en tus metas físicas y de bienestar mientras te embarcas en tu viaje universitario. Ya sea que busques mejorar tu rendimiento atlético, mantenerte en forma o simplemente encontrar un equilibrio saludable entre tus estudios y tu bienestar, nuestro equipo está comprometido a ayudarte a alcanzar tus objetivos en el gimnasio de la universidad."</p>
            <img src="./chicos.webp" alt="chicos" className='imagen-fondo' />
            <div className="ventana"></div>
            <img src="./girl.webp" alt="chica" id='chica' />
        </div>
    );
};

export default Inicio;