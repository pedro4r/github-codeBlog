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