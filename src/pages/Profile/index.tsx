import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth"
import { Colors } from "../../utils/Colors";
import { AsideContainer, FriendListContainer, InputSearch, ProfileContainer } from "./styles"

const DEFAULT_AVATAR_URL = 'http://i.imgur.com/EroY8Ii.png'

export function Profile(): JSX.Element {
    const { logoutUser, user } = useAuth();

    return (
        <ProfileContainer>
            <AsideContainer>
                <InputSearch placeholder="Encontre um amigo" />
                <FriendListContainer>
                    <strong>Meus amigos</strong>
                    <ul>
                        <li>
                            <div>
                                <img src={DEFAULT_AVATAR_URL} alt={DEFAULT_AVATAR_URL} />
                                <div>
                                    <strong>
                                        Victor
                                        <span>Jogando Visual Studio Code</span>
                                    </strong>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div>
                                <img src={DEFAULT_AVATAR_URL} alt={DEFAULT_AVATAR_URL} />
                                <div>
                                    <strong>NatanT</strong>
                                </div>
                            </div>
                        </li>

                    </ul>
                </FriendListContainer>


                {/* PROVISÓRIO */}
                <div style={{ alignSelf: "center" }}>

                    <Button onClick={logoutUser} style={{ background: Colors.red }}>Sair</Button>
                </div>
                {/* PROVISÓRIO */}

            </AsideContainer>
        </ProfileContainer>
    )
}