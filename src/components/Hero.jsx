import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 90vh;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  line-height: normal;
  font-size: 74px;
`;
const Tags = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Description = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  user-select: none;
  background-color: #da4ea2;
  font-size: 14px;
  color: white;
  width: 100px;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #c33d8d;
  }
  &:active {
    background-color: #b12c7c;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const BigImg = styled.img`
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hi, I am Avaneesh</Title>
          <Tags>
            <Line src="/assets/line.png" />
            <Subtitle>Developer and UI/UX Designer</Subtitle>
          </Tags>
          <Description>
            I am a passionate developer and I enjoy building apps.
          </Description>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <BigImg src="/assets/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
