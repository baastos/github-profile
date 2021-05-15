import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/useAuth"
import { Colors } from "../../utils/Colors";

import {
    AsideContainer,
    FriendListContainer,
    InputSearch,
    ProfileContainer,
    ProfileSection,
    ProfileTitle,
    ProfileBox,
    ProfileButton,
    ProfileData,
    ProfileDataItem
} from "./styles"

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
            <ProfileSection>
                <ProfileTitle>Meu Perfil</ProfileTitle>
                <ProfileBox>
                    <header>
                        <img src={user.avatar_url} alt={user.username} />
                        <strong>{user.username}<span>#{user.discriminator}</span></strong>
                        <ProfileButton>Enviar avatar</ProfileButton>
                    </header>
                    <ProfileData>
                        <ProfileDataItem>
                            <h5>
                                Nome de Usuário
                            <span>{user.username}#{user.discriminator}</span>
                            </h5>
                            <ProfileButton>Editar</ProfileButton>
                        </ProfileDataItem>

                        <ProfileDataItem>
                            <h5>
                                E-mail
                            <span>{user.email}</span>
                            </h5>
                            <ProfileButton>Editar</ProfileButton>
                        </ProfileDataItem>
                    </ProfileData>
                </ProfileBox>
            </ProfileSection>
            <Footer />
        </ProfileContainer >
    )
}