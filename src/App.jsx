import {BrowserRouter, Routes, Route} from "react-router-dom";
import { RootLayout} from "./layouts"

function App() {
  return (
    //Ruta general
    <BrowserRouter>
     <div className="site-mobile-menu site-navbar-target">
       <div className="site-mobile-menu-header">
         <div className="site-mobile-menu-close">
           <span className="icofont-close js-menu-toggle"></span>
         </div>
       </div>
       <div className="site-mobile-menu-body"></div>
     </div>
      <Routes>
        <Route path="/" element={<RootLayout/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
