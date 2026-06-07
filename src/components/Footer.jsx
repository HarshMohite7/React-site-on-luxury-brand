const Footer = () => {
  return (
    <footer className="footer">

      <div className="newsletter">

        <h2>
          JOIN THE WORLD OF
          MODERN LUXURY
        </h2>

        <p>
          Get updates on exclusive collections,
          luxury releases and premium offers.
        </p>

        <div className="newsletter-input">

          <input
            type="email"
            placeholder="Your Email Address"
          />

          <button>
            SUBSCRIBE
          </button>

        </div>
      </div>

      <div className="footer-bottom">

        <h2 className="footer-logo">
          NORTH & NOBLE
        </h2>

        <ul>
          <li>Home</li>
          <li>Collections</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <p>
          © 2026 North & Noble.
          Crafted for luxury.
        </p>

      </div>
    </footer>
  );
};

export default Footer;