import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
    position: relative;
    right: 80px;
`

export const Logo = styled.img`
    position: relative;
    right: 18px;

    @media only screen and (max-width: 574px) {  
     right:0;
     left: 65px;
     bottom: 20px;
  }
`

export const TextForgotPassword = styled.span`
    font-size: 24px;
    color: #476EE6;
    font-weight: 600;
    margin-top: 30px;

    @media only screen and (max-width: 574px) { 
    position: relative;
     left: 65px;
     bottom: 15px;
  }
`

export const TextInstruction = styled.span`
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    position: relative;
    left: 50px;
    margin-top: 20px;

    @media only screen and (max-width: 574px) { 
    position: relative;
     left: 75px;
  }
`

export const ContainerForm = styled.div`
    position: relative;
    left: 100px;
    margin-top: 25px;   

  @media only screen and (max-width: 574px) {  
      left: 75px;   
  }
`

export const FormInput = styled.div`
     display: flex;
    flex-direction: column;
    
`

export const LabelForm = styled.label`
    font-size: 16px;
    font-weight: 500;

`

export const Input = styled.input`
    margin-top: 10px;
    width: 418px;
    height: 50px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;

    @media only screen and (max-width: 574px) {
      justify-content: center;
      width: 324px;
  }
`

export const ContainerActions = styled.div`
     margin-top: 30px;
    display: flex;
    align-items: center;
    margin-left: 200px;

    @media only screen and (max-width: 574px) {
      flex-direction: column;
      margin-left: 150px;
      margin-top: 50px;
  }
`

export const ButtonRecoverPassword = styled.button`
    width: 202px;
    height: 48px;
    background-color: #476EE6;
    border-radius: 60px;
    color: white;
    font-size: 18px;
    border: 1px solid #476EE6;
    cursor: pointer;

    @media only screen and (max-width: 574px) {
      width: 315px;
  }
`

export const TextRememberPassword = styled.span`
    font-size: 15px;
    color: #476EE6;
    margin-left: 90px;
    cursor: pointer;

    @media only screen and (max-width: 574px) {
        margin-left: 0;
      margin-top: 15px;
  }

`

