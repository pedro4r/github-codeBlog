import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api, apiIssues } from "../lid/axios";

interface IssuesContextType {
    userProfile: UserProfile
    searchIssues: (query: string) => void;
}

interface UserProfile {
    name: string
    company: string
    followers: string
    avatarUrl: string
    bio: string
    login: string
    html_url: string
}

interface IssuesContextProviderProps {
    children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesContextProvider({ children }: IssuesContextProviderProps) {

    const [userProfile, setUserProfile] = useState<UserProfile>({} as UserProfile)

    async function searchIssues(data: string) {
        const username = 'pedro4r'
        const response = await apiIssues.get('issues', {
            params: {
                // q: `${data} repo:josepholiveira/${data}`
                // q: `${data} repo:${userName}/${data}`
                // q: `${data}%20repo:rocketseat-education/reactjs-github-blog-challenge`
                // q: `user:${username} + text: ${data}`
                q: `${data} repo:${username}/faladev`
                // q: `is: issue is: open author: ${username} ${data}`,
            }
        })

        console.log(response.data);
    }

    const getUserProfile = useCallback(async () => {
        const response = await api.get('users/pedro4r');

        const userProfile = {
            avatarUrl: response.data.avatar_url,
            name: response.data.name,
            company: response.data.company,
            followers: response.data.followers,
            bio: response.data.bio,
            login: response.data.login,
            html_url: response.data.html_url
        }

        setUserProfile(userProfile);
    }, [])

    useEffect(() => {
        getUserProfile();
    }, [getUserProfile])

    return (
        <IssuesContext.Provider
            value={{
                userProfile,
                searchIssues
            }}>
            {children}
        </IssuesContext.Provider>
    );
}

