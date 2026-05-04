// About.jsx — Quem Somos

const About = () => (
  <section id="sobre" className="wt-section" data-screen-label="About">
    <div className="wt-container">
      <div className="wt-about">
        <figure className="wt-about__media">
          <img src="assets/portfolio/laptop-repair-hp.webp" alt="Bancada de reparo da W Tech Informática" />
          <div className="wt-about__stat">
            <strong>+6</strong>
            <span>ANOS DE OFICINA</span>
          </div>
        </figure>

        <div className="wt-about__text">
          <h2>Mais de 6 anos consertando computadores em Goiânia.</h2>
          <p>
            A W Tech Informática nasceu da paixão por tecnologia e do incômodo de ver
            tanta gente jogando computador fora por problemas que tinham solução.
            Há mais de 6 anos, atendemos clientes em Goiânia e região — do estudante
            que precisa do notebook para a faculdade ao escritório que não pode ficar parado.
          </p>
          <p>
            Trabalhamos com transparência em cada etapa: antes de qualquer reparo,
            você recebe o diagnóstico e o orçamento. Se autorizar, a gente executa.
            Se não, devolvemos seu equipamento e explicamos o que encontramos.
          </p>

          <ul className="wt-about__highlights">
            <li>
              <Icon name="search" size={20} accent />
              <div>
                <strong>Diagnóstico primeiro</strong>
                <span>Antes de cobrar qualquer coisa, identificamos a causa real.</span>
              </div>
            </li>
            <li>
              <Icon name="check" size={20} accent />
              <div>
                <strong>Orçamento aprovado</strong>
                <span>Só executamos depois que você autoriza por escrito.</span>
              </div>
            </li>
            <li>
              <Icon name="truck" size={20} accent />
              <div>
                <strong>Atendimento a domicílio</strong>
                <span>Vamos até sua casa ou empresa em toda Goiânia.</span>
              </div>
            </li>
            <li>
              <Icon name="shield" size={20} accent />
              <div>
                <strong>Transparência total</strong>
                <span>Cada peça trocada e cada serviço explicado em detalhe.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

window.About = About;
