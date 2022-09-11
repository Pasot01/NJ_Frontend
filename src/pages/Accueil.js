import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global-style'
import Header from './Header'
import Card from './Card'
import { Container } from './styles/container-style'
import content from '../content'
import Footer from './Footer'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

const Accueil = () => {
    return (
      <ThemeProvider theme = {theme}>
      <>
      <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
    )
}

export default Accueil