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
    right: 30px;
`

export const ContainerNewPassword = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    margin-right: 35px;
    
`

export const TextNewPassword = styled.span`
    font-size: 24px;
    color: #476EE6;
`

export const TextInstructions = styled.span`
   position: relative;
   left: 70px;
   margin-top: 20px;
`

export const ContainerForm = styled.div`
    margin-top: 20px;
    margin-left: 200px;
`

export const FormInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;

`

export const LabelForm = styled.label`
    
`

export const Input = styled.input`
    width: 418px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    padding-left: 10px;
    margin-top: 10px;
`

export const ContainerActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    margin-top: 30px;
    gap: 80px;
`

export const ButtonCreatePassword = styled.button`
    width: 202px;
    height: 50px;
    background: #476EE6;
    border-radius: 60px;
    font-size: 18px;
    border: 1px solid #476EE6;
    color: white;
    cursor: pointer;
`

export const TextRemeberPassword = styled.span`
    cursor: pointer;
    color: #476EE6;
`