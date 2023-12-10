import '../Assets/CSS/login.css'

const Login = () =>{
    return (
        <div className='afuera'>
            <div className="centro">
                <div className="imagen-gym">
                    <img src="./gym.webp" alt="Gym" id='img-gym'/>
                    <img src="./portapapeles.webp" alt="formulario" id='form-gym' />
                    <h1 className='sesion'>Iniciar Sesión</h1>
                    <form action="" id='logeo'>
                        <div className="form-group">
                            <label htmlFor="correo">Correo:</label>
                            <input type="email" id="correo" name="correo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contrasena">Contraseña:</label>
                            <input type="password" id="contrasena" name="contrasena" required />
                        </div>
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login