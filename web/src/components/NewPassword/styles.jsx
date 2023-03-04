import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
     background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow-y: hidden;
`

export const Content = styled.div` 
     width: 1366px;
    height: 812px;
    background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 20px;
    display: flex;

   
`

export const LeftSection = styled.div`
     @media only screen and (max-width: 574px) {
        display: none;
    }
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



export const RightSection = styled.div`
   
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    @media only screen and (max-width: 574px) {
       align-items: center;
    }

`

export const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
`

export const ImageLogo = styled.img`
    width: 190px;
    height: 50px;
    margin-right: 180px;

    @media only screen and (max-width: 574px) {
      margin-right: 0;
       
    }
`

export const TextNewPassword = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: '#476EE6';
    margin-right: 150px;
    margin-top: 20px;

    @media only screen and (max-width: 574px) {
      margin-right: 0;
       
    }
`

export const TextInstructions = styled.span`
    margin-top: 20px;

    @media only screen and (max-width: 574px) {
    margin-left: 35px;
       
    }
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const LabelForm = styled.label`
`

export const Input = styled.input`
    width: 418px;
    height: 50px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    background: #FFFFFF;
    margin-top: 10px;
    padding-left: 10px;

    @media only screen and (max-width: 574px) {
       align-items: center;
       width: 324px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    margin-top: 30px;
    margin-left: 135px;
    align-items: center;

    @media only screen and (max-width: 574px) {
     flex-direction: column;
       margin-left: 0;

    }
`

export const ButtonCreatePassword = styled.button`
    width: 202px;
    height: 50px;
    background-color: #476EE6;
    border-radius: 60px;
    cursor: pointer;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 20;
    border: 1px solid #476EE6;

    @media only screen and (max-width: 574px) {
       align-items: center;
       width: 315px;
    }
`

export const TextRememberPassword = styled.span`
    color: #476EE6;
    font-weight: 500;
    margin-left: 70px;
    cursor: pointer;

    @media only screen and (max-width: 574px) {
       margin-left: 0;
       margin-top: 15px;
       
    }
`

