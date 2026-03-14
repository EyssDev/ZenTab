:root {
  --bg: #f6f1e8;
  --bg-soft: #efe7da;
  --card: rgba(255, 255, 255, 0.62);
  --card-solid: #fffdf9;
  --text: #1e1a17;
  --muted: #6f665f;
  --gold: #b8956a;
  --gold-dark: #9f7b50;
  --line: rgba(86, 66, 44, 0.1);
  --shadow: 0 20px 60px rgba(64, 45, 24, 0.12);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(191, 163, 122, 0.18), transparent 30%),
    radial-gradient(circle at bottom right, rgba(168, 181, 162, 0.2), transparent 25%),
    linear-gradient(180deg, #f8f3eb 0%, #f2ebe1 100%);
  color: var(--text);
}

button {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
  padding: 28px;
  position: relative;
}

.background-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  backdrop-filter: saturate(110%);
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  gap: 20px;
}

.eyebrow {
  margin: 0 0 6px;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-dark);
}

.brand-title {
  margin: 0;
  font-size: 30px;
  font-weight: 600;
}

.cart-badge {
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(16px);
  border-radius: 999px;
  padding: 12px 18px;
  box-shadow: var(--shadow);
  color: var(--text);
}

.nav {
  display: inline-flex;
  gap: 10px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow: var(--shadow);
  margin-bottom: 30px;
}

.nav button {
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 14px 22px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.nav button.active,
.nav button:hover {
  background: linear-gradient(135deg, var(--gold) 0%, #cfb087 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(184, 149, 106, 0.35);
}

.main-content {
  margin-top: 8px;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
  align-items: center;
  background: rgba(255, 252, 247, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(18px);
  border-radius: 32px;
  padding: 34px;
  box-shadow: var(--shadow);
}

.hero-kicker,
.section-kicker {
  color: var(--gold-dark);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  margin: 0 0 14px;
}

.hero-content h2 {
  margin: 0;
  font-size: 48px;
  line-height: 1.08;
  font-weight: 600;
  max-width: 700px;
}

.hero-text {
  margin-top: 18px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 620px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.primary-btn,
.secondary-btn,
.add-btn {
  border: none;
  cursor: pointer;
  border-radius: 999px;
  padding: 14px 22px;
  transition: transform 0.2s ease, box-shadow 0.25s ease, opacity 0.25s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--gold) 0%, #d0af84 100%);
  color: white;
  box-shadow: 0 14px 34px rgba(184, 149, 106, 0.28);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.75);
  color: var(--text);
  border: 1px solid rgba(86, 66, 44, 0.08);
}

.primary-btn:hover,
.secondary-btn:hover,
.add-btn:hover {
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.hero-image-card {
  width: 100%;
  max-width: 440px;
  background: rgba(255, 255, 255, 0.32);
  border-radius: 28px;
  padding: 12px;
  box-shadow: var(--shadow);
}

.hero-image-card img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 22px;
  display: block;
}

.menu-section,
.cart-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-heading h2 {
  margin: 0;
  font-size: 34px;
  font-weight: 600;
}

.section-heading p:last-child {
  max-width: 700px;
  color: var(--muted);
  line-height: 1.7;
  margin-top: 10px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 24px;
}

.product-card {
  background: var(--card);
  border: 1px solid rgba(255, 255, 255, 0.58);
  backdrop-filter: blur(14px);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(64, 45, 24, 0.16);
}

.product-image-wrapper {
  padding: 12px 12px 0;
}

.product-image-wrapper img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}

.product-content {
  padding: 18px 18px 20px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  margin-bottom: 10px;
}

.product-header h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
}

.product-content p {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 18px;
}

.price-tag {
  background: rgba(184, 149, 106, 0.14);
  color: var(--gold-dark);
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 600;
  white-space: nowrap;
}

.add-btn {
  width: 100%;
  background: #1f1a17;
  color: white;
  padding: 14px 18px;
}

.cart-card {
  background: rgba(255, 252, 247, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.58);
  backdrop-filter: blur(18px);
  border-radius: 28px;
  padding: 24px;
  box-shadow: var(--shadow);
  max-width: 860px;
}

.empty-cart h3 {
  margin-top: 0;
}

.empty-cart p,
.cart-item p {
  color: var(--muted);
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 22px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}

.cart-item strong {
  display: block;
  margin-bottom: 6px;
}

.cart-item p {
  margin: 0;
  max-width: 520px;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 6px;
  margin-bottom: 18px;
}

.full-width {
  width: 100%;
}

@media (max-width: 980px) {
  .hero-card {
    grid-template-columns: 1fr;
  }

  .hero-content h2 {
    font-size: 38px;
  }

  .hero-image-card img {
    height: 360px;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding: 18px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .brand-title {
    font-size: 24px;
  }

  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-radius: 24px;
  }

  .nav button {
    flex: 1;
    padding: 12px 10px;
    font-size: 14px;
  }

  .hero-card {
    padding: 22px;
    border-radius: 24px;
  }

  .hero-content h2 {
    font-size: 30px;
  }

  .section-heading h2 {
    font-size: 28px;
  }
}