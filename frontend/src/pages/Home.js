import Content from '../components/Content';
import { Container, Topbar } from './styles/S_Home';



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

      </Container>
  )
}

export default Home;