// Header.jsx — fixed top nav

const Header = ({ activeSection = 'inicio', onNav }) => {
  const items = [
    { id: 'servicos',   label: 'Serviços' },
    { id: 'sobre',      label: 'Quem somos' },
    { id: 'portfolio',  label: 'Portfólio' },
    { id: 'empresas',   label: 'Empresas' },
    { id: 'contato',    label: 'Contato' },
  ];
  return (
    <header className="wt-header">
      <div className="wt-container wt-header__inner">
        <a href="#inicio" className="wt-header__logo" onClick={(e) => { e.preventDefault(); onNav?.('inicio'); }}>
          <img src="assets/logo-blue.png" alt="W Tech Informática" />
        </a>
        <nav className="wt-header__nav">
          {items.map(it => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`wt-header__link ${activeSection === it.id ? 'is-active' : ''}`}
              onClick={(e) => { e.preventDefault(); onNav?.(it.id); }}
            >{it.label}</a>
          ))}
        </nav>
        <a
          href="https://wa.me/5562993291737"
          target="_blank"
          rel="noopener noreferrer"
          className="wt-btn wt-btn--primary wt-btn--sm"
        >
          <Icon name="whatsapp" size={16} />
          (62) 99329-1737
        </a>
      </div>
    </header>
  );
};

window.Header = Header;
