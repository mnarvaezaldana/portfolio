"use client";
import { useState } from "react";

type Word = {
  term: string;
  definition: string;
};

export default function Home() {
  const words: Word[] = [
    { term: "CPU", definition: "The Central Processing Unit is the brain of the computer that executes instructions." },
    { term: "Motherboard", definition: "The main circuit board that connects all computer components together." },
    { term: "RAM", definition: "Random Access Memory stores temporary data that the computer is currently using." },
    { term: "Hard Drive", definition: "A storage device used to save data permanently." },
    { term: "Keyboard", definition: "An input device used to type text and commands." },
    { term: "Mouse", definition: "A pointing device used to interact with items on the screen." },
    { term: "Monitor", definition: "An output device that displays visual information." },
    { term: "Printer", definition: "A device that prints digital documents onto paper." },
    { term: "Router", definition: "A networking device that connects multiple devices to the internet." },
    { term: "Browser", definition: "Software used to access and navigate websites." },
    { term: "World Wide Web", definition: "A system of interlinked web pages accessed through the internet." },
    { term: "Cloud Storage", definition: "An online service that allows you to store and access files over the internet." },
    { term: "Smartphone", definition: "A mobile phone with advanced computing capabilities and internet access." },
    { term: "Tablet", definition: "A portable touchscreen device larger than a smartphone." }
  ];

  const [selectedWord, setSelectedWord] = useState<Word | null>(null);

  const showWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);
  };

  return (
    <main>

      <span class="eyebrow">Ingeniería en Sistemas Computacionales</span>
      <h1>Mini Código de Ética Personal</h1>
      <p class="subtitle">
        Principios que orientan mi conducta como estudiante y futuro profesional
        responsable del diseño, desarrollo y uso de soluciones tecnológicas.
      </p>
    </header>

    <section class="section">
      <h2 class="section-title">Introducción</h2>
      <p>
        Como futuro Ingeniero en Sistemas Computacionales, reconozco que la tecnología
        tiene un impacto directo en las personas, las organizaciones y la sociedad.
        Por ello, me comprometo a actuar con responsabilidad, honestidad y profesionalismo
        en el desarrollo de software y en todas las actividades relacionadas con mi profesión.
      </p>
    </section>

    <section class="principles-grid">
      <article class="card">
        <span class="card-number">01</span>
        <div class="icon">🤝</div>
        <h2>Honestidad</h2>

        <span class="label">Principio</span>
        <p>
          Actuar con transparencia, sin alterar información ni atribuirme el trabajo
          realizado por otras personas.
        </p>

        <span class="label">Ejemplo de aplicación</span>
        <p>
          Si encuentro un error en un sistema desarrollado por mí, lo reportaré de inmediato
          y trabajaré para solucionarlo en lugar de ocultarlo.
        </p>
      </article>

      <article class="card">
        <span class="card-number">02</span>
        <div class="icon">✅</div>
        <h2>Responsabilidad</h2>

        <span class="label">Principio</span>
        <p>
          Desarrollar software de calidad, minimizar errores y considerar el impacto
          que tendrá en los usuarios.
        </p>

        <span class="label">Ejemplo de aplicación</span>
        <p>
          Antes de publicar una aplicación, realizaré pruebas suficientes para reducir
          fallos que puedan afectar a los clientes.
        </p>
      </article>

      <article class="card">
        <span class="card-number">03</span>
        <div class="icon">🔒</div>
        <h2>Respeto por la privacidad</h2>

        <span class="label">Principio</span>
        <p>
          Proteger la información personal, sensible y confidencial de los usuarios.
        </p>

        <span class="label">Ejemplo de aplicación</span>
        <p>
          No compartiré bases de datos, contraseñas ni información sensible sin autorización,
          y aplicaré buenas prácticas de seguridad.
        </p>
      </article>

      <article class="card">
        <span class="card-number">04</span>
        <div class="icon">📚</div>
        <h2>Aprendizaje continuo</h2>

        <span class="label">Principio</span>
        <p>
          Mantenerme actualizado sobre tecnologías, herramientas y buenas prácticas
          relacionadas con mi profesión.
        </p>

        <span class="label">Ejemplo de aplicación</span>
        <p>
          Dedicaré tiempo al estudio de nuevos lenguajes, arquitecturas, metodologías
          y tecnologías de desarrollo de software.
        </p>
      </article>

      <article class="card">
        <span class="card-number">05</span>
        <div class="icon">👥</div>
        <h2>Trabajo en equipo</h2>

        <span class="label">Principio</span>
        <p>
          Colaborar con respeto, comunicación, apertura y disposición para ayudar
          a los demás integrantes del equipo.
        </p>

        <span class="label">Ejemplo de aplicación</span>
        <p>
          Escucharé las opiniones de mis compañeros durante las revisiones de código
          y aceptaré críticas constructivas para mejorar mi trabajo.
        </p>
      </article>

      <article class="card">
        <span class="card-number">06</span>
        <div class="icon">💻</div>
        <h2>Uso responsable de la tecnología</h2>

        <span class="label">Principio</span>
        <p>
          Crear soluciones que beneficien a las personas y evitar el uso de mis conocimientos
          para engañar, manipular o causar daño.
        </p>

        <span class="label">Ejemplo de aplicación</span>
        <p>
          No participaré en el desarrollo de software destinado a robar información,
          vulnerar sistemas o manipular deliberadamente a los usuarios.
        </p>
      </article>
    </section>

    <section class="section commitment">
      <h2 class="section-title">Mi compromiso profesional</h2>
      <p>
        Este código de ética representa el compromiso que asumo como estudiante de
        Ingeniería en Sistemas Computacionales y futuro profesionista. Mi objetivo es
        utilizar mis conocimientos para desarrollar soluciones tecnológicas útiles,
        seguras y confiables, actuando con integridad, respeto hacia las personas y
        responsabilidad social.
      </p>
    </section>

    </main>
  );
}