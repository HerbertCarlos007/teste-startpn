import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const HeaderTable = styled.div`
    width: 1165px;
    height: 55px;
    background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    position: relative;
    right: 100px;

    @media (max-width: 1366px) {
        width: 890px;
    }
`

export const ContentHeaderTable = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 15px;
    position: relative;
    right: 140px;

    @media (max-width: 1366px) {
        position: relative;
        right: 95px;
    }
`

export const Checkbox = styled.input`
    
`


export const ContainerTable = styled.div`
     width: 1165px;
     height: 75px;
     background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 18px;
    margin-right: 200px;
    @media (max-width: 1366px) {
        width: 890px;
    }
`

export const ContentTable = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
    position: relative;
    right: 20px;

    @media (max-width: 1366px) {
        position: relative;
        right: 3px;
    }
`


export const TextInformationsOutsider = styled.span`
    font-size: 14px;
    color: #101828;
    font-weight: 600;
`

export const TextName = styled.span`
     font-size: 14px;
    color: #6A6A6A;
    font-weight: 500;
    position: relative;
    right: 55px;
`

export const TextEmail = styled.span`
    font-size: 14px;
    color: #6A6A6A;
    font-weight: 500;
    position: relative;
    right: 65px;
`

export const TextNumber = styled.span`
    font-size: 14px;
    color: #6A6A6A;
    font-weight: 500;
    position: relative;
    right: 33px;
`

export const TextAdress = styled.span`
    font-size: 14px;
    color: #6A6A6A;
    font-weight: 500;
    position: relative;
    right: 55px;
`

export const IconMenu = styled.div`
    cursor: pointer;
`

export const ModalContainer = styled.div`
    

`

export const TopSectionModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
   
` 

export const TextTitleModal = styled.span`
    font-size: 18px;
    font-weight: 600;
`

export const IconClose = styled.div`
    font-size: 30px;
`

export const Line = styled.div`
    width: 375px;
    height: 2px;
    background-color: #D7D7D7;
    margin-top: 15px;

`

export const MidSectionModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
    padding-bottom: 50px;
`

export const TextEditOutsider = styled.span`
      font-size: 18px;
      color: #030303;
      font-weight: 600;
      cursor: pointer;
`

export const TextDeleteOutsider = styled.span`
    margin-top: 15px;
    font-size: 18px;
    color: #EA0000;
    cursor: pointer;
    font-weight: 600;
`