function Home({ setPage }) {
  return (
    <section className="hero-card">
      <div className="hero-content">
        <p className="hero-kicker">Bienvenue dans votre espace bien-être</p>

        <h2>
          Une expérience relaxante,
          <br />
          élégante et sur mesure.
        </h2>

        <p className="hero-text">
          Découvrez notre sélection de cocktails, boissons fraîches et services
          premium pensés pour accompagner votre moment de détente.
        </p>

        <div className="hero-actions">
          <button className="primary-btn" onClick={() => setPage("menu")}>
            Découvrir la carte
          </button>

          <button className="secondary-btn">
            Services du spa
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-card">
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"
            alt="Cocktail premium"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;