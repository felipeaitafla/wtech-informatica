// Services.jsx — service cards (photo + title + desc + CTA) per design system

const SERVICES = [
  {
    num: '01',
    title: 'Formatação',
    img: 'assets/portfolio/laptop-deep-clean.jpg',
    body: 'Computador lento, travando ou com vírus? Fazemos a formatação completa, instalação do sistema operacional e dos programas do seu dia a dia. Quando possível, salvamos seus arquivos antes do procedimento.',
  },
  {
    num: '02',
    title: 'Troca de peças de notebook',
    img: 'assets/portfolio/laptop-screen-disassembly.jpg',
    body: 'Tela trincada, teclas que não respondem, bateria que não segura carga, dobradiça quebrada, carregador queimado. Trocamos peças originais ou compatíveis com qualidade testada em qualquer marca.',
  },
  {
    num: '03',
    title: 'Limpeza e pasta térmica',
    img: 'assets/portfolio/motherboard-thermal.jpg',
    body: 'Notebook esquentando demais, ventoinha barulhenta ou desligando sozinho durante jogos e reuniões? A limpeza interna e a troca da pasta térmica resolvem o superaquecimento e prolongam a vida útil.',
  },
  {
    num: '04',
    title: 'Reparo de dobradiça',
    img: 'assets/portfolio/hp-laptop-internals.jpg',
    body: 'Aquela dobradiça que estourou a carcaça ou que faz a tampa não fechar direito tem conserto, sim. Reforçamos a estrutura interna e devolvemos seu notebook firme, sem trocar a carcaça toda.',
  },
  {
    num: '05',
    title: 'Montagem de PC Gamer',
    img: 'assets/portfolio/pc-build-rtx.jpg',
    body: 'Montamos seu PC gamer com a configuração ideal para os jogos que você joga, dentro do orçamento que você tem. Ajudamos na escolha de processador, placa de vídeo, memória e gabinete.',
  },
  {
    num: '06',
    title: 'Instalação ou upgrade de SSD',
    img: 'assets/portfolio/aorus-ryzen-build.jpg',
    body: 'Troque o HD antigo por um SSD e veja o computador ligar em segundos. Migramos sistema, programas e arquivos do jeito que estavam — você não perde nada e ganha velocidade no mesmo dia.',
  },
  {
    num: '07',
    title: 'Reparo de placa-mãe',
    img: 'assets/portfolio/dell-aio-board.jpg',
    body: 'Soldagem de componentes, troca de capacitores, conserto de trilhas. Recuperamos placas-mãe de notebooks e desktops em casos que outras assistências consideram perda total.',
  },
  {
    num: '08',
    title: 'Problemas diversos',
    img: 'assets/portfolio/laptop-board-fan.jpg',
    body: 'PC que não liga, tela azul, notebook que liga mas não mostra imagem, lentidão extrema, travamentos, vírus. Fazemos diagnóstico técnico para identificar a causa real antes de propor qualquer reparo.',
  },
];

const Services = () => (
  <section id="servicos" className="wt-section wt-section--alt" data-screen-label="Services">
    <div className="wt-container">
      <header className="wt-section__head wt-section__head--center">

        <h2>Assistência técnica em Goiânia para notebook, desktop e MacBook.</h2>
        <p>
          Atendemos todas as marcas — Apple, Dell, Samsung, Lenovo, Asus, Acer,
          Positivo, Avell, HP e outras. Diagnóstico antes de qualquer reparo,
          orçamento aprovado por você.
        </p>
      </header>

      <div className="wt-services">
        {SERVICES.map(s => (
          <article key={s.num} className="wt-service-card">
            <div className="wt-service-card__photo">
              <img src={s.img} alt={s.title} loading="lazy" />
              <span className="wt-service-card__num">{s.num}</span>
            </div>
            <div className="wt-service-card__body">
              <h3 className="wt-service-card__title">{s.title}</h3>
              <p className="wt-service-card__desc">{s.body}</p>
              <a
                className="wt-service-card__cta"
                href="https://wa.me/5562993291737"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={16} onDark />
                Fale conosco
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="wt-services__cta">
        <div className="wt-services__cta-text">
          <strong>Não encontrou seu problema na lista?</strong>
          <span>Chame no WhatsApp e descreva o que está acontecendo. Respondemos em horário comercial.</span>
        </div>
        <a
          href="https://wa.me/5562993291737"
          target="_blank"
          rel="noopener noreferrer"
          className="wt-btn wt-btn--primary"
        >
          <Icon name="whatsapp" size={18} />
          (62) 99329-1737
        </a>
      </div>
    </div>
  </section>
);

window.Services = Services;
