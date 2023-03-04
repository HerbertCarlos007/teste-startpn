import styled from "styled-components";

export const Container = styled.div`
   
    justify-content: center;
    align-items: center;
    display: flex;
    overflow-y: hidden;
    @media only screen and (max-width: 574px) {
    height: 100%;
        
    }
    
`

export const Logo = styled.img`
    @media only screen and (max-width: 574px) {
      margin-left: 56px;
      margin-top: 10px;
        
    }

`

export const ContainerForm = styled.div`
    margin-top: 90px;
    margin-left: 30px;

    @media only screen and (max-width: 574px) {
        margin-top: 0px;
        margin-left: 0;
        
        
    }

`

export const TextRegister = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: #476EE6;
    position: relative;
    bottom: 20px;

    @media only screen and (max-width: 574px) {
        margin-top: 0px;
        margin-left: 0;
        left: 55px;
    }
`

export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;

`

export const UpFormInputs = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;

    @media only screen and (max-width: 574px) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0;
        margin-top: 5px;
    }

    
    

`

export const DownFormInputs = styled.div`
     display: flex;
    gap: 30px;
    margin-top: 25px;

    @media only screen and (max-width: 574px) {
        gap: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 5px;
    }

`

export const LabelForm = styled.label`
    font-size: 16px;
    font-weight: 500;

`

export const Input = styled.input`
    width: 290px;
    height: 50px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;

      
    @media only screen and (max-width: 574px) {
        width: 324px;
    height: 50px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;
    }
`

export const ContainerTerms = styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 574px) {
        margin-top: 5px;
        width: 370px;
    }

`

export const TextTerms = styled.span`
    font-size: 14px;
    font-weight: 600;
   
    @media only screen and (max-width: 574px) {
      position: relative;
      left: 63px;
        bottom: 16px;
    }
`

export const Checkbox = styled.input`
    margin-top: 10px;
    border-color: red;

    @media only screen and (max-width: 574px) {
      position: relative;
      left: 46px;
        bottom: 16px;
    }
`

export const TextTermsOfConsent = styled.span`
    margin-left: 10px;

    @media only screen and (max-width: 574px) {
      position: relative;
      left: 50px;
        bottom: 16px;
    }

`

export const TermsOfUseAndPrivacy = styled.span`
    color: #476EE6;
    position: relative;
    top: 20px;
    left: 25px;

    @media only screen and (max-width: 574px) {
      position: relative;
      left: 50px;
        bottom: 16px;
    }

`

export const ButtonRegister = styled.button`
    width: 267px;
    height: 45px;
    margin-top: 60px;
    margin-left: 180px;
    background: #476EE6;
    border: 1px solid #476EE6;
    border-radius: 60px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    @media only screen and (max-width: 574px) {
      position: relative;
      right: 90px;
    }
`

export const ContainerHaveAccount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

export const TextHaveAccount = styled.span`
    color: #3C3C43 ;
    opacity: 0.8;
    position: relative;
    bottom: 30px;
    @media only screen and (max-width: 574px) {
      position: relative;
      bottom: 20px;
     
    }
`

export const TextLogin = styled.span`
    margin-left: 10px;
    color: #476EE6;
    cursor: pointer;
    position: relative; 
    bottom: 30px;
    @media only screen and (max-width: 574px) {
      position: relative;
      bottom: 20px;
    }
;
`
export const IconHidePassword = styled.div`
   position: relative;
   left: 260px;
   bottom: 35px;
   cursor: pointer;
   width: 0;
   height: 0%;
`