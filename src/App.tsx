import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListaColaborador from './components/colaborador/listacolaborador/ListaColaborador';
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listacolaborador" element={<ListaColaborador />} />
            <Route path="/sobre" element={<Sobre />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;