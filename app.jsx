// app.jsx — assemble landing page

const { useState, useEffect } = React;

const App = () => {
  const [active, setActive] = useState('inicio');

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['inicio', 'servicos', 'sobre', 'portfolio', 'empresas', 'contato'];
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = 'inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Reviews />
        <Testimonial />
        <Services />
        <About />
        <Portfolio />
        <Business />
        <Address />
      </main>
      <Footer />
      <a
        className="wt-fab"
        href="https://wa.me/5562993291737?text=Ol%C3%A1%2C%20WTech!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
      >
        <Icon name="whatsapp" size={26} onDark />
      </a>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
