export const Nav = () => {

  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
 
      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2 d-flex justify-content-center">
                  <a href="index.html" className="logo m-0 float-start">
                    WhatMoney?<span className="text-primary">.</span>
                  </a>
                  <img
                    src="../images/What-removebg-preview.png"
                    alt="What-Money"
                    style={{ height: "50px" }}
                  />
                </div>
                <div className="col-8 text-center ">
                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li className="active">
                      <a href="index.html">Inicio</a>
                    </li>

                    <li>
                      <a href="blog.html">Educación Financiera</a>
                    </li>
                    {/* <li><a href="services.html">Services</a></li> */}
                    <li>
                      <a href="about.html">Membresía</a>
                    </li>
                    <li>
                      <a href="contact.html">Contacto</a>
                    </li>
                  </ul>
                </div>
                <div className="col-2 text-end">
                  <a
                    href="#"
                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                  >
                    <span></span>
                  </a>

                  <a href="#" className="call-us d-flex align-items-center">
                    {/* <span className="icon-phone"></span> */}
                    <span>Iniciar Sesión</span>
                    <span style={{ marginLeft: "30px" }}>Registrarse</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      
    </>
  );
};
