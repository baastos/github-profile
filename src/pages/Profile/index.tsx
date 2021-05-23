import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/useAuth"
import { api } from "../../services/api";
import { Colors } from "../../utils/Colors";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    AsideContainer,
    RepoListContainer,
    InputSearch,
    ProfileContainer,
    ProfileSection,
    ProfileTitle,
    ProfileBox,
    ProfileButton,
    ProfileData,
    ProfileDataItem,
    ProfileInput
} from "./styles"


interface Repository {
    id: number;
    name: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    }

}
interface handleChangeParam {
    [key: string]: string;
}
export function Profile(): JSX.Element {
    const { logoutUser, user, token } = useAuth();
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [nameGithub, setNameGithub] = useState(user.name);
    const [emailGithub, setEmailGithub] = useState(user.email);
    const [companyGithub, setCompanyGithub] = useState(user.company);
    const [locationGithub, setLocationGithub] = useState(user.location);
    const [bioGithub, setBioGithub] = useState(user.bio);

    useEffect(() => {
        api.get('user/repos', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => {
            let repos = response.data

            if (inputSearchValue) {
                repos = response.data.filter((repo: Repository) => repo.name.includes(inputSearchValue))
            }

            setRepositories(repos)
        })

    }, [inputSearchValue])

    async function handleChangeProfileData(name: string, value: string) {

        try {
            const params: handleChangeParam = {}

            params[name] = value;
            if (!value.trim()) {
                return;
            }
            await api.patch('user', params, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            toast.success(`🤣 ${name} alterado com sucesso`, {
                style: { background: Colors.grayLight },
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch {
            toast.error(`😣 Erro ao alterar ${name}!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (

        <ProfileContainer>

            <AsideContainer>
                <InputSearch placeholder="Encontre um repositório" onChange={e => setInputSearchValue(e.target.value)} value={inputSearchValue} />
                <RepoListContainer>
                    <strong>Meus repositórios</strong>
                    <ul>

                        {repositories.map(repo => (
                            <li key={repo.id}>
                                <div>
                                    <strong>
                                        <a href={repo.html_url}>{repo.name}</a>
                                        <span>{repo.owner.login}</span>
                                    </strong>
                                </div>
                            </li>
                        ))}

                    </ul>
                </RepoListContainer>
            </AsideContainer>
            <ProfileSection>
                <ProfileTitle>Meu Perfil</ProfileTitle>

                <ProfileBox>
                    <header>
                        <img src={user.avatar_url} alt={user.login} />
                        <strong>{user.login}</strong>
                    </header>
                    <ProfileData>
                        <ProfileDataItem>
                            <ProfileInput placeholder="Seu nome" defaultValue={user.name} onChange={e => setNameGithub(e.target.value)} />
                            <ProfileButton onClick={() => handleChangeProfileData('name', nameGithub)}>Editar</ProfileButton>
                        </ProfileDataItem>

                        <ProfileDataItem>

                            <ProfileInput placeholder="E-mail" defaultValue={user.email} onChange={e => setEmailGithub(e.target.value)} />

                            <ProfileButton onClick={() => handleChangeProfileData('email', emailGithub)}>Editar</ProfileButton>
                        </ProfileDataItem>

                        <ProfileDataItem>

                            <ProfileInput placeholder="Company" defaultValue={user.company} onChange={e => setCompanyGithub(e.target.value)} />

                            <ProfileButton onClick={() => handleChangeProfileData('company', companyGithub)}>Editar</ProfileButton>
                        </ProfileDataItem>

                        <ProfileDataItem>

                            <ProfileInput placeholder="Location" defaultValue={user.location} onChange={e => setLocationGithub(e.target.value)} />

                            <ProfileButton onClick={() => handleChangeProfileData('location', locationGithub)}>Editar</ProfileButton>
                        </ProfileDataItem>

                        <ProfileDataItem>

                            <ProfileInput placeholder="Bio" defaultValue={user.bio} onChange={e => setBioGithub(e.target.value)} />

                            <ProfileButton onClick={() => handleChangeProfileData('bio', bioGithub)}>Editar</ProfileButton>
                        </ProfileDataItem>

                    </ProfileData>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                        <Button onClick={logoutUser} style={{ background: Colors.red }}>Sair</Button>
                    </div>
                </ProfileBox>

            </ProfileSection>

            <Footer />

            <ToastContainer />
        </ProfileContainer >

    )
}