// Hero.jsx

const HERO_IMAGES = [
  'assets/portfolio/laptop-board-fan.jpg',
  'assets/portfolio/pc-build-rtx.jpg',
  'assets/portfolio/laptop-deep-clean.jpg',
  'assets/portfolio/motherboard-thermal.jpg',
  'assets/portfolio/all-in-one-repair.jpg',
  'assets/portfolio/aorus-ryzen-build.jpg',
  'assets/portfolio/dell-aio-board.jpg',
  'assets/portfolio/dell-g5-laptop.jpg',
  'assets/portfolio/hp-laptop-internals.jpg',
  'assets/portfolio/laptop-repair-hp.jpg',
  'assets/portfolio/laptop-screen-disassembly.jpg',
  'assets/portfolio/macbook-windows.jpg',
];

const Hero = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrent(i => (i + 1) % HERO_IMAGES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="inicio" className="wt-hero" data-screen-label="Hero">
      <div className="wt-hero__grid-lines" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
      </div>
      <div className="wt-container wt-hero__inner">
        <div className="wt-hero__text">
          <img src="assets/logo-blue.png" alt="W Tech Informática" className="wt-hero__logo" />
          <h1>
            <em>Assistência Técnica em Goiânia</em> especializada em Conserto, Manutenção, Reparo de Notebook e Computador (Desktop e MacBook).
          </h1>
          <p className="wt-hero__body">
            Trabalhamos com todas marcas: Apple, Dell, Samsung, Lenovo, Asus, Acer, Positivo, Avell, HP, etc.
            Nossa loja física está localizada no Jardim América, em Goiânia-GO, porém atendemos à Domicílio/Empresa.
          </p>
          <div className="wt-hero__cta">
            <a
              href="https://wa.me/5562993291737"
              target="_blank"
              rel="noopener noreferrer"
              className="wt-btn wt-btn--primary"
            >
              <Icon name="whatsapp" size={18} />
              Chamar no WhatsApp
            </a>
            <a href="#servicos" className="wt-btn wt-btn--secondary">Ver serviços</a>
          </div>
        </div>

        <figure className="wt-hero__media">
          {HERO_IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Manutenção na bancada da W Tech"
              className={`wt-hero__slide${i === current ? ' wt-hero__slide--active' : ''}`}
            />
          ))}
        </figure>
      </div>
    </section>
  );
};

window.Hero = Hero;
