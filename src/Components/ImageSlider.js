import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  NavLink,
} from 'reactstrap';
import Login from './Login';

import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';

const items = [
  {
    src: './Images/back1.jpg',
    altText: 'Slide 1',
    caption: 'BloodManager',
  },
  {
    src: './Images/back1.jpg',
    altText: 'Slide 2',
    caption: 'BloodManager',
  },
  {
    src: './Images/back1.jpg',
    altText: 'Slide 3',
    caption: 'BloodManager'
  }
];

const ImageSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Button className="loginbtn btn-success"><NavLink href='/login'>Login</NavLink></Button> 
        <Router>
          <Switch>
            <Route path='login'>
              <Login/>
            </Route>
          </Switch>
          </Router>  
        <Button className="Registerbtn btn-success">SignUP New Account</Button>      
        <img src={item.src} alt={item.altText} width="100%" height="600" />
        <CarouselCaption className="CaptionColor" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default ImageSlider;