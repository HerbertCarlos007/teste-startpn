import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 395px;
    height: 145px;
    background-color: #FFF;
    border: 1px solid #D8D8D8;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    @media only screen and (min-width: 574px) {
        display: none;

    }

    @media only screen and (max-width: 574px) {
       position: relative;
       bottom: 91px;
       right: 80px;
    
    }  
`

export const Content = styled.div`
    width: 380px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const IconMenu = styled.div`
    
`

export const ImageLogo = styled.img`
    
  
`

export const ImagePerfil = styled.img`

`

