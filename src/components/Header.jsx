import "./Header.css";
import { FiLogOut } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

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
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDarkMode ? (
              <BsSun className="header-darkmode-icon" />
            ) : (
              <BsMoon className="header-darkmode-icon" />
            )}
          </button>

          {/* Cerrar Sesión */}
          <button
            className="header-logout"
            onClick={handleLogout}
            aria-label="Cerrar sesión"
          >
            <FiLogOut className="header-logout-icon" />
            <span className="header-logout-text">Salir</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;