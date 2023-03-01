import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    z-index: 5;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #D7D7D7;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
`

export const Translucent = styled.div`
    height: 100%;
    width: 100%;
    z-index: 4;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 50%;
`
