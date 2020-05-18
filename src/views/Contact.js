import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
 return (
        <section className="Links">
    <Container fluid>
        <h1><a href="https://blipsett.github.io/Portfolio/Lipsett%20Resume.PDF" className="btn" id="res" download>Resume</a>
        </h1>
        <h1><a href="https://www.linkedin.com/in/brian-lipsett-b14b151a2/" className="btn" id="res">LinkedIn</a></h1>
        <h1><a href="https://github.com/BLipsett" className="btn" id="res">GitHub &nbsp;</a></h1>
    </Container>
    </section>
 );
};

export default Contact;
