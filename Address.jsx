// Address.jsx — endereço, horários, mapa estilizado

const Address = () => (
  <section id="contato" className="wt-section wt-section--alt" data-screen-label="Address">
    <div className="wt-container">
      <header className="wt-section__head wt-section__head--center">
        <h2>Onde estamos.</h2>
        <p>
          Loja física no Jardim América. Também atendemos a domicílio ou na
          sua empresa em Goiânia e região metropolitana.
        </p>
      </header>

      <div className="wt-address">
        <div className="wt-address__info">
          <div className="wt-address__row">
            <Icon name="mapPin" size={22} />
            <div className="wt-address__row-flex">
              <div className="wt-address__row-label">Endereço da loja</div>
              <div className="wt-address__row-content">
                <strong>R. C-139, 149 — Qd. 403, Lt. 06</strong>
                <span>Jardim América, Goiânia — GO</span>
                <span>CEP 74275-080</span>
                <a
                  href="https://www.google.com/maps?cid=13618029844147851746&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=pt-BR&gl=BR&source=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Como chegar pelo Google Maps
                  <Icon name="arrowUpRight" size={14} accent />
                </a>
              </div>
            </div>
          </div>

          <div className="wt-address__row">
            <Icon name="clock" size={22} />
            <div className="wt-address__row-flex">
              <div className="wt-address__row-label">Horário de funcionamento</div>
              <div className="wt-address__row-content">
                <strong>Segunda a sexta · 9h às 18h</strong>
                <span>Sábado · 9h às 12h</span>
              </div>
            </div>
          </div>

          <div className="wt-address__row">
            <Icon name="phone" size={22} />
            <div className="wt-address__row-flex">
              <div className="wt-address__row-label">WhatsApp / Telefone</div>
              <div className="wt-address__row-content">
                <a href="https://wa.me/5562993291737?text=Ol%C3%A1%2C%20WTech!" target="_blank" rel="noopener noreferrer">
                  <strong>(62) 99329-1737</strong>
                </a>
                <span>Atendimento em horário comercial</span>
              </div>
            </div>
          </div>

          <div className="wt-address__row">
            <Icon name="instagram" size={22} />
            <div className="wt-address__row-flex">
              <div className="wt-address__row-label">Redes sociais</div>
              <div className="wt-address__row-content">
                <strong>@wtech_informatica</strong>
                <span>W Tech Informática</span>
              </div>
            </div>
          </div>
        </div>

        <div className="wt-address__map">
          <iframe
            className="wt-address__map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1528910148395!2d-49.2819419!3d-16.7192215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1ed527e0f37%3A0xbcfcf5fde919d1e2!2sW%20Tech%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1777559119426!5m2!1spt-BR!2sbr"
            title="W Tech Informática — Localização"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

window.Address = Address;
