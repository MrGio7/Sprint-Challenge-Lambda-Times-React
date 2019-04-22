import React, { Component } from 'react';
// Complete this Carousel 
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../../assets/carousel/mountains.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: '../../assets/carousel/computer.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: '../../assets/carousel/trees.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  },
  {
    src: '../../assets/carousel/turntable.jpeg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    header: 'Slide 4 Header'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;