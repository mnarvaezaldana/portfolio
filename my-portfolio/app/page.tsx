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
        <h2>Welcome</h2>
        <p>
          This website presents my professional career interests and academic work.
          It also includes a dynamic activity about computer parts and technology vocabulary.
        </p>
      </section>

      <section id="essay" className="section">
        <h2>How to Improve Your Skills Solving Problems</h2>
        <p>
          Replace this text with your own academic writing created in class.
        </p>
      </section>

      <section id="activity" className="section">
        <h2>Technology Vocabulary Activity</h2>
        <p>Click the button to display a technology word:</p>
        <button onClick={showWord}>Show Word</button>
        {word && <div className="word-box">{word}</div>}
      </section>

    </main>
  );
}