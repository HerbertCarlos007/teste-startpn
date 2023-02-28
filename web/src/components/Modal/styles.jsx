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
    border-radius: 8px;
    border: 1px solid #412972;
    box-shadow: 2px 2px 5px black;
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
