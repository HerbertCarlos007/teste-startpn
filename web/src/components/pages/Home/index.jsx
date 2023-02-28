import React, { useState } from "react";

import * as C from './styles'

import steveJobsImage from '../../../assets/stevejobs.png'
import backgroundImage from '../../../assets/background.png'
import { Login } from "../../Login";
import { Register } from "../../Register";
import { ForgotPassword } from "../../ForgotPassword";
import { ResendEmail } from "../../ResendEmail";
import { NewPassword } from "../../NewPassword";

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

                    {/* {isLoggin ? <Login/> : <Register switchLogin={switchLogin}/>} */}
                   <NewPassword/>
                    
                </C.RightSideContainer>
            </C.ContainerRegister>
        </C.Container>
    )
}