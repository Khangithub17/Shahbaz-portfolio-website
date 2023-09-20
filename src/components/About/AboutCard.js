import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahbaz Khan </span>
            from <span className="purple"> Vapi, Gujarat, India.</span>
            <br /> I have Completed my Degree in (BE) Civil Engineering From GTU.
            <br />
            Additionally, I am currently employed as a Web Developer at Evolve Marketing
            Vapi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shahbaz Khan</footer>
        </blockquote>
  
          <h4>Certification</h4>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack Developer(NextWave)
            </li>
            <li className="about-activity">
              <ImPointRight /> React Js (Coursera)
            </li>
            <li className="about-activity">
              <ImPointRight /> Python(NxtWave,Hackerank)
            </li>
            <li className="about-activity">
              <ImPointRight /> React Native (Coursera)
            </li>
            <li className="about-activity">
              <ImPointRight /> HTML,CSS,JS,BOOSTRAP (NxtWave)
            </li>
            <li className="about-activity">
              <ImPointRight /> SQL (NxtWave,Hackerank)
            </li>
            <li className="about-activity">
              <ImPointRight /> Node JS (NxtWave)
            </li>
          </ul>
        
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
