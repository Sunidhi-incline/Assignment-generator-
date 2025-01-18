import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [test, setText] = useState("hello")

  return (
    <>
      <h1>Vite + Preact</h1>
      <h1>{test}</h1>
    </>
  )
}
