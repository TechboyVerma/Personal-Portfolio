import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.jpg";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/proj4.png";
import projImg5 from "../assets/img/proj5.png";
import projImg6 from "../assets/img/proj6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "No Broker",
      description: "Design & Development",
      imgUrl: projImg1,
      link:"https://github.com/khansalikaziz/NoBroker"
    },
    {
      title: "Vison Chat",
      description: "Chatting Application",
      imgUrl: projImg2,
      link:"https://github.com/khansalikaziz/Vision_Chat-Chat-application-using-React-and-Firebase-"
    },
    {
      title: "Amazon Clone",
      description: "Ecommerce Web Application",
      imgUrl: projImg3,
      link:"https://github.com/khansalikaziz/Amazon-clone-using-React-and-Firebase"
    },
    {
      title: "VisonMile",
      description: "E-learning Platform",
      imgUrl: projImg4,
      link:"https://github.com/khansalikaziz/VisionMile"
    },
    {
      title: "Eye Detecttion",
      description: "Video Player",
      imgUrl: projImg5,
      link:"https://github.com/khansalikaziz/Eye-Detection-Video-player-Java--Using-Android-Studio"
    },
    {
      title: "TextUtils",
      description: "Web Application",
      imgUrl: projImg6,
      link:"https://github.com/khansalikaziz/TextUtils"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div  className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>To be updated with new projects.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be updated with new projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
