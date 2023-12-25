import {
  Container,
  IconItem,
  IconShadow,
  MainTitle,
  Slogan,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <div>
        <MainTitle>My phonebook</MainTitle>
        <Slogan>Only mine!</Slogan>
      </div>
    </Container>
  );
};

export default HomePage;
