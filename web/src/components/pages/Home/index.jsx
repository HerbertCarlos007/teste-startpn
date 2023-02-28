import React, { useState } from "react";

import * as C from './styles'

import steveJobsImage from '../../../assets/stevejobs.png'
import backgroundImage from '../../../assets/background.png'
import { Login } from "../../Login";
import { Register } from "../../Register";

export const Home = () => {

    const [isLoggin, setIsLoggin] = useState(false)

    const switchLogin = () => {
        setIsLoggin(!isLoggin)
    }

    return(
        <C.Container>
            <C.ContainerRegister>
                <C.LeftSideContainer>
                    <C.ImageBackground src={backgroundImage} />
                    <C.Image src={steveJobsImage} />
                </C.LeftSideContainer>

                <C.RightSideContainer>

                    {isLoggin ? <Login switchLogin={switchLogin}/> : <Register switchLogin={switchLogin}/>}

                
                    
                </C.RightSideContainer>
            </C.ContainerRegister>
        </C.Container>
    )
}