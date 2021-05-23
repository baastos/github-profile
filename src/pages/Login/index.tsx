import { LoginContainer } from './styles'

import LogoImg from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { useEffect } from 'react'
//redux
import { useDispatch } from 'react-redux';
import { LoadTokenToState } from '../../store/modules/token/action'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const SCOPES = 'user%20repo';
const state = "adsadasasd";
const authUri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}&scope=${SCOPES}`

export function Login() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadTokenToState());
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