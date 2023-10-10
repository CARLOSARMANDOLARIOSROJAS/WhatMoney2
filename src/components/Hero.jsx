
export const Hero = () => {
  return (
    <div className="hero overlay">
      <img src="images/blob.svg" alt="" className="img-fluid blob" />
      <div className="container">
        <div className="row align-items-center justify-content-between pt-5">
          <div className="col-lg-6 text-center text-lg-start pe-lg-5">
            <h1 className="heading text-white mb-3" data-aos="fade-up">
              Smart banking for financial freedom.
            </h1>
            <p
              className="text-white mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div
              className="align-items-center mb-5 mm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="contact.html"
                className="btn btn-outline-white-reverse me-4"
              >
                Contact us
              </a>
              <a
                href="https://www.youtube.com/watch?v=Mb1zrW_zra4"
                className="text-white glightbox"
              >
                Watch the video
              </a>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="img-wrap">
              <img
                src="images/img-1.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
