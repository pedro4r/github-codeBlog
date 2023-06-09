import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from "phosphor-react";
import { GitHubInfo, ButtonsContainer, PostContainer, Info } from "./styles";

export function Post() {
    return (
        <PostContainer>

            <ButtonsContainer>
                <a href="" target="_blank">

                    <CaretLeft size={14} weight="bold" />
                    <span>BACK</span>
                </a>
                <a href="" target="_blank">
                    <span>GITHUB</span>
                    <ArrowSquareOut size={14} weight="bold" />
                </a>
            </ButtonsContainer>

            <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </strong>

            <GitHubInfo>
                <Info>
                    <GithubLogo size={18} weight="fill" />
                    <span>Lorem ipsum dolor sit amet</span>
                </Info>
                <Info>
                    <Buildings size={18} weight="fill" />
                    <span>Amet</span>
                </Info>
                <Info>
                    <Users size={18} weight="fill" />
                    <span>seguidores</span>
                </Info>
            </GitHubInfo>

        </PostContainer>
    )
}