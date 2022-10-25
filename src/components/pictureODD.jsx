import React,{useEffect,useState} from "react";
import { Card } from "react-bootstrap";

function PictureODD () {
    //useState para guardar la info de la foto
    const [post, setPost] = useState([]);

    //useEffect para hacer la petición a la API
    useEffect(() => {
       fetch('https://api.nasa.gov/planetary/apod?api_key=Nn2xraooEIFdKAARLSvfskkecU81nMkLpnA1RCO5')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPost(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return (
      <div className="container col-10 p-1 ">
        <div class="card mb-3" style={{ maxWidth: 1080 }}>
          <div class="row g-0">
            <div class="col-md-6">
              <img src={post.url} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-6">
              <Card.Body className="">
                <h6>Image of the day: {post.date}</h6>
                <h2>{post.title}</h2>
                <br />
                <Card.Text className="text-start">{post.explanation}</Card.Text>
                <p class="card-text text-end">
                  <small class="text-muted">Copyright: {post.copyright}</small>
                </p>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PictureODD;