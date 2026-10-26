import '../style/index.css'

function Register() {
  return (
    <div className="page" id="page-register">
      <div className="auth-page">
        <div className="auth-box">
          <div className="auth-head">
            <div className="auth-logo-name">LDEP3D</div>
            <div className="auth-logo-full">Cadastro de Novo Membro</div>
            <div
              className="auth-inst"
              style={{ marginTop: '.5rem', color: 'rgba(255,255,255,.4)' }}
            >
              Novas contas entram como Visitante.
              <br />
              Solicite promoção ao administrador.
            </div>
          </div>

          <div className="auth-body">
            <div className="err-msg" id="reg-err"></div>
            <div className="suc-msg" id="reg-suc">
              Conta criada! Entrando como Visitante...
            </div>

            <div className="fg">
              <label>Nome Completo</label>
              <input
                type="text"
                id="reg-name"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="fg">
              <label>Email</label>
              <input
                type="email"
                id="reg-email"
                placeholder="membro@escolar.ifrn.edu.br"
              />
            </div>

            <div className="fg">
              <label>Área de Pesquisa</label>
              <select id="reg-area">
                <option value="">Selecione...</option>
                <option>Eletrônica & Circuitos</option>
                <option>Robótica & Automação</option>
                <option>Prototipagem 3D / Manufatura</option>
                <option>Sistemas Embarcados</option>
                <option>IoT & Redes de Sensores</option>
                <option>Visão Computacional</option>
                <option>IA & Machine Learning</option>
              </select>
            </div>

            <div className="fg">
              <label>Vínculo Institucional</label>
              <select id="reg-level">
                <option value="">Selecione...</option>
                <option>Técnico Integrado</option>
                <option>Graduação (IC)</option>
                <option>Mestrado</option>
                <option>Doutorado</option>
                <option>Professor / Orientador</option>
                <option>Técnico de Laboratório</option>
              </select>
            </div>

            <div className="fg">
              <label>Senha (mín. 6 caracteres)</label>
              <div className="pass-wrap">
                <input
                  type="password"
                  id="reg-pass"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="pass-eye"
                  onClick={() => togglePass('reg-pass', event.currentTarget)}
                  tabIndex={-1}
                >
                  👁
                </button>
              </div>
            </div>

            <button
              className="btn btn-solid"
              style={{ width: '100%' }}
              onClick={() => doRegister()}
            >
              Criar Conta
            </button>

            <div className="auth-switch">
              Já tem conta?{' '}
              <a onClick={() => showAuthPage('login')}>Fazer login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;