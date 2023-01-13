import styled from "styled-components";
import { AppTheme } from "../../theme/color";
import { Props } from "../../theme/styling/GlobalStyle";
type MyStyledProps = {
    theme: AppTheme;
    inverse?: boolean;
}
const Button = styled.button`
    display: inline-block;
    padding: .6em 1em;
    background-color: ${({theme, inverse}:MyStyledProps)=> inverse? 'transparent': theme.txtPrimary300 };
    color: ${({theme, inverse}:any)=> inverse ? theme.txtPrimary300:  theme.txtPrimary100 };
    outline:none;
    border: ${(props:MyStyledProps)=> props.inverse ? '2px solid' + props.theme.txtPrimary300 : 'none' };
    cursor: pointer;
` as any;

export default Button;