const Banner = () => {
  return (
    <>
      {/* Philosophy Section */}

      <section className="luxury-banner">

        <div className="container luxury-banner-grid">

          <div className="banner-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOhGkO1VWnTaKc5qtxxaPPILOwVrd76lvV3NX3ZVriA&s=10"
              alt=""
            />
          </div>

          <div className="banner-content">

            <p className="banner-tag">
              OUR PHILOSOPHY
            </p>

            <h2>
              Designed For
              Those Who Value
              Timeless Luxury
            </h2>

            <p>
              Every piece is carefully
              crafted to represent confidence,
              sophistication and modern
              elegance.
            </p>

            <button>
              DISCOVER MORE
            </button>

          </div>
        </div>
      </section>

      {/* Premium Features */}

      <section className="features-strip">

        <div className="container features-grid">

          <div className="feature-item">
            <h4>FREE SHIPPING</h4>
            <p>On premium orders</p>
          </div>

          <div className="feature-item">
            <h4>SECURE PAYMENT</h4>
            <p>100% protected checkout</p>
          </div>

          <div className="feature-item">
            <h4>PREMIUM QUALITY</h4>
            <p>Luxury craftsmanship</p>
          </div>

          <div className="feature-item">
            <h4>30-DAY RETURNS</h4>
            <p>Easy returns policy</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Banner;