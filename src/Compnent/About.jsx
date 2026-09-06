import React from "react";
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profileImg from '../Images/ProfileImage.png'

function About() {

    return (
        <Container>
            <img className="profilePicture" src={profileImg} alt = "Me" />
            
            <Row>
                <Col>
                    <p>
                         Hi my name is <span style={{ color: "#702FD0" }}>Nakheem</span>. A recent gradute from the University of British Columbia, gradutating with a Bachlors of Arts in Computers Science.
                        My fields of intrest are Web Development, UX/UI development and Game Development.
                    </p>
                </Col>
            </Row>
        </Container>

    );
}

export default About;