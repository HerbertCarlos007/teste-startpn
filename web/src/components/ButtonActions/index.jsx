import React from "react";
import * as C from './styles'

export const ButtonActions = ({children}) => {
    return(
        <C.Container>
            <C.ButtonActions>{children}</C.ButtonActions>
        </C.Container>
    )
}