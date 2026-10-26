import { Link } from 'react-router-dom';
import { SatelliteDish, CalendarDays, Wrench } from 'lucide-react'
import '../style/Home.css'

function Home() {   
  return (
    <div className="page" id="page-home">
      <div className="hero">
        <svg
          className="hero-art"
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="50" y="20" width="400" height="560" rx="4" stroke="white" strokeWidth="2" />
          <rect x="30" y="80" width="440" height="12" rx="6" fill="white" />
          <rect x="220" y="92" width="60" height="20" fill="white" />
          <polygon points="235,112 265,112 258,135 242,135" fill="white" />
          <rect x="80" y="460" width="340" height="16" rx="2" fill="white" />
          <rect x="90" y="476" width="8" height="40" fill="white" />
          <rect x="400" y="476" width="8" height="40" fill="white" />
          <rect x="180" y="420" width="140" height="8" rx="1" fill="white" opacity=".9" />
          <rect x="190" y="410" width="120" height="8" rx="1" fill="white" opacity=".72" />
          <rect x="200" y="400" width="100" height="8" rx="1" fill="white" opacity=".56" />
          <rect x="210" y="390" width="80" height="8" rx="1" fill="white" opacity=".4" />
          <rect x="218" y="380" width="64" height="8" rx="1" fill="white" opacity=".26" />
          <rect x="225" y="370" width="50" height="8" rx="1" fill="white" opacity=".14" />
          <line
            x1="250"
            y1="135"
            x2="250"
            y2="370"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity=".2"
          />
          <rect x="50" y="20" width="8" height="560" fill="white" opacity=".1" />
          <rect x="442" y="20" width="8" height="560" fill="white" opacity=".1" />
          <rect x="40" y="70" width="22" height="22" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="438" y="70" width="22" height="22" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>

        <div className="hero-kicker">
          IFRN — Campus Parelhas/RN · Est. 2024
        </div>

        <h1 className="hero-hl">
          <div>DESENVOLVA.</div>
          <div className="dim">PROTOTIPE.</div>
          <div>
            <span className="inv">INOVE.</span>
          </div>
        </h1>

        <p className="hero-sub">
          O LDEP3D é o espaço de pesquisa e fabricação do IFRN Campus
          Parelhas, dedicado ao desenvolvimento de projetos eletrônicos,
          robótica e prototipagem 3D aplicados a desafios reais.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn btn-solid">
            Explorar Projetos
          </Link>

          <Link to="/calendar" className="btn btn-outline" id="hero-sched-btn">
            Agendar o Laboratório
          </Link>
        </div>

        <div className="stats-strip">
          <div className="stat-cell">
            <div className="stat-num" id="stat-members">—</div>
            <div className="stat-lbl">Membros Cadastrados</div>
          </div>

          <div className="stat-cell">
            <div className="stat-num" id="stat-projects">—</div>
            <div className="stat-lbl">Projetos Publicados</div>
          </div>

          <div className="stat-cell">
            <div className="stat-num">1</div>
            <div className="stat-lbl">Impressora 3D</div>
          </div>

          <div className="stat-cell">
            <div className="stat-num">8</div>
            <div className="stat-lbl">Arduinos</div>
          </div>
        </div>
      </div>

      <div className="feat-strip" id="feat-strip">
        <Link to="/projects" className="feat">
          <span className="feat-icon"><SatelliteDish /></span>
          <div className="feat-name">Projetos</div>
          <div className="feat-desc">
            Publicações e protótipos dos membros do laboratório.
          </div>
        </Link>

        <Link to="/calendar" className="feat">
          <span className="feat-icon"><CalendarDays /></span>
          <div className="feat-name">Calendário</div>
          <div className="feat-desc">
            Eventos, workshops, seminários e prazos do LDEP3D.
          </div>
        </Link>

        <Link to="/materials" className="feat" id="feat-sched">
          <span className="feat-icon"><Wrench /></span>
          <div className="feat-name">Agendar Lab</div>
          <div className="feat-desc">
            Reserve bancadas, impressoras 3D e equipamentos.
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
