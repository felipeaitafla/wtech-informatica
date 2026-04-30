// Footer.jsx

const Footer = () => (
  <footer className="wt-footer">
    <div className="wt-container wt-footer__inner">
      <div className="wt-footer__brand">
        <img src="assets/logo-white.png" alt="W Tech Informática" />
        <p>
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
      <div className="wt-footer__col">
        <h4>Serviços</h4>
        <ul>
          <li><a href="#servicos">Formatação</a></li>
          <li><a href="#servicos">Troca de peças</a></li>
          <li><a href="#servicos">Pasta térmica</a></li>
          <li><a href="#servicos">Montagem de PC</a></li>
          <li><a href="#servicos">Reparo de placa</a></li>
        </ul>
      </div>
      <div className="wt-footer__col">
        <h4>Empresa</h4>
        <ul>
          <li><a href="#sobre">Quem somos</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#empresas">Para empresas</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
      <div className="wt-footer__col">
        <h4>Contato</h4>
        <ul>
          <li><a href="https://wa.me/5562993291737" target="_blank" rel="noopener noreferrer">(62) 99329-1737</a></li>
          <li className="wt-footer__muted">R. C-139, 149 — Qd. 403</li>
          <li className="wt-footer__muted">Jardim América · Goiânia · GO</li>
          <li>Seg–Sex · 9h às 18h</li>
          <li className="wt-footer__muted">Sábado · 9h às 12h</li>
        </ul>
      </div>
    </div>
    <div className="wt-container wt-footer__bottom">
      <span>© 2026 W Tech Informática · Goiânia · GO</span>
      <span>Assistência técnica em informática</span>
    </div>
  </footer>
);

window.Footer = Footer;
