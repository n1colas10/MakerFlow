import { NavLink } from 'react-router-dom';
import LdepLogo from '../assets/LDEP3D-logo.png'
import '../style/Nav.css'

function Navbar() {

  return (
    <nav id="main-nav">
      <NavLink to={'/'} className={"nav-logo"}>
        <img
          className="nav-logo-img"
          src={LdepLogo}
          alt="Logo LDEP3D"
        />
        <div className="nav-logo-text">
          <span className="nav-logo-main">LDEP3D</span>
          <span className="nav-logo-sub">
            IFRN — Campus Parelhas/RN
          </span>
        </div>
      </NavLink>

      <div className="nav-div"></div>

      <div className="nav-links" id="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          Início
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          Projetos
        </NavLink>

        <NavLink to="/calendar" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          Calendário
        </NavLink>

        <NavLink to="/materials" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          Insumos
        </NavLink>

        <NavLink to="/bookings" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          Agendar Lab
        </NavLink>

        <NavLink to="/admin" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          Admin
        </NavLink>
      </div>

      <div className="nav-right">
        <span className="role-badge" id="nav-role-badge"></span>

        <div
          id="nav-avatar"
          //onClick={() => showPage("profile")}
          title="Meu Perfil"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid var(--border-l)",
            overflow: "hidden",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--surface2)",
            flexShrink: 0,
            transition: "border-color .2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.borderColor = "var(--text)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-l)")
          }
        >
          <span
            id="nav-avatar-initials"
            style={{
              fontFamily: "var(--cond)",
              fontSize: ".75rem",
              fontWeight: 900,
              color: "var(--text-dim)",
              letterSpacing: "1px",
            }}
          ></span>
        </div>

        <span className="nav-user" id="nav-user-name"></span>

        <button
          className="btn"
          //onClick={doLogout}
          style={{ fontSize: ".65rem", padding: ".38rem .8rem" }}
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

export default Navbar