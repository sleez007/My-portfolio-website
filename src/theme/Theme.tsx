import React from "react";
import { ThemeProvider } from 'styled-components';
import useDarkMode from "use-dark-mode";
import appTheme from "./color";
import GlobalStyle from "./styling/GlobalStyle";
import GlobalReset from "./styling/Reset";

export const ThemeHookProvider = (props: any) => {
    const { value } = useDarkMode(false, { storageKey: undefined, onChange: undefined });
    const theme = value ? appTheme.dark : appTheme.light;
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() =>  setMounted(true), []);

    const body = (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GlobalReset />
            {props.children}
        </ThemeProvider>
    )

    // prevents ssr flash for mismatched dark mode
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }
    
    return body;
}