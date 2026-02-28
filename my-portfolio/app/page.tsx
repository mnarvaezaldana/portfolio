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

      <section id="home" className="section">
        <h2>Hello, My name is Marcos Armando Narvaez Aldana.</h2>
        <p>
          I am a student at the University of the South, in Merida Yucatan.
          This website presents my professional career interests and academic work.
          It also includes a dynamic activity about computer parts and technology vocabulary.
        </p>
      </section>

      <section id="essay" className="section">
        <h2>How to Improve Your Skills Solving Problems</h2>
        <p>
          Since I have been working as a software developer, I have encountered multiple problems related to compatibility between tools versions.
          Nevertheless, I have been capable of fixing them within a couple of hours after browsing the web.
        </p>
        <p>
          One day I faced an issue in an Android project written in Java. The changes seemed small,
          but after running the project I saw red error logs.
        </p>
        <p>
          I tried cleaning the cache and rebuilding the project, but the issue persisted.
          After two days of trying to fix it, I asked my boss for help.
        </p>
        <p>
          He had seen the issue before and guided me through the solution.
          I learned that asking for help is part of teamwork and that keeping libraries updated is very important.
        </p>
      </section>

      <section id="activity" className="section">
        <h2>Technology Vocabulary Activity</h2>
        <p>Click the button to display a technology word and its definition:</p>

        <button onClick={showWord}>Show Word</button>

        {selectedWord && (
          <div className="word-box" style={{ marginTop: "15px" }}>
            <h3>{selectedWord.term}</h3>
            <p>{selectedWord.definition}</p>
          </div>
        )}
      </section>

    </main>
  );
}