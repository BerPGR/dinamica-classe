import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-950 min-h-screen text-white flex flex-col items-center p-4">
      <h1 className="font-bold text-4xl pt-10">Qual é a senha?</h1>
      <p className="mt-10">Se você jogou o jogo <strong>Qual É A Senha?</strong>, você sabe como funciona!</p>
      <ol className="mt-10">
        <li>1 - Diga palavras que remetam a palavra que está na tela;</li>
        <li>2 - Ao acertar, clique na <strong>caixinha branca</strong> para marcar a palavra;</li>
        <li>3 - Ao marcar a palavra, clique no botão <strong>Próxima Palavra</strong>;</li>
        <li>4 - Quando a próxima palavra aparecer, passe o celular para o amigo do lado.</li>
      </ol>
      <h3 className="text-4xl pt-10">Prontos para jogar?</h3>
      <div className="flex flex-col gap-10 mt-10">
        <button className="bg-white text-black px-6 py-3 rounded-md text-2xl font-semibold" onClick={() => navigate("/game")}>Pronto!</button>
      </div>
    </div>
  );
};

export default Home;
