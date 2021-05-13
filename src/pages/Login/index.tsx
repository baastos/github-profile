import { LoginContainer } from './styles'
import LogoImg from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

export function Login() {
    return (
        <LoginContainer>
            <img src={LogoImg} alt="logo" />

            <Button title="Entrar" />

            <Footer />
        </LoginContainer>

    )
}