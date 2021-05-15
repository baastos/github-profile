import { LoginContainer } from './styles'

import LogoImg from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const SCOPES = 'identify'
const authUri = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPES}`


export function Login() {
    const { getToken } = useAuth();

    useEffect(() => {
        getToken();

    })

    return (
        <LoginContainer>
            <img src={LogoImg} alt="logo" />
            <Button onClick={() => window.location.href = authUri}>
                Entrar
            </Button>
            <Footer />
        </LoginContainer>

    )
}