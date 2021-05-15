import { LoginContainer } from './styles'

import LogoImg from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/useAuth'


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const SCOPES = 'identify%20email'
const authUri = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPES}`

export function Login() {
    const { updateUser, isUserAuthenticated } = useAuth();

    useEffect(() => {

        async function getUser() {
            const urlParams = new URLSearchParams(window.location.search)
            const code = urlParams.get('code');

            if (code) {
                const body = "grant_type=authorization_code"
                    + `&client_id=${CLIENT_ID}`
                    + `&client_secret=${CLIENT_SECRET}`
                    + `&code=${code}`
                    + `&redirect_uri=${REDIRECT_URI}`

                const response = await api.post('oauth2/token', body, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })

                const { access_token: token } = response.data;

                const user = await api.get('users/@me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                isUserAuthenticated(true);

                updateUser(user.data)

            }
        }
        getUser();

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