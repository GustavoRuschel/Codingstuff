import { Title, Title2 } from "./styles";

function Home() {
  function ChamaAlerta() {
    alert("Botão clicado");
  }
  function AbrePrompt() {
    var idade = prompt("Digite sua idade");
    if (idade == 10) {
      alert("você está novo ainda rapaz");
    }
  }
  return (
    <>
      <div>
        <Title>Fala ai meu querido</Title>
        <Title2>Teste</Title2>
        <button onClick={ChamaAlerta}>First button</button>
        <br />
        <br />
        <button onClick={AbrePrompt}>Second button</button>
        <br />
        <br />
        <input class="styled" type="text" />
      </div>
      <div>
        <h2>Lucy in the sky with diamonds</h2>
        <h3>Teste</h3>
      </div>
    </>
  );
}

export default Home;
