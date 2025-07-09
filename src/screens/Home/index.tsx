import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-950 min-h-screen text-white flex flex-col items-center p-4">
      <h1 className="font-bold text-4xl pt-10">Qual é a senha?</h1>
      <h3 className="text-4xl pt-10">Selecione sua posição</h3>
      <div className="flex flex-col gap-10 mt-20">
        <button className="bg-white text-black px-6 py-3 rounded-md text-2xl font-semibold" onClick={() => navigate("/select/0")}>Posição 1</button>
        <button className="bg-white text-black px-6 py-3 rounded-md text-2xl font-semibold" onClick={() => navigate("/select/1")}>Posição 2</button>
        <button className="bg-white text-black px-6 py-3 rounded-md text-2xl font-semibold" onClick={() => navigate("/select/2")}>Posição 3</button>
        <button className="bg-white text-black px-6 py-3 rounded-md text-2xl font-semibold" onClick={() => navigate("/select/3")}>Posição 4</button>
        <button className="bg-white text-black px-6 py-3 rounded-md text-2xl font-semibold" onClick={() => navigate("/select/4")}>Posição 5</button>
      </div>
    </div>
  );
};

export default Home;
