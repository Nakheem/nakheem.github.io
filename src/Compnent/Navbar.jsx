import './Navbar.css';
import logo from '../Images/profile.png';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import resume from '../Document/NakheemDuhaneyResume.pdf'


function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Email: Nakheem.Duhaney@hotmail.com
          LinkedIn: linkedin.com/in/nakheem

        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}  className='cardButton'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModalResume(props) {

  return (
    <Modal
      {...props}
      size="xl"
      fullscreen ="true"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <object data={resume} type="application/pdf" width="1000px" height="1000px">

      </object>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}  className='cardButton'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function MainNav(props){
  const [modalShow, setModalShow] = useState(false);
  const [modalShowResume, setModalShowResume] = useState(false);
    return(
      <>
        <Navbar>
        {/* <Container> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="navBarLink" href="#home">Home</Nav.Link>
              <Nav.Link className="navBarLink" href="#Projects">Projects</Nav.Link>
              <Nav.Link className="navBarLink" onClick={() => setModalShowResume(true)}>Resume</Nav.Link>
              <Nav.Link className="navBarLink" href="https://github.com/nakheem">GitHub</Nav.Link>
              <Nav.Link className="navBarLink"  onClick={() => setModalShow(true)}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      <MyVerticallyCenteredModal
        className = "cardText"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <MyVerticallyCenteredModalResume
        className = "cardText"
        show={modalShowResume}
        onHide={() => setModalShowResume(false)}
      />
      </>
    );
}

export default MainNav;