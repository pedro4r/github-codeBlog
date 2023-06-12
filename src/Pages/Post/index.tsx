import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from "phosphor-react";
import { GitHubInfo, ButtonsContainer, Info, PostHeader, PostContainer, PostBody, MarkDownContent } from "./styles";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";
import { formatDistanceToNowStrict } from "date-fns";
import { enUS } from "date-fns/locale";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function Post() {

    const { postId } = useParams();
    const { posts } = useContext(IssuesContext)

    const currentPost = posts.find(item => item.id === Number(postId));

    if (currentPost) {
        const distanceDate = formatDistanceToNowStrict(
            new Date(currentPost.created_at), {
            locale: enUS,
            addSuffix: true,
        });

        return (

            <PostContainer>
                <PostHeader>

                    <ButtonsContainer>
                        <Link to='/'>

                            <CaretLeft size={14} weight="bold" />
                            <span>BACK</span>
                        </Link>
                        <a href={currentPost.html_url} target="_blank">
                            <span>GITHUB</span>
                            <ArrowSquareOut size={14} weight="bold" />
                        </a>
                    </ButtonsContainer>

                    <strong>
                        {currentPost.title}
                    </strong>

                    <GitHubInfo>
                        <Info>
                            <GithubLogo size={18} weight="fill" />
                            <span>{currentPost.user.login}</span>
                        </Info>
                        <Info>
                            <Buildings size={18} weight="fill" />
                            <span>{distanceDate}</span>
                        </Info>
                        <Info>
                            <Users size={18} weight="fill" />
                            <span>{currentPost.comments} comments</span>
                        </Info>
                    </GitHubInfo>
                </PostHeader>

                <PostBody>
                    {/* <MarkDownContent children={currentPost.body} remarkPlugins={[remarkGfm]} /> */}

                    <MarkDownContent
                        children={currentPost.body}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ node, inline, className, style, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={solarizedlight}
                                        customStyle={{ background: '#0B1B2B' }}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    />
                </PostBody>

            </PostContainer >
        )
    }

    else {
        return (
            <PostContainer>

                <h1>Post doesn't exist</h1>

            </PostContainer>
        )
    }


}