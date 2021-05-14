import { createContext, ReactNode, useContext, useState } from "react";


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
    updateUser: (user: User) => void;
    logoutUser: () => void;
    isUserAuthenticated: (value: boolean) => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
    const [user, setUser] = useState({} as User);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    function updateUser(user: User): void {
        setUser(user);

    }
    function isUserAuthenticated(value: boolean) {
        setIsAuthenticated(value);
    }
    function logoutUser(): void {

        setUser({} as User);
        isUserAuthenticated(false);
    }
    return (
        <AuthContext.Provider value={{ user, updateUser, logoutUser, isUserAuthenticated, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextProps => useContext(AuthContext)