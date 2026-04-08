export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="wrap header-inner">
          <div className="brand">
            <div className="brand-name">Lic. Guillermo Williams</div>
            <div className="brand-sub">Psicólogo · M.N. 67758 – M.P. 86605</div>
          </div>

          <nav className="nav">
            <a href="#sobre">Sobre mí</a>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#faq">Preguntas frecuentes</a>
            <a href="#contacto" className="nav-cta">WhatsApp</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Psicoterapia para adultos y jóvenes adultos</div>
            <h1>
              Un espacio serio y claro para trabajar lo que hoy te está
              desordenando.
            </h1>
            <p className="hero-text">
              Atención psicológica con una perspectiva integrativa, orientada a
              comprender mejor lo que te pasa, aliviar el malestar y construir
              cambios posibles.
            </p>

            <div className="hero-actions">
              <a href="https://wa.me/XXXXXXXXXX" className="btn btn-primary">
                Escribirme por WhatsApp
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Consultar por email
              </a>
            </div>

            <div className="hero-notes">
              <span>Atención online</span>
              <span>Confidencialidad profesional</span>
              <span>Primera entrevista de orientación</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-shell">
              <div className="card-top">Práctica clínica</div>
              <h2>Guillermo Williams</h2>
              <p>
                Un trabajo terapéutico cuidado, personalizado y sin fórmulas
                rígidas.
              </p>

              <div className="card-block">
                <div className="mini-label">Enfoque</div>
                <p>
                  Integrativo, con una forma de trabajo que combina escucha,
                  comprensión del contexto y herramientas contemporáneas.
                </p>
              </div>

              <div className="card-block">
                <div className="mini-label">Consultas frecuentes</div>
                <p>
                  Ansiedad, sobrepensamiento, vínculos complejos, agotamiento,
                  crisis vitales, angustia persistente y sensación de
                  desorientación.
                </p>
              </div>

              <div className="card-block">
                <div className="mini-label">Modalidad</div>
                <p>Atención online para pacientes en Argentina.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Motivos de consulta</div>
            <h2>No hace falta tocar fondo para empezar.</h2>
          </div>

          <div className="issues-grid">
            <div className="issue">Ansiedad o pensamientos que no frenan</div>
            <div className="issue">Vínculos que desgastan o confunden</div>
            <div className="issue">Malestar que se repite</div>
            <div className="issue">Sensación de estar perdido o estancado</div>
            <div className="issue">Angustia difícil de ordenar</div>
            <div className="issue">Dificultad para sostener cambios</div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Sobre mí</div>
            <h2>Una práctica clínica seria, cercana y personalizada.</h2>
          </div>

          <div className="content-col">
            <p>
              Soy Lic. Guillermo Williams, psicólogo. Trabajo desde una
              orientación integrativa, atenta a la singularidad de cada
              persona, su historia, su contexto y el modo particular en que hoy
              aparece el malestar.
            </p>
            <p>
              Mi forma de trabajo busca sostener dos cosas al mismo tiempo: una
              escucha profunda y una dirección clínica clara. No se trata de
              aplicar un método uniforme, sino de construir un proceso acorde a
              cada consulta.
            </p>
            <p>
              El objetivo no es solo entender mejor lo que pasa, sino también
              poder mover algo de eso: aliviar, ordenar, desarmar repeticiones y
              abrir otras formas de estar con uno mismo y con los demás.
            </p>

            <div className="pillars">
              <div className="pillar">
                <div className="mini-label">Trabajo personalizado</div>
                <p>Cada proceso se piensa caso por caso.</p>
              </div>
              <div className="pillar">
                <div className="mini-label">Enfoque integrativo</div>
                <p>Comprensión profunda y herramientas contemporáneas.</p>
              </div>
              <div className="pillar">
                <div className="mini-label">Encuadre serio</div>
                <p>Claridad, cuidado y confidencialidad profesional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Servicios</div>
            <h2>Un espacio clínico para trabajar lo que hoy te desborda o se repite.</h2>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <h3>Terapia individual para adultos</h3>
              <p>
                Un espacio de trabajo clínico para abordar ansiedad, conflictos
                vinculares, malestar emocional, inseguridad, agotamiento y
                dificultades que insisten.
              </p>
            </article>

            <article className="service-card">
              <h3>Atención online</h3>
              <p>
                Sesiones virtuales con encuadre claro, continuidad y la misma
                seriedad terapéutica. Una modalidad cómoda, cuidada y efectiva.
              </p>
            </article>

            <article className="service-card">
              <h3>Procesos de cambio y crisis vitales</h3>
              <p>
                Acompañamiento en separaciones, duelos, decisiones importantes,
                pérdida de rumbo o momentos en los que algo necesita
                reordenarse.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="proceso" className="section section-soft">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Cómo es el proceso</div>
            <h2>Empezar puede ser más simple de lo que imaginás.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div>
                <h3>Primer contacto</h3>
                <p>
                  Podés escribir por WhatsApp o por mail para hacer una consulta
                  inicial y coordinar un turno.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">02</div>
              <div>
                <h3>Primera entrevista</h3>
                <p>
                  Un primer encuentro para ubicar el motivo de consulta y pensar
                  una posible dirección de trabajo.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">03</div>
              <div>
                <h3>Frecuencia y modalidad</h3>
                <p>
                  Habitualmente las sesiones son semanales. La modalidad se
                  conversa según cada caso.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-num">04</div>
              <div>
                <h3>Confidencialidad</h3>
                <p>
                  Todo lo trabajado se sostiene bajo secreto profesional y un
                  encuadre clínico cuidado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2>Respuestas claras para dar el primer paso con menos dudas.</h2>
          </div>

          <div className="faq-list">
            <div className="faq-item">
              <h3>¿Cómo sé si es un buen momento para empezar?</h3>
              <p>
                No hace falta estar en una crisis extrema. Muchas consultas
                empiezan cuando algo insiste, pesa o dejó de poder tramitarse a
                solas.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cómo es la primera sesión?</h3>
              <p>
                Es una primera conversación para ubicar qué te está pasando, qué
                necesitás y cómo podría trabajarse terapéuticamente.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿La terapia puede ser online?</h3>
              <p>Sí. La modalidad online permite un trabajo serio y confidencial.</p>
            </div>

            <div className="faq-item">
              <h3>¿Cada cuánto son las sesiones?</h3>
              <p>Generalmente semanales, aunque siempre se define según cada caso.</p>
            </div>

            <div className="faq-item">
              <h3>¿Lo que se trabaja es confidencial?</h3>
              <p>Sí. La confidencialidad forma parte del encuadre profesional.</p>
            </div>

            <div className="faq-item">
              <h3>¿Cómo se abona?</h3>
              <p>Los honorarios y la forma de pago se conversan al coordinar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta-panel">
          <div>
            <div className="eyebrow cta-eyebrow">Contacto</div>
            <h2>Podés escribir aunque todavía no sepas bien por dónde empezar.</h2>
            <p>
              A veces alcanza con una primera consulta para empezar a ordenar
              algo. Si querés averiguar la modalidad de trabajo o coordinar una
              entrevista, podés contactarte sin compromiso.
            </p>
          </div>

          <div className="cta-actions">
            <a href="https://wa.me/XXXXXXXXXX" className="btn btn-light">
              Escribirme por WhatsApp
            </a>
            <a href="mailto:tuemail@correo.com" className="btn btn-outline-light">
              Consultar por email
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Datos de contacto</div>
            <h2>Contacto simple, directo y sin fricción.</h2>

            <div className="contact-info">
              <p><strong>WhatsApp:</strong> +54 9 XXX XXX XXXX</p>
              <p><strong>Email:</strong> tuemail@correo.com</p>
              <p><strong>Modalidad:</strong> Atención online</p>
              <p><strong>Honorarios:</strong> A conversar al coordinar</p>
            </div>
          </div>

          <div className="contact-box">
            <h3>Primer contacto</h3>
            <p>
              Podés escribir por WhatsApp o por mail contando brevemente qué te
              gustaría consultar.
            </p>
            <a href="https://wa.me/XXXXXXXXXX" className="btn btn-primary contact-btn">
              Ir a WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <div className="footer-name">Lic. Guillermo Williams · Psicólogo</div>
            <div className="footer-meta">M.N. 67758 – M.P. 86605</div>
          </div>
          <div className="footer-meta">Atención online · Argentina</div>
        </div>
      </footer>
    </main>
  );
}