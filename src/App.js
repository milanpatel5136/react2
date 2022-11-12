import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <div>
 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/about'}>about</Link>
            <Link className='nav-link' to={'/products'}>products</Link>
          </Nav>
          <Nav>
              <Link className='nav-link' to={'/login'}>login</Link>
            </Nav>
        </Navbar.Collapse>
         
      </Container>
    </Navbar>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/about' element={<h1>about</h1>}/>
      <Route path='/products' element={<h1>product list</h1>}/>
      <Route path='/product-detail/:id' element={<h1>product detail</h1>}/>
      <Route path='/login' element={<h1>login</h1>}/>
    </Routes>
      </div>
  );
}

export default App;
