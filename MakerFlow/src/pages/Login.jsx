import '../style/index.css'
import ldepLogo from '../assets/LDEP3D-logo.png'

function Login() {
  return (
    <div className="page active" id="page-login">
      <div className="auth-page">
        <div className="auth-box">
          <div className="auth-head">
            <img
              src={ldepLogo}
              alt="logo ldep"
              style={{ height: '150px' }}
            />
            <div className="auth-logo-full">
              Laboratório de Desenvolvimento Eletrônico e Protótipos 3D
            </div>
            <div className="auth-inst">IFRN — Campus Parelhas/RN</div>
          </div>
          <div className="auth-body">
            <div className="err-msg" id="login-err"></div>
            <div className="fg">
              <label>Email</label>
              <input
                type="email"
                id="login-email"
                placeholder="membro@escolar.ifrn.edu.br"
              />
            </div>
            <div className="fg">
              <label>Senha</label>
              <div className="pass-wrap">
                <input
                  type="password"
                  id="login-pass"
                  placeholder="••••••••"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') doLogin();
                  }}
                />
                <button
                  type="button"
                  className="pass-eye"
                  onClick={(event) => togglePass('login-pass', event.currentTarget)}
                  tabIndex={-1}
                >
                  👁
                </button>
              </div>
            </div>
            <button
              className="btn btn-solid"
              style={{ width: '100%' }}
              onClick={() => doLogin()}
            >
              Acessar o Sistema
            </button>
            <div className="auth-switch">
              Não tem conta?{' '}
              <a onClick={() => showAuthPage('register')}>Cadastre-se</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login