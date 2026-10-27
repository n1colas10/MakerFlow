import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../style/index.css'

function Register() {
  
  const [nome, setName] = useState('')
  const [email, setEmail] = useState('')
  const [matricula, setMatricula] = useState('')
  const [areaP, setAreaP] = useState('')
  const [vinculo, setVinculo] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')

  function manualReg(){
    const user = {
      nome: nome,
      email: email,
      matricula: matricula,
      areaPesquisa: areaP,
      vinculoInstitucional: vinculo,
      senha: senha,
      confSenha: confSenha
    }

    console.log(user)
  }

  function span(){
    if(senha.length > 0){
      if(senha.length >= 6) 
        return <span className='pass-span'>Senha válida</span>
      else
        return <span className='pass-span'>Caracteres insuficientes</span>
    }
  }

  function togglePass(passEye){
    const e = document.querySelector('input#reg-pass')
    const showing = e.type === 'text'
    e.type = showing ? 'password' : 'text'
    passEye.textContent = showing ? '◡':'👁'
    
  }

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
                onChange={(e)=>setName(e.currentTarget.value)}
              />
            </div>

            <div className="fg">
              <label>Email Escolar</label>
              <input
                type="email"
                id="reg-email"
                placeholder="membro@escolar.ifrn.edu.br"
                onChange={(e)=>setEmail(e.currentTarget.value)}
              />
            </div>

            <div className="fg">
              <label>Matrícula</label>
              <input
                type="text"
                id="reg-mat"
                placeholder=""
                onChange={(e)=>setMatricula(e.currentTarget.value)}
              />
            </div>

            <div className="fg">
              <label>Área de Pesquisa</label>
              <select id="reg-area" onChange={(e) => setAreaP(e.currentTarget.value)}>
                <option value="">Selecione...</option>
                <option value={"1"}>Eletrônica & Circuitos</option>
                <option value={"2"}>Robótica & Automação</option>
                <option value={"3"}>Prototipagem 3D / Manufatura</option>
                <option value={"4"}>Sistemas Embarcados</option>
                <option value={"5"}>IoT & Redes de Sensores</option>
                <option value={"6"}>Visão Computacional</option>
                <option value={"7"}>IA & Machine Learning</option>
              </select>
            </div>
 
            <div className="fg">
              <label>Vínculo Institucional</label>
              <select id="reg-level" onChange={(e) => setVinculo(e.currentTarget.value)}>
                <option value="">Selecione...</option>
                <option value={"1"}>Técnico Integrado</option>
                <option value={"2"}>Graduação (IC)</option>
                <option value={"3"}>Mestrado</option>
                <option value={"4"}>Doutorado</option>
                <option value={"5"}>Professor / Orientador</option>
                <option value={"6"}>Técnico de Laboratório</option>
              </select>
            </div>

            <div className="fg">
              <label>Senha (mín. 6 caracteres)</label>
              {span()}
              <div className="pass-wrap">
                <input
                  type="password"
                  id="reg-pass"
                  placeholder="••••••••"
                  onChange={(e)=>setSenha(e.currentTarget.value)}
                />
                <button
                  type="button"
                  className="pass-eye"
                  onClick={(event) => togglePass(event.currentTarget)}
                  tabIndex={-1}
                >
                  👁
                </button>
              </div>
            </div>

            <div className="fg">
              <label>Confirmar Senha</label>
              <div className="pass-wrap">
                <input
                  type="password"
                  id="reg-pass"
                  placeholder="••••••••"
                  onChange={(e)=>setConfSenha(e.currentTarget.value)}
                />
              </div>
            </div>

            <button
              className="btn btn-solid"
              style={{ width: '100%' }}
              onClick={manualReg}
            >
              Criar Conta
            </button>

            <div className="auth-switch">
              Já tem conta?{' '}
              <Link to={'/login'}>Faça Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;