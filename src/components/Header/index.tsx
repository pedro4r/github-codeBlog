import { Avatar, BackgroundImg, GitHubInfo, HeaderContainer, Info, NameLink, ProfileContainer, ProfileInfo } from "./styles";
import avatar from '../../assets/avatar.png'
import { ArrowSquareOut, GithubLogo } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <BackgroundImg />
            <ProfileContainer>

                <Avatar>
                    <img src={avatar} alt="" />
                </Avatar>

                <ProfileInfo>

                    <NameLink>
                        <span>Cameron Williamson</span>
                        <a>
                            <span>GITHUB</span>
                            <ArrowSquareOut size={14} weight="bold" />
                        </a>
                    </NameLink>

                    <p>Tristique volutpat pulvinar vel massa, pellentesque
                        egestas. Eu viverra massa quam dignissim aenean
                        malesuada suscipit. Nunc, volutpat pulvinar vel
                        mass.</p>

                    <GitHubInfo>
                        <Info>
                            <GithubLogo size={12} />
                            <span>cameronwll</span>
                        </Info>
                        <Info>
                            <span>Icon</span>
                            <span>Rocketseat</span>
                        </Info>
                        <Info>
                            <span>Icon</span>
                            <span>32 seguidores</span>
                        </Info>
                    </GitHubInfo>

                </ProfileInfo>

            </ProfileContainer>
        </HeaderContainer>
    )
}