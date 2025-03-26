import "./Header.css";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Añadimos useState y useEffect para manejar el tema

function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para el modo oscuro

  // Alternar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Aplicar la clase "dark" al elemento raíz (html) cuando cambie el estado
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

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

        {/* Perfil y modo noche */}
        <div className="header-actions">
          {/* Botón modo noche */}
          <button
            className="header-darkmode-toggle"
            onClick={toggleDarkMode} // Cambiamos la función a toggleDarkMode
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <svg
              className="header-darkmode-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Cerrar Sesión */}
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