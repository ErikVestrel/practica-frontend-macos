import { useState } from 'react'
import './App.css'

function App() {
const [buttonColor, setButtonColor] = useState(false)
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <section className="max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <p className="mb-2 text-sm font-semibold text-blue-600">
          Mi entorno de desarrollo
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          ¡Hola, Mac mini M4!
        </h1>

        <p className="mt-4 text-slate-600">
          React, TypeScript, Vite y Tailwind CSS están listos para trabajar.
        </p>

        <button className={`mt-6 rounded-lg  px-5 py-3 font-medium text-white  ${buttonColor? 'bg-amber-600 hover:bg-amber-800': 'bg-blue-600 hover:bg-blue-800'}`}
        onClick={()=>{setButtonColor(!buttonColor)}}>
          Mi primer botón
          
        </button>
      </section>
    </main>
  )
}

export default App
