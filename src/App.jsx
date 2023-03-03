import styled from "styled-components";
import Hero from "./components/Hero";
import About from "./components/About";
import Profiles from "./components/Profiles";

const Container = styled.div`
  height: 100vh;
  color: #fff;
  background: url("/assets/bg.jpeg");
  overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #da4ea2;
    border-radius: 24px;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Profiles />
    </Container>
  );
}

export default App;
