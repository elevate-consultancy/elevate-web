import React, { Component } from 'react'
import styled from 'styled-components'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const CarouselWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
  color: wheat;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    filter: blur(3px);
  }

  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 1000ms ease-in;
  }

  .transition-group,
  .transition {
    width: 100%;
    height: 100%;
  }
`

class FadeCarousel extends Component {
  state = {
    imageData: [],
    activeIndex: 0,
  }

  next = () => {
    this.setState(({ activeIndex }) => ({
      activeIndex: (activeIndex + 1) % this.state.imageData.length,
    }))
  }

  interval = setInterval(this.next, 8000)

  stop = () => clearInterval(this.interval)

  start = () => (this.interval = setInterval(this.next, 8000))

  componentDidMount() {
    this.setState({
      imageData: this.props.data.allFile.edges,
    })
  }

  render() {
    let currentImage = this.state.imageData[this.state.activeIndex]
    currentImage = currentImage && currentImage.node.childImageSharp.fluid
    return (
      <CarouselWrapper>
        <div className="overlay" />
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={this.state.activeIndex}
            timeout={1000}
            classNames="fade"
            className="transition"
          >
            <div>
              {currentImage && <img className="img" {...currentImage} />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </CarouselWrapper>
    )
  }
}

export default FadeCarousel
