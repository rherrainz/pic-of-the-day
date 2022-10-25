import Card from 'react-bootstrap/Card';


const About = () => {
    return(
    <>
      <Card>
        <Card.Header>Acerca de:</Card.Header>
        <Card.Body>
          <Card.Text>
            App desarrollada por Rodrigo Herrainz.
          </Card.Text>
        </Card.Body>
        <Card.Footer className=""><a className="text-secondary" href="https://www.linkedin.com/in/rherrainz"><i class="bi bi-linkedin"></i></a> | <a className="text-secondary" href="https://www.github.com/rherrainz"><i class="bi bi-github"></i></a></Card.Footer>
      </Card>

    </>
    );
  }
  
  export default About;