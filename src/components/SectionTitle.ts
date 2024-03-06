import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: left;
    font-size: clamp(${30}px, calc((100vw - 375px) / (1320 - 375) * (${48} - ${30}) + ${30}px), ${48}px);

    & > span {
        color: ${theme.color.accent};
    }
`