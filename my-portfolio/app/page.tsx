"use client";
import { useState } from "react";

export default function Home() {
  const words = [
    "CPU",
    "Motherboard",
    "RAM",
    "Hard Drive",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Printer",
    "Router",
    "Browser",
    "World Wide Web",
    "Cloud Storage",
    "Smartphone",
    "Tablet"
  ];

  const [word, setWord] = useState("");

  const showWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
  };

  return (
    <main>

      <section id="home" className="section">
        <h2>Hello, My name is Marcos Armando Narvaez Aldana.</h2>
        <p>I am a student at the University of the South, in Merida Yucatan.
          This website presents my professional career interests and acad†emic work.
          It also includes a dynamic activity about computer parts and technology vocabulary.
        </p>
      </section>

      <section id="essay" className="section">
        <h2>How to Improve Your Skills Solving Problems</h2>
        <p>
          Since I've been working as a software developer, I've encountered multiple problems related to compatibility between tools versions, nevertheless
          I've been capable of fix them just within a couple of hours after browsing on the web. However one day I faced an issue that I still remember these days
        </p>
        <p>
          I was working on an android project written in Java, some changes were asked me to do by my boss, so I thought it would be something fast, since the changes
          seemed to be small.
        </p>
        <p>
          The first time I saw the logs on red telling me there was an issue I didn't think about something critical, I thought on something like a semicolon been missed,
          so I deleted cache, clean the project and re run it, but the issue persisted. I searched on the Internet about the issue and I found nothing but recommendations,
          I didn't find any clear solution.
        </p>
        <p>
          After two days I was still unable to fix the issue, so I contacted my boss asking for help. He told me he wasn't aware tat the project had that issue, and he already
          encountered before, so he told me how to fix it.
        </p>
        <p>
          The specific steps were to download a library, clean cache, install the library and clean cache again. After those steps I was able to run the project so happily it was
          fixed with the help from my boss. So I learnt is ok to seek for help from your superiors, that is also part of their duties and also the importance of keeping the libraries
          updated.
        </p>
      </section>

      <section id="activity" className="section">
        <h2>Technology Vocabulary Activity</h2>
        <p>This will be the vocabulary (Glosario in Spanish) will contain more words</p>
        <p>Click the button to display a technology word:</p>
        <button onClick={showWord}>Show Word</button>
        {word && <div className="word-box">{word}</div>}
      </section>

    </main>
  );
}