import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  /* border: 2px solid white; */
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.75rem;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
`;
const ListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fc6ec3;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Projects</ListItem>
        </List>
      </Container>
    </Section>
  );
};

export default Navbar;
