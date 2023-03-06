import styled from "styled-components";


export const Container = styled.div`
    width: 390px;
   border-bottom: 1px solid #E8E8E8;
    height: 70px;
    display: flex;
    padding: 20px;

    @media (min-width: 1366px) {
        display: none;
    }
`

export const Content = styled.div`
   display: flex;
   width: 240px;
   justify-content: space-between;
   align-items: center;

`

export const IconMenu = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #476EE6;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.span`
    font-size: 23px;
    font-weight: 500;
`

