import styled from "styled-components";

export const Logo = styled.img`
    margin-top: 20px;
    margin-left: 20px;

    
`

export const Container = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    @media only screen and (min-width: 574px) {
        display: none;
    }
`

export const SlideBar = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.xOffset}px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  transition: left 0.3s ease;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 24px;
`;

export const Overlay = styled.div`
`
