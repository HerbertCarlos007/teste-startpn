import React from "react";

import * as C from './styles'

import steveJobsImage from '../../../assets/stevejobs.png'
import backgroundImage from '../../../assets/background.png'
import { Login } from "../../Login";
import { Register } from "../../Register";

export const Home = () => {
    return(
        <C.Container>
            <C.ContainerRegister>
                <C.LeftSideContainer>
                    <C.ImageBackground src={backgroundImage} />
                    <C.Image src={steveJobsImage} />
                </C.LeftSideContainer>

                <C.RightSideContainer>

                  {/* <Login/> */}
                  <Register/>
                    
                </C.RightSideContainer>
            </C.ContainerRegister>
        </C.Container>
    )
}