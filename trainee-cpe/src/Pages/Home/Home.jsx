import { Container, Firstpart, ButtonEntrar, Title, SecondPart, Title2, ButtonCadastro } from "./Styles";
import { DivHeader } from "../Cadastro/Styles";
import { DivLogo } from "../Cadastro/Styles";

function Home() {
<<<<<<< Updated upstream
  return <div>Ola</div>;
}
export default Home;

/*<Container>
      <DivHeader>
        <DivLogo>
          <DivText>
            Assistec
          </DivText>
        </DivLogo>
      </DivHeader>
    </Container>*/
=======
  return (
    <Container>
      <Firstpart>
        <Title> Já tem uma conta?</Title>
        <ButtonEntrar>Entrar</ButtonEntrar>
      </Firstpart>
      <SecondPart>
        <Title2>Ou cadastre-se:</Title2>
        <ButtonCadastro>Cadastre-se</ButtonCadastro>
      </SecondPart>
    </Container>
  );
}
export default Home;
>>>>>>> Stashed changes
