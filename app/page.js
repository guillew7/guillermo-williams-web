export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="wrap header-inner">
          <div className="brand">
            <div className="brand-name">Lic. Guillermo Williams</div>
            <div className="brand-sub">
              Psicólogo · M.N. 67758 – M.P. 86605
            </div>
          </div>

          <nav className="nav">
            <a href="#sobre">Sobre mí</a>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#faq">Preguntas frecuentes</a>
            <a href="https://wa.me/5491158277881" className="nav-cta">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy" style={{ maxWidth: 680 }}>
            <div className="eyebrow">Psicoterapia online</div>

            <h1>
              Sabés que algo te está afectando, pero no siempre es fácil entenderlo o cambiarlo.
            </h1>

            <p className="hero-text">
              Pensás demasiado, te cuesta desconectar o hay situaciones que se repiten y no terminás de ordenar.
            </p>

            <p className="hero-text">
              No es falta de voluntad. A muchas personas les pasa cuando vienen sosteniendo lo mismo durante mucho tiempo.
            </p>

            <div className="hero-actions">
              <a href="https://wa.me/5491158277881" className="btn btn-primary">
                Escribirme por WhatsApp
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Hacer una consulta
              </a>
            </div>

            <div className="hero-notes">
              <span>Atención online</span>
              <span>Primera entrevista de orientación</span>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICACIÓN */}
      <section className="section section-soft">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Motivos de consulta</div>
            <h2>Puede que te esté pasando algo de esto</h2>

            <p className="section-text">
              No siempre es una crisis clara. A veces es una acumulación de cosas
              que se vuelven difíciles de sostener.
            </p>

            <p className="section-text">
              El espacio terapéutico permite poner en palabras lo que pasa,
              entenderlo y empezar a trabajarlo con una dirección clara.
            </p>
          </div>

          <div className="issues-grid">
            <div className="issue">
              Pensamientos que no paran o dificultad para desconectar
            </div>
            <div className="issue">
              Vínculos que generan desgaste, confusión o malestar
            </div>
            <div className="issue">
              Situaciones que se repiten y no sabés cómo cambiar
            </div>
            <div className="issue">
              Sensación de estar trabado o sin rumbo
            </div>
            <div className="issue">
              Angustia difícil de explicar
            </div>
            <div className="issue">
              Dificultad para sostener cambios en el tiempo
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre" className="section">
        <div className="wrap two-col">
          <div className="about-card">
            <img
              src="https://via.placeholder.com/400x500"
              alt="Lic. Guillermo Williams"
              className="about-photo"
            />

            <div className="about-card-body">
              <div className="about-name">Lic. Guillermo Williams</div>

              <div className="about-meta">
                Psicólogo · M.N. 67758 – M.P. 86605
              </div>

              <div style={{ marginTop: 6, fontSize: 14, color: "#6b7280" }}>
                +10 años de experiencia en salud mental
              </div>

              <p className="about-mini">
                Psicoterapia online para adultos, con una forma de trabajo clara, cuidada y orientada a que el proceso resulte útil.
              </p>
            </div>
          </div>

          <div className="content-col">
            <p>
              Soy psicólogo formado en la Universidad de Buenos Aires y trabajo desde un enfoque integrador.
            </p>

            <p>
              Trabajo con personas a las que les está pasando algo que no terminan de entender o de resolver, y que puede aparecer de distintas formas.
            </p>

            <p>
              Mi forma de trabajar no es solo escuchar. La idea es que el espacio sirva para entender lo que te pasa, ordenarlo y empezar a producir cambios.
            </p>

            <p>
              Busco que el proceso sea claro, con intercambio y devolución. Que no quede en algo enigmático, sino que tenga sentido y resulte útil.
            </p>

            <div className="pillars">
              <div className="pillar">
                <div className="mini-label">Formación</div>
                <p>Psicólogo (UBA)</p>
              </div>
              <div className="pillar">
                <div className="mini-label">Enfoque</div>
                <p>Integrativo</p>
              </div>
              <div className="pillar">
                <div className="mini-label">Trabajo</div>
                <p>Claro, con dirección y devolución</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Servicios</div>
            <h2>
              Un espacio para trabajar lo que te pasa, no solo hablar de eso.
            </h2>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <h3>Ansiedad y sobrepensamiento</h3>
              <p>
                Entender qué está pasando y encontrar formas más manejables de
                transitarlo.
              </p>
            </article>

            <article className="service-card">
              <h3>Conflictos en los vínculos</h3>
              <p>
                Ordenar lo que está en juego y poder intervenir de otra manera.
              </p>
            </article>

            <article className="service-card">
              <h3>Crisis y momentos de cambio</h3>
              <p>
                Procesar lo que está pasando y construir una nueva orientación.
              </p>
            </article>

            <article className="service-card">
              <h3>Malestar persistente</h3>
              <p>
                Trabajar situaciones que se repiten y generan estancamiento.
              </p>
            </article>

            <article className="service-card">
              <h3>Terapia online</h3>
              <p>
                Atención para Argentina y argentinos en el exterior.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="section section-soft">
        <div className="wrap two-col">

          <div>
            <div className="eyebrow">Cómo es el proceso</div>
            <h2>Empezar es más simple de lo que parece.</h2>

            <p className="section-text">
              El primer paso no tiene que estar del todo claro. La idea es ir ordenando
              lo que te pasa a partir de un espacio de trabajo profesional.
            </p>
          </div>

          <div className="steps">

            <div className="step">
              <div className="step-num">01</div>
              <div>
                <h3>Primer contacto</h3>
                <p>
                  Podés escribir por WhatsApp para hacer una consulta inicial y coordinar un turno.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">02</div>
              <div>
                <h3>Primera entrevista</h3>
                <p>
                  Es un primer encuentro para entender qué te está pasando y ver si tiene sentido iniciar un proceso terapéutico.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">03</div>
              <div>
                <h3>Definición del trabajo</h3>
                <p>
                  Se acuerda la modalidad y la frecuencia de las sesiones según cada caso.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">04</div>
              <div>
                <h3>Proceso terapéutico</h3>
                <p>
                  A partir de ahí se trabaja de forma sostenida para entender lo que te pasa y generar cambios concretos.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2>Algunas dudas habituales antes de empezar</h2>
          </div>

          <div className="faq-accordion">

            <details className="faq-disclosure">
              <summary>¿Tengo que tener claro qué me pasa para empezar?</summary>
              <p>
                No. Muchas personas llegan sin poder poner en palabras exactamente lo
                que les pasa. La primera entrevista sirve justamente para empezar a
                ordenar eso.
              </p>
            </details>

            <details className="faq-disclosure">
              <summary>¿Cómo es la primera entrevista?</summary>
              <p>
                Es un primer encuentro para ubicar el motivo de consulta, entender qué
                te está pasando y ver si tiene sentido iniciar un proceso terapéutico.
              </p>
            </details>

            <details className="faq-disclosure">
              <summary>¿La terapia online funciona?</summary>
              <p>
                Sí. La modalidad online permite un trabajo serio, sostenido y con un
                encuadre profesional claro.
              </p>
            </details>

            <details className="faq-disclosure">
              <summary>¿Cada cuánto son las sesiones?</summary>
              <p>
                En general las sesiones son semanales, pero la frecuencia se define en
                la primera entrevista según cada caso y lo que tenga más sentido para vos.
              </p>
            </details>

            <details className="faq-disclosure">
              <summary>¿Cómo se abona?</summary>
              <p>
                Si estás en Argentina, podés abonar por transferencia bancaria o
                billeteras virtuales.
                <br /><br />
                Si estás en el exterior, utilizo distintos medios de pago según el país.
                Lo vemos de forma simple al momento de coordinar.
              </p>
            </details>

            <details className="faq-disclosure">
              <summary>¿Cuánto cuesta?</summary>
              <p>
                Los honorarios se conversan al momento de coordinar, teniendo en cuenta
                cada caso y la modalidad de trabajo.
                <br /><br />
                Si estás en el exterior, se ajusta según el país de residencia.
              </p>
            </details>

            <details className="faq-disclosure">
              <summary>¿Cómo hago para empezar?</summary>
              <p>
                Podés escribir directamente por WhatsApp y coordinamos una primera
                entrevista.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="wrap cta-panel">
          <div>
            <div className="eyebrow cta-eyebrow">Contacto</div>
            <h2>
              Si sentís que esto te pasa, podés escribirme y lo vemos.
            </h2>
            <p>
              Podés escribir directamente por WhatsApp. No hace falta que tengas todo
              claro para empezar.
            </p>
          </div>

          <div className="cta-actions">
            <a
              href="https://wa.me/5491158277881"
              className="btn btn-light"
            >
              Escribirme por WhatsApp
            </a>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <div className="footer-name">
              Lic. Guillermo Williams · Psicólogo
            </div>
            <div className="footer-meta">
              M.N. 67758 – M.P. 86605
            </div>
          </div>
          <div className="footer-meta">Atención online · Argentina</div>
        </div>
      </footer>
    </main>
  );


}