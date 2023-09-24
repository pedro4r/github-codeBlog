import { Avatar, FormContainer, GitHubInfo, Info, NameLink, Post, PostsList, ProfileContainer, ProfileInfo, TitleContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { formatDistanceToNowStrict } from "date-fns";
import { enUS } from "date-fns/locale";
import { Link } from "react-router-dom";

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function Home() {

    const { searchIssues, userProfile, posts } = useContext(IssuesContext)

    const {
        register,
        handleSubmit,
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
                        <span>{posts.length} publishment</span>
                    </TitleContainer>
                    <input
                        type="text"
                        placeholder="Search Content"
                        {...register('query')} />
                </form>

                <PostsList>
                    {[posts.map(post => {

                        const distanceDate = formatDistanceToNowStrict(
                            new Date(post.created_at), {
                            locale: enUS,
                            addSuffix: true,
                        });

                        const title = post.title
                            .slice(0, 55)
                            .split(' ')
                            .slice(0, -1)
                            .join(' ');

                        const body = post.body
                            .slice(0, 185)
                            .split(' ')
                            .slice(0, -1)
                            .join(' ');

                        return (
                            <Link key={post.id} to={`/post/${post.id}`}>
                                <Post >
                                    <header>
                                        <strong>{title}</strong>
                                        <span>{distanceDate}</span>
                                    </header>
                                    <p>{body}</p>
                                </Post>
                            </Link>

                        )
                    })]}
                </PostsList>
            </FormContainer>
        </div>
    )
}