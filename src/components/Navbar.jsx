import { FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="top-strip">
        ✦ FREE SHIPPING ON ORDERS ABOVE ₹4999
        <span>|</span>
        EASY 30-DAY RETURNS
      </div>

      <nav className="navbar">
        <div className="container nav-container">

          <h2 className="logo">
            NORTH & NOBLE
          </h2>

          <ul className="nav-links">
            <li className="active">HOME</li>
            <li>COLLECTIONS</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>ACCESSORIES</li>
            <li>ABOUT</li>
          </ul>

          <div className="nav-icons">
            <FiSearch />
            <FiHeart />
            <FiShoppingBag />
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;