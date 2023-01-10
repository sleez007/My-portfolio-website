import styled from "styled-components";
import { Props } from "../../theme/styling/GlobalStyle";

const Button = styled.button`
    display: inline-block;
    padding: 1em 1.5em;
    background-color: ${({theme}:Props)=> theme.txtPrimary300 };
    color: ${({theme}:Props)=> theme.txtPrimary100 };
    outline:none;
    border: none;
`;

export default Button;