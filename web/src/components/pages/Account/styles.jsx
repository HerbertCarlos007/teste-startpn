import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color:#E5E5E5;
    height: 100vh;

    @media only screen and (max-width: 574px) {
        background-color: #fff;
        
    }

`

export const SidebarContainer = styled.div`
    
`

export const AllContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 713px;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 15px;
    margin-top: 50px;
    margin-right: 300px;

    @media only screen and (max-width: 574px) {
        margin-top: 0px;
        margin-right: 0px;
        border: none;
        width: 390px;
        position: relative;
        bottom: 20px;
    }

`

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
 
`

export const ContainerInputs = styled.div`
    margin-top: 30px;
    padding-bottom: 20px;

    @media only screen and (max-width: 574px) {
        margin-top: 0px;
    }
`

export const UpFormInputs = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;

    @media only screen and (max-width: 574px) {
        flex-direction: column;
        gap: 0;
        margin-top: 0;
        
    }
`

export const FormInputs = styled.div`
     display: flex;
    flex-direction: column;
`

export const LabelForm = styled.label`
    font-size: 16px;
    font-weight: 500;
`

export const InputNewOutsider = styled.input`
    width: 265px;
    height: 45px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;

    @media only screen and (max-width: 574px) {
        width: 315px;
    }

`

export const CenterFormInputs = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;
    @media only screen and (max-width: 574px) {
        flex-direction: column;
        gap: 0;
        margin-top: 0;    
    }
`

export const ContainerButtonSave = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonSave = styled.button`
    width: 190px;
    height: 43px;
    background-color: #476EE6;
    border: 0.5px solid #D7D7D7;
    border-radius: 60px;
    color: #FFF;
`
