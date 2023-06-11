import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api, apiIssues } from "../lid/axios";

interface IssuesContextType {
    userProfile: UserProfile
    posts: Posts[]
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

interface Posts {
    id: number
    title: string
    body: string
    html_url: string
    created_at: string;
    comments: number
    user: {
        login: string
    }
}

interface IssuesContextProviderProps {
    children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesContextProvider({ children }: IssuesContextProviderProps) {

    const [userProfile, setUserProfile] = useState<UserProfile>({} as UserProfile)
    const [posts, setPosts] = useState<Posts[]>([])

    async function searchIssues(data?: string) {
        const params: { q: string } = {
            q: ""
        };

        if (data !== undefined) {
            params.q = `${data} repo:pedro4r/github-codeBlog`;
        } else {
            params.q = `repo:pedro4r/github-codeBlog`;
        }
        const response = await apiIssues.get('issues', { params });
        setPosts(response.data.items);
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
        searchIssues();
    }, [getUserProfile])

    return (
        <IssuesContext.Provider
            value={{
                userProfile,
                searchIssues,
                posts
            }}>
            {children}
        </IssuesContext.Provider>
    );
}

