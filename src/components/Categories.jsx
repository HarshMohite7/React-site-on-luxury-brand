const Categories = () => {
  return (
    <section className="categories-section">

      <div className="container">

        <div className="category-grid">

          <div className="category-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJkucRHUJUyQ7Rv18-ofyJmVrR-v67JTgShnUJt4C2ei424ufyBKUj1Pz&s=10"
              alt=""
            />

            <div className="category-content">
              <h3>MEN</h3>
              <span>EXPLORE NOW →</span>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj65IGkXVzFGrjtjaxmJOXD-KdaSe1KgaE_UhU2NFaww&s=10"
              alt=""
            />

            <div className="category-content">
              <h3>WOMEN</h3>
              <span>EXPLORE NOW →</span>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-WX788Ir7e2Pr9E52kV1EOUxcVvCCm69ULf-I31xCA&s=10"
              alt=""
            />

            <div className="category-content">
              <h3>ACCESSORIES</h3>
              <span>EXPLORE NOW →</span>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9W2nsN_iEmIXYdSQ_q9e-cjsSQ3Pwi3G1MRjMJGqAg&s=10"
              alt=""
            />

            <div className="category-content">
              <h3>FOOTWEAR</h3>
              <span>EXPLORE NOW →</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;