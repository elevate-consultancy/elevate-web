import styled, { keyframes } from 'styled-components'
/*
  $color-primary-0: #3D4F9B;	// Main Primary color
  $color-primary-1: #8795CE;
  $color-primary-2: #596AAF;
  $color-primary-3: #24388B;
  $color-primary-4: #15266D;

  $color-secondary-1-0: #5A3B9C;	// Main Secondary color (1)
  $color-secondary-1-1: #9C86CE;
  $color-secondary-1-2: #7458B0;
  $color-secondary-1-3: #43228C;
  $color-secondary-1-4: #30136E;

  $color-secondary-2-0: #2F798E;	// Main Secondary color (2)
  $color-secondary-2-1: #7AB4C4;
  $color-secondary-2-2: #4A8DA0;
  $color-secondary-2-3: #18687F;
  $color-secondary-2-4: #0B5064;
*/

export const slideInRight = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
`

export const SlideInRight = styled.div`
  animation: ${slideInRight} 1s 0.25s ease-in-out backwards;
`

export const slideInBottom = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
`

export const SlideInBottom = styled.div`
  animation: ${slideInBottom} 1s 0.25s ease-in-out backwards;
`
