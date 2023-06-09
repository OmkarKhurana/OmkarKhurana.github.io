import { Col, Container, Row, Tab, Nav} from "react-bootstrap";
import React, { Component } from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Project #1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project #2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project #3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Project #4",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project #5",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project #6",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="poject">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Commodo dolore pariatur laboris incididunt deserunt consequat
              laborum culpa eu irure.Lorem laboris voluptate eu duis sunt esse
              do.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Nulla ipsum deserunt consectetur velit quis veniam quis
                  laboris ea duis quis mollit.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Mollit cillum elit irure sint aute occaecat pariatur irure ea.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="image" />
    </section>
  );
};
