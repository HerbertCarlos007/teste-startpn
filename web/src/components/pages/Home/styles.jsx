import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow-y: hidden;
    
`

export const ContainerRegister = styled.div`
    width: 1366px;
    height: 812px;
    background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 20px;
    display: flex;

    @media only screen and (max-width: 574px) {
        border: none;
    }

`

export const LeftSideContainer = styled.div`
      @media only screen and (max-width: 574px) {
        display: none;
    }
`

export const RightSideContainer = styled.div`
   width: 100%;
   
`

export const ImageBackground = styled.img`
    border: 1px solid #D7D7D7;
    border-radius: 20px;
    z-index: -10;
`

export const Image = styled.img`
    position: relative;
    bottom: 682px;
    left: 1px;
`

