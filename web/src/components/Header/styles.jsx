import styled from "styled-components";

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 50px;
    margin-top: 40px;
    position: relative;
    right: 100px;
`

export const TextOutsider = styled.span`
    font-size: 30px;
    color: #476EE6;
    font-weight: 600;

    @media only screen and (max-width: 574px) {
        display: none;
    }
`


export const DropDown = styled.div`
 @media only screen and (max-width: 574px) {
        display: none;
    }
`

export const ImagePerfil = styled.img`
`

export const TextName = styled.span`
    margin-left: 10px;
    margin-right: 10px;
    color: #000;
    font-family: 'Comfortaa', cursive;
`
