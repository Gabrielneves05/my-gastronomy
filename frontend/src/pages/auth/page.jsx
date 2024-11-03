import { useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from './page.module.css';
import authServices from "../../services/auth";

export default function Auth() {
    const [formType, setFormType] = useState('login')
    const [formData, setFormData] = useState(null)
    const { login, signup, authLoading } = authServices()

    const handleChangeFormType = () => {
        setFormData(null)

        if(formType === 'login') {
            setFormType('signup')
        } else {
            setFormType('login')
        }
    }

    const handleFormDataChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()

        switch(formType) {
            case 'login':
                login(formData)
            break
            case 'signup':
                if(formData.password !== formData.confirmPassword) {
                    console.log('Senhas não são iguais')
                    return
                }

                signup(formData)
            break
        }
    }

    if(authLoading) {
        return ( <h1>Loading...</h1> )
    }

    if(formType === 'login') {
        return (
            <div className={styles.authPageContainer}>
                <h1>Login</h1>
                <button onClick={handleChangeFormType}>Ainda não possui uma conta? Clique aqui</button>
                <form onSubmit={handleSubmitForm}>
                    <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                    />

                    <TextField 
                        required
                        label="Senha"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                    />

                    <Button type="submit">Login</Button>
                </form>
            </div>
        )
    }

    if(formType === 'signup') {
        return (
            <div className={styles.authPageContainer}>
                <h1>Signup</h1>
                <button onClick={handleChangeFormType}>Já possui uma conta? Clique aqui</button>
                <form onSubmit={handleSubmitForm}>
                    <TextField 
                        required
                        label="Nome Completo"
                        type="fullname"
                        name="fullname"
                        onChange={handleFormDataChange}
                    />

                    <TextField 
                        required
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleFormDataChange}
                    />

                    <TextField 
                        required
                        label="Senha"
                        type="password"
                        name="password"
                        onChange={handleFormDataChange}
                    />

                    <TextField 
                        required
                        label="Confirmar Senha"
                        type="password"
                        name="confirmPassword"
                        onChange={handleFormDataChange}
                    />

                    <Button type="submit">Signup</Button>
                </form>
            </div>
        )
    }
}