import Carousel from 'react-bootstrap/Carousel';
 
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img width="100%" height="400" src='https://cdn.pixabay.com/photo/2021/12/09/20/43/orange-background-6859059_1280.jpg'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400" src='https://files.123freevectors.com/wp-content/original/157364-abstract-red-background-vector-illustration.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" height="400" src='https://img.freepik.com/free-vector/yellow-background-with-center-glowing-light-effect_1017-26185.jpg'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;