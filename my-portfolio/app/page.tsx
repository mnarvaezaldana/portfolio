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
          This will contain part of the activity
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