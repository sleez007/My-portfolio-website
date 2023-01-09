import { createGlobalStyle } from "styled-components";
import { AppTheme } from "../color";

interface Props {
    theme: AppTheme
}

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({theme}: Props) => theme.primary400} 
    }
`;
export default GlobalStyle;