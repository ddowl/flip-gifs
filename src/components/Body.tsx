import * as React from 'react';
import './Body.css';
import { Carousel } from 'react-bootstrap';

const gifNames = ['alc', 'brown', 'camera', 'handrail', 'human', 'interview', 'trampoline'];

const carouselItems = gifNames.map((name, i) => {
  return (
    <Carousel.Item key={i}>
      <img key={i} src={`gifs/${name}-flip.gif`} />
    </Carousel.Item>
  );
});

class Body extends React.Component {
  public render() {
    return (
      <div className="Body">
        <Carousel interval={ null }>
          { carouselItems }
        </Carousel>;
      </div>
    );
  }
}

export default Body;