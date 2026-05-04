// Hero.jsx

const HERO_IMAGES = [
  'assets/portfolio/laptop-board-fan.webp',
  'assets/portfolio/pc-build-rtx.webp',
  'assets/portfolio/laptop-deep-clean.webp',
  'assets/portfolio/motherboard-thermal.webp',
  'assets/portfolio/all-in-one-repair.webp',
  'assets/portfolio/aorus-ryzen-build.webp',
  'assets/portfolio/dell-aio-board.webp',
  'assets/portfolio/dell-g5-laptop.webp',
  'assets/portfolio/hp-laptop-internals.webp',
  'assets/portfolio/laptop-repair-hp.webp',
  'assets/portfolio/laptop-screen-disassembly.webp',
  'assets/portfolio/macbook-windows.webp',
];

const Hero = () => {
  const [current, setCurrent] = React.useState(0);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    let id = null;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        id = setInterval(() => setCurrent(i => (i + 1) % HERO_IMAGES.length), 2200);
      } else {
        clearInterval(id);
      }
    }, { threshold: 0.1 });

    if (section) observer.observe(section);
    return () => { clearInterval(id); observer.disconnect(); };
  }, []);

  return (
    <section id="inicio" className="wt-hero" data-screen-label="Hero" ref={sectionRef}>
      <div className="wt-hero__grid-lines" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
      </div>
      <div className="wt-container wt-hero__inner">
        <div className="wt-hero__text">
          <img src="assets/logo-white.png" alt="W Tech Informática" className="wt-hero__logo" />
          <h1>
            Assistência Técnica em Goiânia especializada em Conserto, Manutenção, Reparo de Notebook e Computador (Desktop e MacBook).
          </h1>
          <p className="wt-hero__body">
            Trabalhamos com todas marcas: Apple, Dell, Samsung, Lenovo, Asus, Acer, Positivo, Avell, HP, etc.
            <br></br>Nossa loja física está localizada no Jardim América, em Goiânia-GO, porém atendemos à Domicílio/Empresa.
          </p>
          <div className="wt-hero__cta">
            <a
              href="https://wa.me/5562993291737?text=Ol%C3%A1%2C%20WTech!"
              target="_blank"
              rel="noopener noreferrer"
              className="wt-btn wt-btn--primary"
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp
            </a>
            <a
             href="tel:+5562993291737"
             className="wt-btn wt-btn--secondary"
             >
              <Icon name="phone" size={18} />
              Ligação</a>
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
