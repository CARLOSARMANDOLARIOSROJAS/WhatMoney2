import {BrowserRouter, Routes, Route} from "react-router-dom";
import { RootLayout} from "./layouts"

function App() {
  return (
    //Ruta general
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<RootLayout/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
