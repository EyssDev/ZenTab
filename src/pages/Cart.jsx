function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart-section">
      <div className="section-heading">
        <p className="section-kicker">Votre sélection</p>
        <h2>Panier</h2>
      </div>

      <div className="cart-card">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Votre panier est vide</h3>
            <p>
              Ajoutez quelques cocktails ou boissons pour commencer votre
              expérience.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div className="cart-item" key={`${item.id}-${index}`}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                  </div>

                  <span>{item.price}€</span>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <h3>Total</h3>
              <h3>{total}€</h3>
            </div>

            <button className="primary-btn full-width">
              Confirmer la commande
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;