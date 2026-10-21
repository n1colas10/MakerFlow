import { useState } from "react"

import './style/App.css'

function App(){
  const [cont, setCont] = useState(0)

  return(
    <div>
      <h1>Olá mundo</h1>
      <button onClick={() => setCont(cont + 1)}>{cont}</button>
    </div>
  )
}

export default App