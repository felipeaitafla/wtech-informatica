// Testimonial.jsx — video depoimento

const Testimonial = () => (
  <section className="wt-section" data-screen-label="Testimonial">
    <div className="wt-container">
      <div className="wt-testimonial">
        <button type="button" className="wt-testimonial__video" aria-label="Reproduzir depoimento em vídeo">
          <img src="assets/portfolio/dell-g5-laptop.webp" alt="" />
          <span className="wt-testimonial__play">
            <span className="wt-testimonial__play-btn">
              <Icon name="play" size={28} />
            </span>
          </span>
        </button>

        <div className="wt-testimonial__head">
          <h2>Quem confia na <span style={{ color: 'var(--accent)' }}>WTech</span> recomenda.</h2>
          <p>
            Veja o relato de quem chegou aqui com o equipamento "sem solução"
            e saiu usando como antes.
          </p>
          <div className="wt-testimonial__meta">
            <strong>Mais de 500 atendimentos</strong>
            <span>CLIENTES · GOIÂNIA E REGIÃO</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.Testimonial = Testimonial;
