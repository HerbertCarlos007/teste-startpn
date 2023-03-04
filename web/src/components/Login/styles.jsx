import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
`

export const Logo = styled.img`
    position: relative;
    right: 126px;
`

export const ContainerFormLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

export const TextAccessData = styled.span`
    margin-top: 30px;
    font-size: 24px;
    font-weight: 500;
    color: #476EE6;
    position: relative;
    right: 126px;
`

export const ContainerInputs = styled.div`
    

`


export const LabelForm = styled.label`
    font-size: 16px;
    font-weight: 500;

`

export const FormInputs = styled.div`
     display: flex;
    flex-direction: column;
    margin-top: 30px;
`

export const Input = styled.input`
    width: 418px;
    height: 50px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;
`

export const ContainerButtonAndForgotPassword = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
`


export const ButtonLogin = styled.button`
    width: 185px;
    height: 48px;
    background-color: #476EE6;
    font-size: 18px;
    font-weight: 500;
    color: white;
    border-radius: 60px;
    border: 1px solid #476EE6;
    cursor: pointer;
`


export const TextForgotPassword = styled.span`
   margin-left: 90px;
   color:  #476EE6;
   cursor: pointer;
`

export const IconHidePassword = styled.div`
   position: relative;
   left: 380px;
   bottom: 35px;
   cursor: pointer;
   width: 0;
   height: 0;
`