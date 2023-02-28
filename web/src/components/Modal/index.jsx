import React from 'react'
import { Container, Translucent, Wrapper } from './styles'

export const Modal = ({ show, children, onClose, height, width }) => {
    return (
        <>
            {show ?
                <>
                    <Wrapper>
                        <Container width={width} height={height}>{children}</Container>
                        <Translucent onClick={onClose}></Translucent>
                    </Wrapper>
                </> : ''}

        </>
    )
}