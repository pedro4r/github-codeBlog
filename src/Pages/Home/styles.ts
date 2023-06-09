import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 13rem;

    background: ${(props => props.theme['gray-800'])};
    box-shadow: 0px 2px 28px ${(props => props.theme['gray-1000'])};
    padding: 2rem;
    border-radius: 10px;
`

export const Avatar = styled.div`
    height: 9.25rem;
    width: 9.25rem;
    overflow: hidden;
    border-radius:8px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

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
        text-decoration: none;

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
    margin-top: auto;
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span {
        color: ${(props => props.theme['gray-200'])}
    }

    svg {
        color: ${(props => props.theme['gray-500'])}
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;

    input {
        margin-top: 0.75rem;
        height: 3.16rem;
        background: ${(props => props.theme['gray-1000'])};
        border: 1px solid ${(props => props.theme['gray-700'])};
        border-radius: 6px;
        width: 100%;
        color: ${(props => props.theme['gray-300'])};
        text-indent: 1rem;

        ::placeholder {
            color: ${(props => props.theme['gray-500'])};
        }

        :focus {
            border: 1px solid ${(props => props.theme['blue-100'])};
        }
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
        color: ${(props => props.theme['white'])};
    }

    span {
        color: ${(props => props.theme['gray-400'])};
    }
`

export const PostsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 26rem);
    grid-gap: 2rem;
    margin-top: 3rem;
`

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: justify-content;
    gap: 1.25rem;
    padding: 2rem;

    background-color: ${(props => props.theme['gray-700'])};

    border-radius: 10px;
    height: 16rem;
    width: 26rem;

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;

        strong {
            width: 17rem;
            font-size: 1.25rem;
            color: ${(props => props.theme['white'])};
        }

        span {
            font-size: 0.8rem;
            color: ${(props => props.theme['gray-400'])};
        }
    }

    p {
        color: ${(props => props.theme['gray-300'])};
    }
    
`

