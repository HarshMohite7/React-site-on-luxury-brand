const FeaturedProducts = () => {
  return (
    <section className="featured-section">

      <div className="container">

        <p className="featured-tag">
          HANDPICKED FOR YOU
        </p>

        <h2 className="featured-title">
          FEATURED COLLECTION
        </h2>

        <p className="featured-subtitle">
          Curated essentials crafted for
          luxury, confidence and timeless style.
        </p>

        <div className="products-grid">

          <div className="product-card">

            <div className="wishlist">
              ♡
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1XkNqjglvSZiilwDuPDnCVhCIyPRmS5uSA&s=10"
              alt=""
            />

            <div className="product-info">
              <h4>
                Luxury Wardrobe Collection
              </h4>

              <h5>₹4,999</h5>

              <button>
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="product-card">

            <div className="wishlist">
              ♡
            </div>

            <img
              src="https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />

            <div className="product-info">
              <h4>Luxury Brown Watch</h4>

              <h5>₹3,499</h5>

              <button>
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="product-card">

            <div className="wishlist">
              ♡
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9ZHWbSPCEjEi0GPEuw6Pclwws9xIHuLhYBzpjFLw-Q&s=10"
              alt=""
            />

            <div className="product-info">
              <h4>
                Luxury Leather Shoes
              </h4>

              <h5>₹2,999</h5>

              <button>
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="product-card">

            <div className="wishlist">
              ♡
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WJw0ZlEF2zhFYSBytKnzJSbfLDKC22PJ9dvctYJ_9A&s=10"
              alt=""
            />

            <div className="product-info">
              <h4>
                Luxury earrings
              </h4>

              <h5>₹3,299</h5>

              <button>
                ADD TO CART
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;