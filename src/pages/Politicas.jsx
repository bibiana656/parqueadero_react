import './Politicas.css';

export default function Politicas() {
  return (
    <div className="politicas-container">
      <div className="logo-politicas">
        <img
          src="/logo_parqueadero.png"
          alt="Logo Parqueadero"
          className="politicas-logo-img"
        />
      </div>

      <h1 className="politicas-titulo">Políticas del Parqueadero CSSJ</h1>
      <p className="politicas-descripcion">
        Al utilizar este sistema, aceptas las siguientes normas:
      </p>

      <ul className="politicas-lista">
        <li>
          <strong>1.</strong> El usuario debe registrarse con datos reales.
        </li>
        <li>
          <strong>2.</strong> Las reservas deben hacerse con al menos 1 hora de anticipación.
        </li>
        <li>
          <strong>3.</strong> No se permite compartir cuentas entre usuarios.
        </li>
        <li>
          <strong>4.</strong> El sistema puede suspender cuentas por mal uso.
        </li>
        <li>
          <strong>5.</strong> La información personal se protege bajo la Ley de Habeas Data.
        </li>
      </ul>
    </div>
  );
}