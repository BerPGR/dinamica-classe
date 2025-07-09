import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";

/* ---------- 1. Gera 3 palavras aleatórias para cada “posição” ---------- */
const ALL_WORDS = [
  "apple",
  "banana",
  "cherry",
  "dragon",
  "elephant",
  "falcon",
  "guitar",
  "honey",
  "island",
  "jungle",
  "kangaroo",
  "lemon",
  "mountain",
  "nectar",
  "ocean",
  "piano",
  "quartz",
  "rocket",
  "sunshine",
  "tiger",
  "umbrella",
  "volcano",
  "waterfall",
  "xylophone",
  "yacht",
  "zebra",
];

function pickRandomWords(n: number) {
  const shuffled = [...ALL_WORDS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

/* Cria 5 “listas” (0-4) com 3 palavras cada ─ geradas apenas 1x */
const wordsForPosition: string[][] = Array.from({ length: 5 }, () =>
  pickRandomWords(5)
);

/* ---------- 2. Componente ---------- */
const Selected = () => {
  const { id } = useParams<{ id?: string }>();
  const index = Number(id); // id → número
  const words = useMemo(
    () =>
      Number.isNaN(index) || index < 0 || index >= wordsForPosition.length
        ? []
        : wordsForPosition[index],
    [index]
  );

  /* Estado dos checkboxes (um bool por palavra) */
  const [checked, setChecked] = useState(words.map(() => false));

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const allChecked = checked.every(Boolean);

  /* Se id for inválido, mostra mensagem simples */
  if (!words.length) {
    return (
      <div className="bg-cyan-950 text-white min-h-screen flex items-center justify-center">
        <p>Lista não encontrada</p>
      </div>
    );
  }

  return (
    <div className="bg-cyan-950 min-h-screen flex flex-col items-center pt-10 text-white">
      {/* Lista de palavras + checkboxes */}
      <ul className="space-y-4">
        {words.map((word, i) => (
          <li key={word} className="flex items-center gap-3">
            <label htmlFor={`chk-${i}`} className="select-none text-xl">
              {word}
            </label>
            <input
              id={`chk-${i}`}
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="h-5 w-5 accent-emerald-500"
            />
          </li>
        ))}
      </ul>

      {/* Botão aparece só depois de todos marcados */}
      {allChecked && (
        <button
          onClick={() => console.log("Finalizado")}
          className="mt-8 px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-700 transition"
        >
          Finalizar
        </button>
      )}
    </div>
  );
};

export default Selected;
