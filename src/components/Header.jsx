import "./Header.css";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // <-- esto es para poder navegar entre rutas

function Header() {
  const navigate = useNavigate(); // <-- Hook de navegación

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo */}
        <div className="header-logo">
          <img
            src="/logo_parqueadero.png"
            alt="Logo parqueadero"
            className="header-logo-img"
          />
        </div>

        {/* perfil y modo noche */}
        <div className="header-actions">
          {/* boton modo noche */}
          <button
            className="header-darkmode-toggle"
            onClick={() => console.log("Toggle dark mode")}
            aria-label="Toggle dark mode"
          >
            <svg
              className="header-darkmode-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ... */}
            </svg>
          </button>

          {/* Cerrar Sesion */}
          <button
            className="header-logout"
            onClick={handleLogout} 
            aria-label="Logout"
          >
            <FiLogOut className="header-logout-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
