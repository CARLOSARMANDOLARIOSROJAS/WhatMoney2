function App() {
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
						<div className="col-2">
							<a href="index.html" className="logo m-0 float-start">WhatMoney?<span className="text-primary">.</span></a>
						</div>
						<div className="col-8 text-center ">
							<ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
								<li className="active"><a href="index.html">Inicio</a></li>
								<li className="has-children">
									
									<ul className="dropdown">
										<li><a href="financing.html">Financing</a></li>
										<li><a href="single.html">Blog Single</a></li>
										<li><a href="case-study.html">Case Study Detail</a></li>
										<li><a href="#">Menu One</a></li>
										<li><a href="#">Menu Two</a></li>
										<li className="has-children">
											<a href="#">Dropdown</a>
											<ul className="dropdown">
												<li><a href="#">Sub Menu One</a></li>
												<li><a href="#">Sub Menu Two</a></li>
												<li><a href="#">Sub Menu Three</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a href="blog.html">Blog</a></li>
								{/* <li><a href="services.html">Services</a></li> */}
								<li><a href="about.html">Acerca de nosotros</a></li>
								<li><a href="contact.html">Contacto</a></li>
							</ul>
						</div>
						<div className="col-2 text-end">
							<a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
								<span></span>
							</a>

							<a href="#" className="call-us d-flex align-items-center">
								{/* <span className="icon-phone"></span> */}
								<span className="mr-4">Iniciar Sesión</span>
                <span>Registrarse</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

  <div className="hero overlay">
		<img src="images/blob.svg" alt="" className="img-fluid blob"/>
		<div className="container">
			<div className="row align-items-center justify-content-between pt-5">
				<div className="col-lg-6 text-center text-lg-start pe-lg-5">
					<h1 className="heading text-white mb-3" data-aos="fade-up">Smart banking for financial freedom.</h1>
					<p className="text-white mb-5" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					<div className="align-items-center mb-5 mm" data-aos="fade-up" data-aos-delay="200">
						<a href="contact.html" className="btn btn-outline-white-reverse me-4">Contact us</a>
						<a href="https://www.youtube.com/watch?v=Mb1zrW_zra4" className="text-white glightbox">Watch the video</a>
					</div>
				</div>
				<div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
					<div className="img-wrap">
						<img src="images/img-1.jpg" alt="Image" className="img-fluid rounded"/>
					</div>
				</div>
			</div>
		</div>
	</div>

    
    </>
  );
}

export default App;
