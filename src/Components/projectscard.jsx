import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";


const ProjectCard = (props) => {
  return (
    <Container className="pro_wrapper">
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="pro_header">{props.title}</Card.Title>
        <Card.Text className="tech_projects_used">{props.techUsed}</Card.Text>
        <Card.Text className="pro_description">
        {props.description}
        </Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.demoLink && (
          <Row className="d-flex justify-content-center">
          <Button 
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="project_btn"
          >
            {"Demo"}
          </Button>
          </Row>
        )}
      </Card.Body>
    </Card>
    </Container>
  );
}

export default ProjectCard;