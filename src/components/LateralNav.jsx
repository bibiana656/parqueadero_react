import "./LateralNav.css";
import { FaRegCalendar } from "react-icons/fa";
import '../../src/index.css';



function LateralNav() {
    return (
        <aside className="sidebar">
          <div className="sidebar-content">
            <ul className="sidebar-menu">
              <li>
                <a href="#">
                <FaRegCalendar className="icon" />
                  <span>Disponibilidad</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Entrada</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Salida</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Mensualidad</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Reserva</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Reportes</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Ayuda</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Politicas</span>
                </a>
              </li>
            </ul>
            <div className="sidebar-footer">
              <button>
                Crear cuenta
              </button>
            </div>
          </div>
        </aside>
      );
    };
export default LateralNav;
