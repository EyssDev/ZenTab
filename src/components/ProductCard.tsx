import { motion } from "framer-motion"

function ProductCard({ product, addToCart }) {
  return (
<motion.article
  className="product-card"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.2 }}
>
          <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3>{product.name}</h3>
          <span className="price-tag">{product.price}€</span>
        </div>

        <p>{product.description}</p>

        <button className="add-btn" onClick={() => addToCart(product)}>
          Ajouter au panier
        </button>
      </div>
</motion.article>
  );
}

export default ProductCard;