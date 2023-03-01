import React, { useState } from "react";
import { Register } from '../../components/Register'
import { Login } from '../../components/Login'
import { ForgotPassword } from '../../components/ForgotPassword'
import { ResendEmail } from '../../components/ResendEmail'
import { NewPassword } from '../../components/NewPassword'

export const Home = () => {

    const [formState, setFormState] = useState('register')

    const handleFormChange = (newState) => {
        setFormState(newState);
    };

    return (

        <>
             {formState === 'register' && (
                    <Register setFormState={setFormState}/>
                )}

                {formState === 'login' && (
                    <Login setFormState={setFormState}/>
                ) }

                {formState === 'forgotPassword' && (
                    <ForgotPassword setFormState={setFormState}/>
                )}

                {formState === 'resendEmail' && (
                    <ResendEmail setFormState={setFormState}/>
                )}

                {formState === 'newPassword' && (
                    <NewPassword setFormState={setFormState}/>
                )}
        </>

        // <Register />
        // <Login/>
        // <ForgotPassword />
        // <ResendEmail/>
        // <NewPassword/>
    )
}