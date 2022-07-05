import Content from '../components/Content';
import { Container, Footer, Topbar } from './styles/S_Home';



const Home = () => {
  return(
       
      <Container> {/* Page Container */}
        
        <Topbar> {/* Topbar containing Logo  */}
          <div>
            <img src="/images/logo.png" alt="" />
            <h2>Readems</h2>
          </div>
        </Topbar>
        
        <Content /> {/* Page Content Component Rendered from |Content.js| */}

        <Footer> {/* Page Footer */}
          <p>&copy; 2022 Readems</p>
        </Footer>

      </Container>
  )
}

export default Home;