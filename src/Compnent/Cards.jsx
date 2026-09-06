import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


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
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.information}
        </p>
      </Modal.Body>
      <Modal.Footer>
      {props.github ? <a href={props.github}> <Button className= "cardButton" >GitHub</Button></a> :null}
      {props.link ? <a href={props.link}> <Button className= "cardButton" >{props.buttonTitle}</Button> </a> :null}
        <Button onClick={props.onHide}  className='cardButton'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Cards(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Card className= "cardBody" style={{ width: '400px', marginRight: '20px'}}>
      <Card.Img className ="cardImage" variant="top" src={props.image} alt={props.alt}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button className= "cardButton" color="#C02FD0" variant="primary" href={props.buttonLink} onClick={() => setModalShow(true)} >{props.buttonText} </Button>
      </Card.Body>
    </Card>

    <MyVerticallyCenteredModal
        className = "cardText"
        show={modalShow}
        onHide={() => setModalShow(false)}
        title = {props.title}
        information = {props.information}
        link = {props.link}
        buttonTitle = {props.buttonTitle}
        github = {props.github}
      />
    </>
  );
}

export default Cards;