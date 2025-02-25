
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaColaborador from './components/colaborador/listacolaborador/ListaColaborador'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80v]">
          <Routes>
          <Route path="/" element={<ListaColaborador />} />
          </Routes>
        </div> 
      </BrowserRouter>
    </>
  )
}

export default App
