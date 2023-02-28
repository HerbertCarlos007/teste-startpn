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
    
    const [formState, setFormState] = useState('register')

    const handleFormChange = (newState) => {
        setFormState(newState);
      };
    

    return(
        <C.Container>
            <C.ContainerRegister>
                <C.LeftSideContainer>
                    <C.ImageBackground src={backgroundImage} />
                    <C.Image src={steveJobsImage} />
                </C.LeftSideContainer>

                <C.RightSideContainer>
                    
                {formState === 'register' ? (
                    <Register setFormState={setFormState}/>
                ): ''}

                {formState === 'login' ? (
                    <Login setFormState={setFormState}/>
                ) : ''}

                {formState === 'forgotPassword' ? (
                    <ForgotPassword setFormState={setFormState}/>
                ): ''}

                {formState === 'resendEmail' ? (
                    <ResendEmail setFormState={setFormState}/>
                ) : ''}

                {formState === 'newPassword' ? (
                    <NewPassword setFormState={setFormState}/>
                ) : ''}

                </C.RightSideContainer>
            </C.ContainerRegister>
        </C.Container>
    )
}