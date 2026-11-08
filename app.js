:root {
  --rose-poudre: #E8C6CC;
  --beige-clair: #F5EFE6;
  --blanc-casse: #FFFDF9;
  --taupe: #A99587;
  --texte: #514740;
  --rose-fonce: #d9a9b0;
  --blanc: #ffffff;
  --border: rgba(81, 71, 64, 0.14);
  --shadow: 0 24px 60px rgba(102, 74, 65, 0.12);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--blanc-casse);
  color: var(--texte);
  line-height: 1.6;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
button, input, textarea { font: inherit; }
p, ul, h1, h2, h3, h4 { margin-top: 0; }
h1, h2, h3, h4 {
  font-family: 'Cormorant Garamond', serif;
  line-height: 1.1;
  color: var(--texte);
}
h1 { font-size: clamp(2.6rem, 5vw, 4.4rem); margin-bottom: 1rem; }
h2 { font-size: clamp(2.1rem, 3vw, 3rem); margin-bottom: 1rem; }
.container { width: min(1120px, calc(100% - 2rem)); margin: 0 auto; }
.section { padding: 5rem 0; }
.section-soft { background: linear-gradient(180deg, rgba(232, 198, 204, 0.15), rgba(245, 239, 230, 0.5)); }
.narrow { max-width: 760px; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(255, 253, 249, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 86px;
  gap: 1rem;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 700;
  font-size: 1.15rem;
}
.brand-logo { width: 52px; height: 52px; }
.main-nav {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.main-nav a {
  color: var(--texte);
  font-size: 0.95rem;
  transition: opacity 0.2s ease;
}
.main-nav a:hover,
.main-nav a.active { opacity: 1; color: var(--taupe); }
.nav-cta {
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: var(--rose-poudre);
  color: var(--texte);
  font-weight: 600;
}
.hero { padding: 4.5rem 0 5rem; }
.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 2.4rem;
}
.eyebrow {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--taupe);
  margin-bottom: 1rem;
}
.lead { font-size: 1.08rem; max-width: 640px; color: rgba(81, 71, 64, 0.92); }
.sublead { font-size: 1rem; color: rgba(81, 71, 64, 0.83); }
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.6rem;
}
.btn {
  border: 0;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary {
  background: linear-gradient(135deg, var(--rose-poudre), var(--rose-fonce));
  color: var(--texte);
  box-shadow: 0 12px 24px rgba(217, 169, 176, 0.26);
}
.btn-secondary { background: var(--beige-clair); color: var(--texte); }
.btn-light {
  background: var(--blanc);
  color: var(--texte);
  border: 1px solid var(--border);
}
.btn-small { padding: 0.6rem 1rem; }
.full { width: 100%; }
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 440px;
}
.card-glow {
  position: absolute;
  inset: 10% 8% 18% 8%;
  border-radius: 2rem;
  background: linear-gradient(135deg, rgba(232, 198, 204, 0.48), rgba(245, 239, 230, 0.9));
  filter: blur(10px);
}
.portrait-panel {
  position: relative;
  width: min(420px, 100%);
  height: 460px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(245,239,230,0.75));
  border: 1px solid rgba(169, 149, 135, 0.2);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.portrait-orb {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(232, 198, 204, 0.9), rgba(169, 149, 135, 0.25));
}
.orb-1 { width: 250px; height: 250px; right: -26px; top: 30px; }
.orb-2 {
  width: 180px; height: 180px; left: -28px; bottom: 12px;
  background: linear-gradient(135deg, rgba(245,239,230,0.9), rgba(232,198,204,0.72));
}
.portrait-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2));
  background-size: 100% 60px;
  opacity: 0.42;
}
.portrait-content {
  position: absolute;
  inset: auto 2rem 2rem 2rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(81,71,64,0.08);
  border-radius: 18px;
  background: rgba(255,255,255,0.4);
  backdrop-filter: blur(8px);
}
.portrait-content span {
  display: block;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--taupe);
}
.portrait-content strong {
  font-size: 2rem;
  font-family: 'Cormorant Garamond', serif;
}
.section-heading { margin-bottom: 2.2rem; }
.section-heading.center { text-align: center; }
.three-col, .service-list, .pricing-grid, .product-grid, .dashboard-grid { display: grid; gap: 1.5rem; }
.three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.info-card, .detail-card, .pricing-card, .product-card, .dashboard-card, .contact-panel, .social-panel, .auth-box {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(81,71,64,0.04);
}
.info-card, .pricing-card, .product-card, .dashboard-card, .auth-box, .contact-panel, .social-panel { padding: 1.6rem; }
.info-card .icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--beige-clair);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.service-list { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.service-item {
  display: block;
  padding: 1.6rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.service-item:hover { transform: translateY(-2px); border-color: rgba(169,149,135,0.5); }
.split-block, .two-col, .contact-layout, .admin-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}
.check-list {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 0;
  display: grid;
  gap: 0.8rem;
}
.check-list li { position: relative; padding-left: 1.7rem; }
.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--taupe);
  font-weight: 700;
}
.large-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.mini-panel { display: flex; justify-content: center; }
.mini-panel-inner {
  width: min(100%, 420px);
  background: linear-gradient(135deg, rgba(232,198,204,0.52), rgba(245,239,230,0.88));
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: var(--shadow);
}
.mini-panel-inner p, .mini-panel-inner strong { display: block; }
.mini-panel-inner strong {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-family: 'Cormorant Garamond', serif;
  margin: 0.4rem 0 1rem;
}
.page-hero { padding: 4rem 0 2rem; text-align: center; }
.service-grid, .product-grid, .pricing-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.detail-card, .pricing-card, .product-card { padding: 1.6rem; }
.pill {
  display: inline-block;
  background: var(--beige-clair);
  color: var(--taupe);
  padding: 0.42rem 0.75rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}
