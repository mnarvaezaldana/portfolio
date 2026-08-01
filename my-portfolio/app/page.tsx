export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <span className="eyebrow">
          Ingeniería en Sistemas Computacionales
        </span>

        <h1>Mini Código de Ética Personal</h1>

        <p className="subtitle">
          Principios que orientan mi conducta como estudiante y futuro
          profesional responsable del diseño, desarrollo y uso de soluciones
          tecnológicas.
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">Introducción</h2>

        <p>
          Como futuro Ingeniero en Sistemas Computacionales, reconozco que la
          tecnología tiene un impacto directo en las personas, las
          organizaciones y la sociedad. Por ello, me comprometo a actuar con
          responsabilidad, honestidad y profesionalismo en el desarrollo de
          software y en todas las actividades relacionadas con mi profesión.
        </p>
      </section>

      <section className="principles-grid">
        <article className="card">
          <span className="card-number">01</span>
          <div className="icon" aria-hidden="true">
            🤝
          </div>

          <h2>Honestidad</h2>

          <span className="label">Principio</span>

          <p>
            Actuar con transparencia, sin alterar información ni atribuirme el
            trabajo realizado por otras personas.
          </p>

          <span className="label">Ejemplo de aplicación</span>

          <p>
            Si encuentro un error en un sistema desarrollado por mí, lo
            reportaré de inmediato y trabajaré para solucionarlo en lugar de
            ocultarlo.
          </p>
        </article>

        <article className="card">
          <span className="card-number">02</span>
          <div className="icon" aria-hidden="true">
            ✅
          </div>

          <h2>Responsabilidad</h2>

          <span className="label">Principio</span>

          <p>
            Desarrollar software de calidad, minimizar errores y considerar el
            impacto que tendrá en los usuarios.
          </p>

          <span className="label">Ejemplo de aplicación</span>

          <p>
            Antes de publicar una aplicación, realizaré pruebas suficientes
            para reducir fallos que puedan afectar a los clientes.
          </p>
        </article>

        <article className="card">
          <span className="card-number">03</span>
          <div className="icon" aria-hidden="true">
            🔒
          </div>

          <h2>Respeto por la privacidad</h2>

          <span className="label">Principio</span>

          <p>
            Proteger la información personal, sensible y confidencial de los
            usuarios.
          </p>

          <span className="label">Ejemplo de aplicación</span>

          <p>
            No compartiré bases de datos, contraseñas ni información sensible
            sin autorización, y aplicaré buenas prácticas de seguridad.
          </p>
        </article>

        <article className="card">
          <span className="card-number">04</span>
          <div className="icon" aria-hidden="true">
            📚
          </div>

          <h2>Aprendizaje continuo</h2>

          <span className="label">Principio</span>

          <p>
            Mantenerme actualizado sobre tecnologías, herramientas y buenas
            prácticas relacionadas con mi profesión.
          </p>

          <span className="label">Ejemplo de aplicación</span>

          <p>
            Dedicaré tiempo al estudio de nuevos lenguajes, arquitecturas,
            metodologías y tecnologías de desarrollo de software.
          </p>
        </article>

        <article className="card">
          <span className="card-number">05</span>
          <div className="icon" aria-hidden="true">
            👥
          </div>

          <h2>Trabajo en equipo</h2>

          <span className="label">Principio</span>

          <p>
            Colaborar con respeto, comunicación, apertura y disposición para
            ayudar a los demás integrantes del equipo.
          </p>

          <span className="label">Ejemplo de aplicación</span>

          <p>
            Escucharé las opiniones de mis compañeros durante las revisiones de
            código y aceptaré críticas constructivas para mejorar mi trabajo.
          </p>
        </article>

        <article className="card">
          <span className="card-number">06</span>
          <div className="icon" aria-hidden="true">
            💻
          </div>

          <h2>Uso responsable de la tecnología</h2>

          <span className="label">Principio</span>

          <p>
            Crear soluciones que beneficien a las personas y evitar el uso de
            mis conocimientos para engañar, manipular o causar daño.
          </p>

          <span className="label">Ejemplo de aplicación</span>

          <p>
            No participaré en el desarrollo de software destinado a robar
            información, vulnerar sistemas o manipular deliberadamente a los
            usuarios.
          </p>
        </article>
      </section>

      <section className="section commitment">
        <h2 className="section-title">Mi compromiso profesional</h2>

        <p>
          Este código de ética representa el compromiso que asumo como
          estudiante de Ingeniería en Sistemas Computacionales y futuro
          profesionista. Mi objetivo es utilizar mis conocimientos para
          desarrollar soluciones tecnológicas útiles, seguras y confiables,
          actuando con integridad, respeto hacia las personas y responsabilidad
          social.
        </p>
      </section>

      <footer className="footer">
        <p>Mini Código de Ética Personal</p>

        <span className="author">
          Nombre del estudiante: Marcos Narváez
        </span>
      </footer>
    </main>
  );
}