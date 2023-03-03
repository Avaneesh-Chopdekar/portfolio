import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  line-height: normal;
  font-size: 68px;
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
  background-color: #da4ea2;
  user-select: none;
  font-size: 14px;
  color: white;
  width: 140px;
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

const About = () => {
  return (
    <Section>
      <Container>
        <Left>{/* 3d model */}</Left>
        <Right>
          <Title>Everything you can imagine is real.</Title>
          <Tags>
            <Line src="/assets/line.png" />
            <Subtitle>Pablo Picasso</Subtitle>
          </Tags>
          <Description>
            Imagination is the beginning of creation. You imagine what you
            desire, you will what you imagine, and at last, you create what you
            will
          </Description>
          <Button>See my projects</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
