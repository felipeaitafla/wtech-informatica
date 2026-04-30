// Business.jsx — dark B2B section

const B2B_ITEMS = [
  { num: '01', title: 'Manutenção preventiva e corretiva de notebooks, desktops e servidores' },
  { num: '02', title: 'Atendimento emergencial quando alguma máquina para' },
  { num: '03', title: 'Instalação e configuração de equipamentos novos' },
  { num: '04', title: 'Backup, formatação e migração de sistemas' },
  { num: '05', title: 'Suporte recorrente para empresas que precisam manter o parque de TI funcionando' },
];

const Business = () => (
  <section id="empresas" className="wt-section wt-section--dark" data-screen-label="Empresas">
    <div className="wt-container">
      <div className="wt-business">
        <div className="wt-business__head">
          <h2>Suporte de TI para sua empresa em Goiânia.</h2>
          <p>
            Computador parado é prejuízo. A W Tech atende empresas, escritórios,
            clínicas, lojas e consultórios em Goiânia. Vamos até o seu endereço
            e, sempre que possível, resolvemos no local. Quando o reparo exige
            bancada, levamos a máquina para a oficina e devolvemos funcionando.
          </p>


          <div className="wt-business__cta">
            <a
              href="https://wa.me/5562993291737"
              target="_blank"
              rel="noopener noreferrer"
              className="wt-btn wt-btn--primary"
            >
              <Icon name="whatsapp" size={18} />
              Falar com um técnico
            </a>
          </div>
        </div>

        <ul className="wt-business__list">
          {B2B_ITEMS.map(b => (
            <li key={b.num}>
              <span className="wt-business__num">{b.num}</span>
              <h3>{b.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

window.Business = Business;
