import { VelcampLogo } from "./components/Menues";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;
const Title = styled.span`
  color: white;
  font-weight: 900;
  font-size: 4vw;
`;
const Wrapper = styled.div`
  height: 18vh;
  width: 50vw;
  background: linear-gradient(90deg, crimson, #222, crimson);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid crimson;
  border-radius: 1em;
  &:hover {
    filter: brightness(1.3) saturate(1.5);
    box-shadow: 0 0 5px 2px crimson;
  }
`;

function App() {
  return (
    <div className="App">
      <VelcampLogo />
      <Container>
        <Link to="/calculadora" className="remove-underline">
          <Wrapper>
            <Title>CALCULADORA</Title>
          </Wrapper>
        </Link>
        <Link to="/clicker" className="remove-underline">
          <Wrapper>
            <Title>CLICKER</Title>
          </Wrapper>
        </Link>
        <Link to="/tareas" className="remove-underline">
          <Wrapper>
            <Title>TAREAS</Title>
          </Wrapper>
        </Link>
        <Link to="/testimonios" className="remove-underline">
          <Wrapper>
            <Title>TESTIMONIOS</Title>
          </Wrapper>
        </Link>
      </Container>
    </div>
  );
}

export default App;
