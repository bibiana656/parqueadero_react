import logo from './assets/logo.png';

function Login() {
  return (
  <main className="login">
    {/* Contenedor principal del formulario de login */}
    <aside className="formulario">
      {/* Sección del formulario */}
      <h1>Inicio De Sesión</h1>
      {/* Título del formulario */}
      <aside className="container">
        {/* Contenedor del logo */}
        <img src={logo} alt="logo" />
        {/* Imagen del logo */}
      </aside>
      <form id="login" className='campos-input'>
        {/* Formulario para el inicio de sesión */}
        <aside className="usuario">
          {/* Campo de entrada para el nombre de usuario */}
          <input type="text" name="usuario" id="usuario" required />
          {/* Campo de entrada de texto */}
          <label for="usuario">Usuario</label>
          {/* Etiqueta para el campo de entrada */}
        </aside>
        <aside className="password">
          {/* Campo de entrada para la contraseña */}
          <input type="password" name="password" id="password" required />
          {/* Campo de entrada de contraseña */}
          <label for="contraseña">Contraseña</label>
          {/* Etiqueta para el campo de contraseña */}
        </aside>
        <a className="reestablecer" href="./views/usuario/registro.html">Crear una cuenta</a>
        {/* Enlace para restablecer la contraseña */}
        <input className="btn-login" type="submit" value="Ingresar" id="ingresar"/>
        {/* Botón de envío del formulario */}
      </form>
    </aside>
  </main>
  )
}

export default Login;