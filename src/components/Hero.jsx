const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-slider">
          <span>01</span>
          <span>02</span>
          <span>03</span>
        </div>

        <div className="hero-content">

          <p className="hero-tag">
            LUXURY FASHION HOUSE
          </p>

          <h1>
            TIMELESS STYLE.
            <br />
            <span>
              MODERN STANDARDS.
            </span>
          </h1>

          <p className="hero-description">
            Crafted for those who value
            quality over trends.
            Designed for life,
            confidence and quiet luxury.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              EXPLORE COLLECTION
            </button>

            <button className="secondary-btn">
              DISCOVER MORE
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;