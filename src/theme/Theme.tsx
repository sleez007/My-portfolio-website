import React from "react";
import { ThemeProvider } from 'styled-components';
import useDarkMode from "use-dark-mode";
import DefaultLayout from "../components/layout/default_layout";
import LoadingIcon from "../components/Loading";
import appTheme from "./color";
import GlobalStyle from "./styling/GlobalStyle";
import GlobalReset from "./styling/Reset";

export const ThemeHookProvider = (props: any) => {
    const { value } = useDarkMode(false, { storageKey: undefined, onChange: undefined });
    const theme = value ? appTheme.dark : appTheme.light;
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(()=>{setTimeout( ()=>setMounted(true),5000)}, []);

    const body = !mounted  ? (<div className="loading-wrapper"><LoadingIcon /></div>) : (<DefaultLayout>{props.children}</DefaultLayout>)
    
    return  (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GlobalReset />
            {body}
        </ThemeProvider>
    );
}