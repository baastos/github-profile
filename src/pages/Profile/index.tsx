import { useAuth } from "../../hooks/useAuth"

export function Profile(): JSX.Element {
    const { logoutUser, user } = useAuth()
    return (
        <div>
            <h1>PROFILE</h1>
            <button onClick={logoutUser}>Sign Out</button>
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}