.detail-card ul, .dashboard-card ul {
  padding-left: 1.1rem;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}
.disclaimer-box {
  text-align: center;
  padding: 2rem 1.2rem;
  border-radius: 28px;
  background: rgba(255,255,255,0.58);
  border: 1px solid var(--border);
}
.center { justify-content: center; }
.centered-copy { text-align: center; max-width: 700px; margin: 0 auto; }
.price {
  font-size: clamp(2rem, 3vw, 2.7rem);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  margin: 0.8rem 0;
}
.highlighted { background: linear-gradient(180deg, rgba(232,198,204,0.25), rgba(255,255,255,0.82)); }
.product-card button, .btn { margin-top: 1rem; }
.contact-layout, .admin-layout { align-items: start; }
.styled-form { display: grid; gap: 1rem; }
.styled-form label {
  display: grid;
  gap: 0.45rem;
  font-weight: 600;
  color: var(--texte);
}
.styled-form input, .styled-form textarea {
  border: 1px solid rgba(169,149,135,0.4);
  background: rgba(255,255,255,0.7);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  color: var(--texte);
}
.form-note, .form-success { margin-top: 1rem; font-size: 0.9rem; color: rgba(81,71,64,0.8); }
.hidden { display: none !important; }
.form-success { color: #2d6a4f; font-weight: 600; }
.social-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}
.auth-box, .contact-panel, .social-panel { min-height: 100%; }
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}
.dashboard-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.progress-bar {
  height: 12px;
  border-radius: 999px;
  background: var(--beige-clair);
  overflow: hidden;
  margin: 1rem 0 0.5rem;
}
.progress-bar span {
  display: block;
  height: 100%;
  background: linear-gradient(135deg, var(--rose-fonce), var(--rose-poudre));
  border-radius: inherit;
}
.site-footer {
  background: #f2eae2;
  border-top: 1px solid var(--border);
  padding: 3rem 0 1.2rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 2rem;
}
.site-footer h4 { font-size: 1.5rem; margin-bottom: 0.8rem; }
.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}
.footer-bottom {
  margin-top: 2rem;
  border-top: 1px solid rgba(81,71,64,0.14);
  padding-top: 1rem;
  text-align: center;
}
@media (max-width: 900px) {
  .hero-grid, .split-block, .two-col, .service-grid, .product-grid, .pricing-grid, .three-col, .footer-grid, .contact-layout, .admin-layout, .dashboard-grid { grid-template-columns: 1fr; }
  .service-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .large-list { grid-template-columns: 1fr; }
}
@media (max-width: 760px) {
  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 1rem;
    right: 1rem;
    background: rgba(255,255,255,0.98);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 1rem;
    box-shadow: var(--shadow);
  }
  .main-nav.open {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .menu-toggle {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 42px;
    height: 42px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255,255,255,0.8);
    padding: 0.45rem;
  }
  .menu-toggle span {
    display: block;
    height: 2px;
    background: var(--texte);
    border-radius: 999px;
  }
  .service-list { grid-template-columns: 1fr; }
}
@media (min-width: 761px) { .menu-toggle { display: none; } }
