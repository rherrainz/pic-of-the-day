import Card from  'react-bootstrap/Card' ;
import Button from  'react-bootstrap/Button' ;
import { Link } from 'react-router-dom';

const Home = () => {
    return(
    <div className="container col-10 p1 align-items-center justify-content-between">
      <Card align-items-center>
        <Card.Body>
        <Card.Header>Una foto del Espacio cada día</Card.Header>
          <h3>Bienvenidos a la <b className="text-primary">foto del día de la NASA</b></h3>
          <p>Con esta App podrás ver la foto diaria del espacio provista por NASA.</p>
          <Link to="picture"><Button variant="primary">Ver la foto de hoy!</Button></Link>
        </Card.Body>
      </Card>
    </div>
    );
  }
  
  export default Home;