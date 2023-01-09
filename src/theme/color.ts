import { DefaultTheme } from "styled-components";

type Theme = { light: AppTheme, dark: AppTheme};

const  appTheme: Theme   = {
    light: {
        primary400: 'red',
        primary100: '',
    },
    dark:{
        primary400: 'green',
        primary100: '',
    }
};

export interface AppTheme{
    primary400: string;
    primary100: string;
}

export default appTheme;