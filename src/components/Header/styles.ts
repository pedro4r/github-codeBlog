import styled from "styled-components";
import background from '../../assets/headerBackground.svg';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BackgroundImg = styled.div`
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 18.5rem;
    z-index: -1;

    background-image: url(${background});
    background-size: cover;
    background-position: center;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 13rem;

    background: ${(props => props.theme['gray-800'])};
    padding: 2rem;
    border-radius: 10px;
`

export const Avatar = styled.div`

`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: ${(props => props.theme['gray-400'])};
        margin-bottom: 1.5rem;
    }

`

export const NameLink = styled.div`
    display:  flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        span {
            font-size: 0.75rem;
        font-weight: bold;
            color: ${(props => props.theme['blue-100'])};
        }

        svg {
            color: ${(props => props.theme['blue-100'])};
        }
    }

    span {
        font-size: 1.5rem;
        color: ${(props => props.theme['white'])};
    }
`

export const GitHubInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

`
