import './App.css';
// import Bootstrap from "react-bootstrap"
import RenderUserNav from "./components/nav/userNav";
import Container from "./components/layout/Container";
import RenderNavbar from './components/nav/Navbar';
import Layout from './components/layout/Layout';



function App() {
  return (<div>
    <RenderNavbar />
  <Container>
  <Layout/>
      <RenderUserNav />
  </Container>
  </div>


  )
};




export default App;
