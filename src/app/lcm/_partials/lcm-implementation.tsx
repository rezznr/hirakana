"use client";

import { useState } from "react";

export const LCMCalculator = () => {
  const [seed, setSeed] = useState(1);
  const [a, setA] = useState(5);
  const [c, setC] = useState(3);
  const [m, setM] = useState(16);
  const [results, setResults] = useState<number[]>([]);

  const calculateLCM = () => {
    let X = seed;
    const newResults = [];

    for (let i = 1; i <= 10; i++) {
      X = (a * X + c) % m;
      newResults.push(X);
    }

    setResults(newResults);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1>Linear Congruential Method</h1>
      <div className="border">
        <label>(X)Seed: </label>
        <input
          type="number"
          value={seed}
          onChange={(e) => setSeed(Number(e.target.value))}
        />
      </div>
      <div className="border">
        <label>Multiplier (a): </label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
      </div>
      <div className="border">
        <label>Increment (c): </label>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Modulus (m): </label>
        <input
          type="number"
          value={m}
          onChange={(e) => setM(Number(e.target.value))}
        />
      </div>
      <p>
        X = {a} * {seed} + {c} mod{m} = hasilnya dibawah
      </p>
      <button onClick={calculateLCM}>Generate</button>
      <h2>Hasil :</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default LCMCalculator;
