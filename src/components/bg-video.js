import React from 'react'
import styled from 'styled-components'

import mp4 from '../videos/Home_work.mp4'
import webm from '../videos/Home_work.webm'

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const VideoWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
`

const BgVideo = () => (
  <VideoWrapper>
    <Video autoPlay muted loop>
      <source type="video/mp4" src={mp4} />
      <source type="video/webm" src={webm} />
    </Video>
  </VideoWrapper>
)

export default BgVideo
