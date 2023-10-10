export const Nav = () => {
  return (
    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <a href="index.html" className="logo m-0 float-start">
                  WhatMoney?<span className="text-primary">.</span>
                </a>
              </div>
              <div className="col-8 text-center ">
                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                  <li className="active">
                    <a href="index.html">Inicio</a>
                  </li>
                  <li className="has-children">
                    <ul className="dropdown">
                      <li>
                        <a href="financing.html">Financing</a>
                      </li>
                      <li>
                        <a href="single.html">Blog Single</a>
                      </li>
                      <li>
                        <a href="case-study.html">Case Study Detail</a>
                      </li>
                      <li>
                        <a href="#">Menu One</a>
                      </li>
                      <li>
                        <a href="#">Menu Two</a>
                      </li>
                      <li className="has-children">
                        <a href="#">Dropdown</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Sub Menu One</a>
                          </li>
                          <li>
                            <a href="#">Sub Menu Two</a>
                          </li>
                          <li>
                            <a href="#">Sub Menu Three</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  {/* <li><a href="services.html">Services</a></li> */}
                  <li>
                    <a href="about.html">Acerca de nosotros</a>
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
  );
};
