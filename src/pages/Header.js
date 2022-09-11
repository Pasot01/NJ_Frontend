import { StyleHeader, Nav, Logo, Image } from "./styles/header-style"
import { Container } from './styles/container-style'
import { Flex } from './styles/flex-style'
import { Button } from './styles/button-style'

export default function Header() {
  return (
    // <StyleHeader bg='#ebfbff'>
    <StyleHeader>
      <Container>

        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <a href="/login"><Button>Connexion</Button></a>
        </Nav>

        <Flex>
          <div>
            <h1>Construisez maintenant votre parcour de formation d'agent d'accueil</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Découvrez les modules
            </Button>
          </div>
          <Image src='./images/undraw_voice_control_ofo1.svg' alt='' />
        </Flex>

      </Container>
    </StyleHeader>
  )
}
