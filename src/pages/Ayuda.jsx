import './Ayuda.css';

export default function Ayuda() {
  return (
    
    
    <div className="ayuda-container">
         <div className="ayuda-container">
     
      <div className="logo-ayuda">
        <img
          src="/logo_parqueadero.png"
          alt="Logo Parqueadero"
          className="logo-img"
        />
      </div>

      <h1 className="ayuda-titulo">Centro de Ayuda CSSJ</h1>
      <p className="ayuda-descripcion">
        Aquí encontrarás respuestas a preguntas frecuentes sobre el uso del sistema.
      </p>

    </div>
      

      <div className="ayuda-lista">
        <div className="ayuda-item">
          <h3>¿Cómo me registro?</h3>
          <p>
            Ve a la opción "Registro de Usuarios" y completa el formulario con tus datos.
          </p>
        </div>
        <div className="ayuda-item">
          <h3>¿Cómo hago una reserva?</h3>
          <p>
            En la sección "Reserva", elige fecha, hora y confirma tu espacio.
          </p>
        </div>
        <div className="ayuda-item">
          <h3>¿Olvidé mi contraseña?</h3>
          <p>
            Comunícate con el administrador del sistema para restablecer tu clave.
          </p>
        </div>
        <div className="ayuda-item">
          <h3>¿Dónde veo mis reportes?</h3>
          <p>
            Accede a la sección "Reportes" para consultar tus movimientos.
          </p>
          
          
        </div>
        
      </div>
      
    </div>
  );
}