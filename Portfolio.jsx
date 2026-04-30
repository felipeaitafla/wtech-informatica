// Portfolio.jsx — auto-scrolling full-width carousel

const PORTFOLIO_ITEMS = [
  { src: 'assets/portfolio/pc-build-rtx.jpg',              alt: 'PC gamer RTX + AIO' },
  { src: 'assets/portfolio/laptop-deep-clean.jpg',         alt: 'Limpeza interna Lenovo' },
  { src: 'assets/portfolio/motherboard-thermal.jpg',       alt: 'Pasta térmica CPU' },
  { src: 'assets/portfolio/laptop-screen-disassembly.jpg', alt: 'Troca de tela LCD' },
  { src: 'assets/portfolio/all-in-one-repair.jpg',         alt: 'All-in-one diagnóstico' },
  { src: 'assets/portfolio/laptop-board-fan.jpg',          alt: 'Cooler + placa notebook' },
  { src: 'assets/portfolio/aorus-ryzen-build.jpg',         alt: 'AORUS Ryzen NVMe' },
  { src: 'assets/portfolio/macbook-windows.jpg',           alt: 'MacBook diagnóstico' },
  { src: 'assets/portfolio/dell-aio-board.jpg',            alt: 'Dell AIO placa-mãe' },
  { src: 'assets/portfolio/hp-laptop-internals.jpg',       alt: 'HP interno completo' },
];

const Portfolio = () => {
  const items = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS];

  return (
    <section id="portfolio" className="wt-section wt-section--alt" data-screen-label="Portfolio">
      <div className="wt-container">
        <header className="wt-section__head wt-section__head--center">
          <h2>Veja o nosso trabalho de perto.</h2>
          <p>Portfólio em fotos e vídeos.</p>
        </header>
      </div>

      <div className="wt-portfolio">
        <div className="wt-portfolio__track">
          {items.map((it, i) => (
            <div key={i} className="wt-portfolio__item">
              <img src={it.src} alt={it.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="wt-container">
        <div className="wt-portfolio__videos">
          {[
            { thumb: 'assets/portfolio/video-thumb-1.webp', label: 'Reproduzir vídeo 1' },
            { thumb: 'assets/portfolio/video-thumb-2.webp', label: 'Reproduzir vídeo 2' },
            { thumb: 'assets/portfolio/video-thumb-3.webp', label: 'Reproduzir vídeo 3' },
          ].map((v, i) => (
            <button key={i} type="button" className="wt-portfolio__video" aria-label={v.label}>
              <img src={v.thumb} alt="" loading="lazy" />
              <span className="wt-portfolio__play">
                <span className="wt-portfolio__play-btn">
                  <Icon name="play" size={26} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Portfolio = Portfolio;
