import { Avatar, FormContainer, GitHubInfo, Info, NameLink, Post, PostsList, ProfileContainer, ProfileInfo, TitleContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function Home() {

    const { searchIssues, userProfile } = useContext(IssuesContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    function handleSearchTransactions(data: SearchFormInputs) {
        searchIssues(data.query);
    }

    return (
        <div>
            <ProfileContainer>

                <Avatar>
                    <img src={userProfile.avatarUrl} alt="" />
                </Avatar>

                <ProfileInfo>

                    <NameLink>
                        <span>{userProfile.name}</span>
                        <a href={userProfile.html_url} target="_blank">
                            <span>GITHUB</span>
                            <ArrowSquareOut size={14} weight="bold" />
                        </a>
                    </NameLink>

                    <p>{userProfile.bio}</p>

                    <GitHubInfo>
                        <Info>
                            <GithubLogo size={18} weight="fill" />
                            <span>{userProfile.login}</span>
                        </Info>
                        <Info>
                            <Buildings size={18} weight="fill" />
                            <span>{userProfile.company}</span>
                        </Info>
                        <Info>
                            <Users size={18} weight="fill" />
                            <span>{userProfile.followers} seguidores</span>
                        </Info>
                    </GitHubInfo>

                </ProfileInfo>

            </ProfileContainer>


            <FormContainer>
                <form onChange={handleSubmit(handleSearchTransactions)}>
                    <TitleContainer>
                        <strong>Publishments</strong>
                        <span>6 publishment</span>
                    </TitleContainer>
                    <input
                        type="text"
                        placeholder="Search Content"
                        {...register('query')} />
                </form>

                <PostsList>
                    <Post>
                        <header>
                            <strong>JavaScript data types and data structures</strong>
                            <span>Há 1 dia</span>
                        </header>
                        <p>Programming languages all have built-in data structures,
                            but these often differ from one language to another.
                            This article attempts to list the built-in data structures
                            available in </p>
                    </Post>
                </PostsList>
            </FormContainer>
        </div>
    )
}