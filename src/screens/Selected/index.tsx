import React, { useState, useMemo, useEffect } from "react";

/* ---------- 1. Palavras base ---------- */
const ALL_WORDS = [
  "apple", "banana", "cherry", "dragon", "elephant", "falcon",
  "guitar", "honey", "island", "jungle", "kangaroo", "lemon",
  "mountain", "nectar", "ocean", "piano", "quartz", "rocket",
  "sunshine", "tiger", "umbrella", "volcano", "waterfall",
  "xylophone", "yacht", "zebra",
];

/* Embaralha e pega 14 únicas */
function pickRandomWords(n: number) {
  const shuffled = [...ALL_WORDS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

/* ---------- 2. Componente ---------- */
const Selected: React.FC = () => {
  const words = useMemo(() => pickRandomWords(14), []);

  /* Estado da navegação */
  const [currentIdx, setCurrentIdx] = useState(0);  // qual palavra está na tela
  const [checked, setChecked] = useState(false);    // checkbox da palavra atual
  const completed = currentIdx >= words.length;     // todas foram vistas

  /* Se o id mudar, reinicia a dinâmica */
  useEffect(() => {
    setCurrentIdx(0);
    setChecked(false);
  }, [words]);

  /* Exibe fallback se rota inválida */
  if (!words.length) {
    return (
      <div className="bg-cyan-950 text-white min-h-screen flex items-center justify-center">
        <p>Lista não encontrada</p>
      </div>
    );
  }

  /* Última palavra já marcada? -> exibe aviso */
  if (completed) {
    return (
      <div className="bg-cyan-950 text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Parabéns!</h1>
        <p>Todas as palavras foram concluídas 🎉</p>
      </div>
    );
  }

  /* Palavra atual */
  const word = words[currentIdx];

  return (
    <div className="bg-cyan-950 min-h-screen flex flex-col items-center justify-center text-white px-4">
      {/* Palavra + checkbox */}
      <div className="flex items-center gap-3 mb-6">
        <label htmlFor="chk" className="text-3xl select-none">
          {word}
        </label>
        <input
          id="chk"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((v) => !v)}
          className="h-6 w-6 accent-emerald-500"
        />
      </div>

      {/* Botão “Próxima palavra” só aparece se marcar checkbox */}
      {checked && (
        <button
          onClick={() => {
            setCurrentIdx((i) => i + 1);
            setChecked(false);
          }}
          className="px-8 py-3 rounded bg-emerald-600 hover:bg-emerald-700 transition"
        >
          Próxima palavra
        </button>
      )}

      {/* Progresso opcional */}
      <p className="mt-8 text-sm opacity-75">
        {currentIdx + (checked ? 1 : 0)} / {words.length} concluídas
      </p>
    </div>
  );
};

export default Selected;
