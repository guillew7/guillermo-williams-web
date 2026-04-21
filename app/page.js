import {
  Brain,
  Users,
  Sparkles,
  Puzzle,
  Cloud,
  Globe,
  MessageCircle,
  ClipboardList,
  CalendarCheck
} from "lucide-react";

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
        <h1>
          Sabés que algo te está afectando, pero no siempre es fácil entender qué te pasa o cómo salir de eso.
        </h1>

        <p className="hero-sub">
          Pensás demasiado, te cuesta desconectar, algo se repite en tus vínculos o sentís un malestar que no terminás de ordenar.
          La terapia puede ser un espacio para entenderlo mejor y empezar a trabajarlo con más claridad.
        </p>

        <div className="hero-cta">
          <a href="https://wa.me/5491158277881" className="btn-primary">
            Escribirme por WhatsApp
          </a>
          <a href="#contacto" className="btn-secondary">
            Hacer una consulta
          </a>
        </div>

        <div className="hero-badges">
          <span>Atención online</span>
          <span>Primera entrevista de orientación</span>
          <span>Confidencialidad profesional</span>
        </div>
      </section>

      <section className="empatia">
        <h2>Puede que se sienta más o menos así</h2>

        <p>
          Tal vez venís sosteniendo cosas hace tiempo y ya no te resulta tan fácil seguir igual.
          Puede aparecer como ansiedad, cansancio mental, irritabilidad, angustia, confusión en los vínculos o una sensación de estar trabado.
        </p>

        <p>
          No siempre hay una crisis clara. A veces es una acumulación que se vuelve difícil de sostener.
        </p>
      </section>

      {/* MOTIVOS*/}
      <section className="motivos" id="motivos">
        <h2>Puede que hoy te esté pasando algo de esto</h2>

        <div className="motivos-grid">
          <div className="motivo-card">
            <div className="icono"><Brain /></div>
            <h3>Ansiedad y sobrecarga mental</h3>
            <p>
              Pensamientos que no paran, dificultad para desconectar o sensación
              de estar siempre en alerta.
            </p>
          </div>

          <div className="motivo-card">
            <div className="icono"><Users /></div>
            <h3>Conflictos en los vínculos</h3>
            <p>
              Relaciones que generan desgaste, confusión o situaciones que se
              repiten y no sabés bien cómo manejar.
            </p>
          </div>

          <div className="motivo-card">
            <div className="icono"><Sparkles /></div>
            <h3>Crisis y cambios importantes</h3>
            <p>
              Separaciones, pérdidas, mudanzas, decisiones difíciles o momentos en
              los que algo deja de funcionar como antes.
            </p>
          </div>

          <div className="motivo-card">
            <div className="icono"><Puzzle /></div>
            <h3>Sensación de estancamiento</h3>
            <p>
              Estar trabado, sin rumbo claro o repitiendo formas de vivir que hoy
              ya no te hacen bien.
            </p>
          </div>

          <div className="motivo-card">
            <div className="icono"><Cloud /></div>
            <h3>Angustia difícil de ordenar</h3>
            <p>
              Un malestar persistente que cuesta nombrar con claridad, pero que se
              hace sentir en lo cotidiano.
            </p>
          </div>

          <div className="motivo-card">
            <div className="icono"><Globe /></div>
            <h3>Desarraigo y duelo migratorio</h3>
            <p>
              Vivir lejos, adaptarte a otro entorno o sentir que no terminás de
              pertenecer del todo a ningún lugar.
            </p>
          </div>
        </div>
      </section>
      {/* TRUST BAR */}
      <section className="trust">
        <div className="trust-items">
          <span>Lic. en Psicología · UBA</span>
          <span>M.N. 67758 · M.P. 86605</span>
          <span>Más de 10 años de experiencia</span>
          <span>Atención online</span>
          <span>Enfoque integrativo</span>
        </div>
      </section>


      {/* SOBRE MI */}
      <section className="sobre-mi" id="sobre">
        <h2>Sobre mí</h2>

        <p>
          Soy Guillermo Williams, psicólogo, egresado de la Universidad de Buenos Aires.
          Trabajo con adultos y jóvenes adultos desde un enfoque integrativo, articulando distintas herramientas según lo que cada proceso requiera.
        </p>

        <p>
          Además de la práctica clínica, cuento con experiencia en instituciones y dispositivos de salud mental, lo que me permitió trabajar con problemáticas diversas.
        </p>

        <p>
          Mi objetivo es ofrecer un espacio serio, claro y confidencial, donde lo que te pasa pueda ser pensado de manera singular, sin respuestas prefabricadas.
        </p>
      </section>

      {/* COMO TRABAJO */}
      <section className="como-trabajo" id="servicios">
        <h2>Cómo trabajo</h2>

        <p className="intro">
          El objetivo no es solamente hablar de lo que te pasa, sino poder entenderlo mejor y trabajar para que algo efectivamente se mueva.
        </p>

        <div className="trabajo-grid">

          <div>
            <h3>Entender qué está pasando</h3>
            <p>Ubicar el problema, cómo se armó y qué lo sostiene.</p>
          </div>

          <div>
            <h3>Ordenar el malestar</h3>
            <p>Poner en palabras, diferenciar y clarificar lo que hoy aparece mezclado.</p>
          </div>

          <div>
            <h3>Producir cambios</h3>
            <p>Trabajar para que algo cambie en la forma de estar, decidir o vincularse.</p>
          </div>

        </div>
      </section>

      {/* PROCESO */}
      <section className="proceso" id="proceso">
        <h2>Cómo es el proceso para empezar</h2>

        <p className="proceso-intro">
          El primer paso es simple. La idea es que desde el inicio tengas claridad sobre
          cómo trabajo, qué modalidad ofrezco y si este espacio puede servirte.
        </p>

        <div className="pasos">
          <div className="paso-card">
            <div className="paso-icono"><MessageCircle /></div>
            <h3>1. Primer contacto</h3>
            <p>
              Podés escribirme por WhatsApp para consultar disponibilidad, honorarios
              o hacer una primera pregunta.
            </p>
          </div>

          <div className="paso-card">
            <div className="paso-icono"><ClipboardList /></div>
            <h3>2. Primeras entrevistas</h3>
            <p>
              En los primeros encuentros ubicamos mejor el motivo de consulta, el
              momento que estás atravesando y qué necesitás trabajar.
            </p>
          </div>

          <div className="paso-card">
            <div className="paso-icono"><CalendarCheck /></div>
            <h3>3. Definimos cómo seguir</h3>
            <p>
              Si decidimos avanzar, acordamos frecuencia, modalidad de trabajo y un
              encuadre claro para sostener el proceso.
            </p>
          </div>
        </div>

        <p className="proceso-cierre">
          No hace falta que llegues con todo claro. Muchas veces el primer paso es,
          simplemente, empezar a hablar de lo que te viene pasando.
        </p>

        <a href="https://wa.me/5491158277881" className="btn-primary">
          Hacer una consulta
        </a>
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
      <section className="cta-final" id="contacto">
        <h2>Si sentís que podría ayudarte, podés escribirme</h2>

        <p>
          A veces no es fácil dar el primer paso.
          Si querés hacer una consulta o coordinar una primera entrevista, podés contactarme por WhatsApp.
        </p>

        <a href="https://wa.me/5491158277881" className="btn-primary">
          Escribirme por WhatsApp
        </a>
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