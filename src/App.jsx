import { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Services from "./pages/Services"
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="app-shell">
      <video
  className="background-video"
  autoPlay
  muted
  loop
>
  <source src="/spa-video.mp4" type="video/mp4" />
</video>
      <div className="background-overlay"></div>

      <header className="topbar">
        <div>
          <p className="eyebrow">Spa Experience</p>
          <h1 className="brand-title">Aurora Wellness Lounge</h1>
        </div>

        <div className="topbar-right">
          <div className="cart-badge">Panier · {cart.length}</div>
        </div>
      </header>

      <nav className="nav">
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Accueil
        </button>

        <button
          className={page === "menu" ? "active" : ""}
          onClick={() => setPage("menu")}
        >
          Cocktails
        </button>

        <button
          className={page === "services" ? "active" : ""}
          onClick={() => setPage("services")}
        >
          Services
        </button>

        <button
          className={page === "cart" ? "active" : ""}
          onClick={() => setPage("cart")}
        >
          Panier
        </button>
      </nav>

      <main className="main-content">
        {page === "home" && <Home setPage={setPage} />}
        {page === "menu" && <Menu addToCart={addToCart} />}
        {page === "services" && <Services />}
        {page === "cart" && <Cart cart={cart} />}
      </main>
    </div>
  );
}

export default App;