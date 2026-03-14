import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Menu({ addToCart }) {
  return (
    <section className="menu-section">
      <div className="section-heading">
        <p className="section-kicker">Notre sélection</p>
        <h2>Cocktails & boissons signature</h2>
        <p>
          Des créations fraîches et raffinées, pensées pour une ambiance calme,
          douce et luxueuse.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;