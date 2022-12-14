import { useState } from "react";
import styled from "styled-components";

export default function Chute(props) {
  const [texto, setTexto] = useState("");

  function validaChute() {
    setTexto("");
    if (
      props.normalizaPalavra(texto) === props.normalizaPalavra(props.palavra)
    ) {
      props.finalizaJogo("venceu");
    } else {
      props.finalizaJogo("perdeu");
    }
  }

  return (
    <Container>
      <label>
        Já sei a palavra!
        <input
          data-test="guess-input"
          onChange={(e) => setTexto(e.target.value)}
          type="text"
          disabled={props.toggle}
          value={texto}
        ></input>
        <input
          data-test="guess-button"
          onClick={validaChute}
          type="button"
          value="Chutar"
          disabled={props.toggle}
        ></input>
      </label>
    </Container>
  );
}

const Container = styled.div`
  width: 624px;
  height: 40px;

  label {
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input[type="button"] {
    height: 100%;
    width: 100px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    background-color: var(--background-azul);
    color: var(--fonte-azul);
    border: 1px solid var(--borda-azul);
  }

  input[type="text"] {
    height: 100%;
    width: 353px;
    border: 1px solid var(--borda-cinza);
    box-shadow: 2px 2px 5px var(--sombra);
    border-radius: 3px;
    padding-left: 10px;
    font-size: 16px;
    :focus {
      outline: none;
    }
  }
`;
