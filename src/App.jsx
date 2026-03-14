import { useState } from "react";
import products from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <header className="header">
        <h1>Spa Lounge</h1>
        <p>Commandez vos cocktails et services</p>
      </header>

      <section className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price} €</strong>
            <button onClick={() => addToCart(product)}>
              Ajouter
            </button>
          </div>
        ))}
      </section>

      <section className="cart">
        <h2>Panier</h2>
        {cart.length === 0 ? (
          <p>Aucun article</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                {item.name} - {item.price} €
              </div>
            ))}
            <h3>Total : {total} €</h3>
          </>
        )}
      </section>
    </div>
  );
}

export default App;