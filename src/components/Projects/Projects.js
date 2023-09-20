import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/denlhej9f/image/upload/v1693911951/New_Website_Blue_Mockup_Instagram_-_Laptop_2_1_u2t71x.png"
              isBlog={false}
              title="Evolve Marketing"
              description=""
              demoLink="https://evolvemarketng.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/denlhej9f/image/upload/v1693911951/New_Website_Blue_Mockup_Instagram_-_Laptop_4_qhoo0x.png"
              isBlog={false}
              title="Nidhi Vania Deco"
        
             
              demoLink="https://nidhivaniadecor.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/denlhej9f/image/upload/v1693911951/New_Website_Blue_Mockup_Instagram_-_Laptop_3_1_ganug5.png"
              isBlog={false}
              title="Sheetal Electrotech"
        

              demoLink="https://sheetalelectrotech.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/denlhej9f/image/upload/v1693911950/New_Website_Blue_Mockup_Instagram_-_Laptop_1_1_c1y6yg.png"
              isBlog={false}
              title="Pranam Realty"
        
              demoLink="https://pranamrealty.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/denlhej9f/image/upload/v1694258663/Fortune_x75zhl.png"
              isBlog={false}
              title="Fortune Enterprise"
          
  
              demoLink="https://fortuneenterprises.co.in/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
