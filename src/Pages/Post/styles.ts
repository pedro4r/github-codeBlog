import styled from "styled-components";
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 13rem;
`

export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    background: ${(props => props.theme['gray-800'])};
    box-shadow: 0px 2px 28px ${(props => props.theme['gray-1000'])};
    padding: 2rem;
    border-radius: 10px;

    strong {
        font-size: 1.62rem;
        color: ${(props => props.theme['white'])};
    }
`

export const ButtonsContainer = styled.div`
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
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span{
        color: ${(props => props.theme['gray-300'])}
    }

    svg {
        color: ${(props => props.theme['gray-500'])}
    }
`

export const PostBody = styled.div`
    color: ${(props => props.theme['gray-300'])};
`

export const MarkDownContent = styled(ReactMarkdown)`
    white-space: pre-line;

    ul, ol {
        padding-left: 2rem;
    }

    p {
        text-align: justify;
    }
`
