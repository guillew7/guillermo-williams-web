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
            <div className="eyebrow">Psicoterapia online</div>
            <h1>
  Psicoterapia para abordar lo que hoy te genera malestar.
</h1>
            <p className="hero-text">
  Enfoque clínico integrativo orientado a construir un proceso claro, con criterio profesional, ética y dirección.
</p>

            <div className="hero-actions">
              <a href="https://wa.me/5491158277881" className="btn btn-primary">
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
              <h2>Lic. Guillermo Williams</h2>
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
                  Ansiedad, desánimo, sobrepensamiento, conflictos vinculares, agotamiento,
                  crisis vitales, angustia persistente, desarrollo personal, etc.
                </p>
              </div>

              <div className="card-block">
                <div className="mini-label">Modalidad</div>
                <p>Atención online para pacientes desde cualquier parte del mundo.</p>
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
		<p className="section-text">
  Muchas consultas no empiezan por una crisis extrema, sino cuando algo se
  vuelve difícil de sostener.
</p>

<p className="section-text">
  El entorno cercano suele intentar ayudar, pero no siempre alcanza: la
  cercanía puede limitar lo que se dice y muchas respuestas buscan aliviar lo
  inmediato. El espacio terapéutico propone una escucha distinta, con encuadre
  y formación profesional.
</p>
          </div>

           <div className="issues-grid">
      <div className="issue">Ansiedad o pensamientos difíciles de frenar</div>
      <div className="issue">Vínculos que generan desgaste, confusión o malestar</div>
      <div className="issue">Situaciones o malestares que tienden a repetirse</div>
      <div className="issue">Sensación de estar perdido, trabado o sin rumbo</div>
      <div className="issue">Angustia que cuesta poner en palabras</div>
      <div className="issue">Dificultad para sostener cambios en el tiempo</div>
    </div>
  </div>
      </section>

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
    <div className="about-meta">Psicólogo · M.N. 67758 – M.P. 86605</div>

    <p className="about-mini">
      Atención psicológica online con enfoque clínico integrador, orientada a
      trabajar ansiedad, conflictos vinculares y situaciones de malestar
      persistente.
    </p>
  </div>
</div>

    <div className="content-col">
      <p>
        Soy Lic. Guillermo Williams, psicólogo. Me formé en la Universidad de Buenos Aires y trabajo en el campo de la salud mental desde hace más de diez años, tanto en el ámbito clínico como en distintos dispositivos institucionales y sociocomunitarios.
      </p>

      <p>
        Mi formación de base es psicoanalítica, pero a lo largo del tiempo fui ampliando mi formación hacia enfoques contemporáneos. Esto me permite trabajar sin rigidez teórica, pero con una orientación clara y un criterio clínico sostenido.
      </p>

      <p>
        Me interesa una práctica que no repita fórmulas ni discursos cerrados, sino que pueda pensarse en función de cada situación. Eso implica también una actualización constante y una forma de trabajo atenta a los desarrollos actuales de la disciplina y a los cambios en el contexto.
      </p>

      <p>
        En el espacio terapéutico busco sostener una escucha seria, clara y sin rodeos innecesarios. La idea no es solo entender lo que pasa, sino poder trabajar sobre eso: ordenar, aliviar, desarmar repeticiones y construir cambios posibles.
      </p>

      <div className="pillars">
        <div className="pillar">
          <div className="mini-label">Experiencia</div>
          <p>Más de 10 años de trabajo en salud mental en distintos dispositivos.</p>
        </div>
        <div className="pillar">
          <div className="mini-label">Enfoque</div>
          <p>Integrativo, con formación en psicoanálisis y terapias contemporáneas.</p>
        </div>
        <div className="pillar">
          <div className="mini-label">Modalidad de trabajo</div>
          <p>Escucha profesional, claridad en la intervención y encuadre cuidado.</p>
        </div>
      </div>
    </div>
 </div>
</section>
      <section id="servicios" className="section">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow">Servicios</div>
      <h2>Un espacio terapéutico para trabajar problemas concretos, no solo hablar de lo que pasa.</h2>
    </div>

    <div className="services-grid">
      
      <article className="service-card">
        <h3>Ansiedad y sobrepensamiento</h3>
        <p>
          Trabajo sobre situaciones de ansiedad, inquietud constante,
          pensamientos que no descansan o dificultad para cortar con ciertas
          preocupaciones. La idea es poder entender qué está pasando y encontrar
          formas más manejables de transitarlo.
        </p>
      </article>

      <article className="service-card">
        <h3>Conflictos en los vínculos</h3>
        <p>
          Problemas en relaciones de pareja, familia o vínculos cercanos que
          generan desgaste, confusión o malestar. Se busca ordenar lo que está
          en juego y poder intervenir de otra manera.
        </p>
      </article>

      <article className="service-card">
        <h3>Crisis personales y momentos de cambio</h3>
        <p>
          Separaciones, duelos, decisiones importantes o momentos en los que lo
          que venía funcionando deja de hacerlo. El espacio permite ubicar qué
          está pasando y construir una nueva orientación.
        </p>
      </article>

      <article className="service-card">
        <h3>Malestar persistente y repeticiones</h3>
        <p>
          Situaciones que se repiten en el tiempo, sensación de estancamiento o
          dificultad para producir cambios. El trabajo apunta a entender esos
          patrones y desarmarlos progresivamente.
        </p>
      </article>

      <article className="service-card">
        <h3>Terapia online</h3>
        <p>
          Atención psicológica online para pacientes en Argentina y argentinos
          que viven en el exterior. Un espacio profesional, confidencial y con
          continuidad de trabajo.
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
           <h2>Podés escribir para hacer una primera consulta.</h2>
<p>
  Si querés averiguar cómo trabajo o coordinar una entrevista, podés contactarte directamente por WhatsApp o por mail.
</p>
          </div>

          <div className="cta-actions">
            <a href="https://wa.me/5491158277881" className="btn btn-light">
              Escribirme por WhatsApp
            </a>
            <a href="mailto:guillermodwilliams@gmail.com" className="btn btn-outline-light">
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
              <p><strong>WhatsApp:</strong> +54 9 1158277881</p>
              <p><strong>Email:</strong> guillermodwilliams@gmail.com</p>
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
            <a href="https://wa.me/5491158277881" className="btn btn-primary contact-btn">
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