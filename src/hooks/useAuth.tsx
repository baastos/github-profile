import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


type User = {
    id: string;
    avatar: string;
    avatar_url: string;
    email: string;
    username: string;
    discriminator: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthContextProps = {
    user: User;
    logoutUser: () => void;
    getToken: () => Promise<void>
    token: string;
}

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
    const [user, setUser] = useState({} as User);
    const [token, setToken] = useState(() => {
        const token = localStorage.getItem('@DiscordProfile.token');

        if (token) {
            return token;

        } else {
            return '';

        }
    });

    useEffect(() => {

        if (token) {
            api.get('users/@me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(response => {
                const user = {
                    ...response.data,
                    avatar_url: `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.png`
                }
                setUser(user);
            });
        }
    }, [token])


    async function getToken() {

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

            setToken(token);

            localStorage.setItem('@DiscordProfile.token', token);

        }
    }

    function logoutUser(): void {

        localStorage.removeItem('@DiscordProfile.token');
        setToken('');
    }
    return (
        <AuthContext.Provider value={{ user, logoutUser, getToken, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextProps => useContext(AuthContext)