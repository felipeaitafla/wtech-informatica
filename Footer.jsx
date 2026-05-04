// Footer.jsx

const Footer = () => (
  <footer className="wt-footer">
    <div className="wt-container wt-footer__inner">
      <img src="assets/logo-white.png" alt="W Tech Informática" className="wt-footer__logo" />
      <p className="wt-footer__about">
        Assistência técnica de notebooks, desktops e MacBooks em Goiânia.
        Atendimento na loja, a domicílio e em empresas.
      </p>
      <div className="wt-footer__social">
        <a href="https://instagram.com/wtech_informatica" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Icon name="instagram" size={18} onDark />
        </a>
        <a href="https://facebook.com/wtechinformatica01" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Icon name="facebook" size={18} onDark />
        </a>
        <a href="https://wa.me/5562993291737" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <Icon name="whatsapp" size={18} onDark />
        </a>
      </div>
    </div>

    <div className="wt-container wt-footer__bottom">
      <span>© 2026 W Tech Informática · Goiânia · GO</span>
      <a href="/politica-de-privacidade.html">Política de privacidade</a>
    </div>

    <div className="wt-footer__agency">
      Site desenvolvido por JP Marketing Digital
    </div>
  </footer>
);

window.Footer = Footer;
