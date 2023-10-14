import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts";
import './style/style.scss'
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    //Ruta general
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<RootLayout />} />
        <Route index element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
