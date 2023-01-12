import { DefaultTheme } from "styled-components";

type Theme = { light: AppTheme, dark: AppTheme};

const  appTheme: Theme   = {
    light: {
        primaryBg: '#FFFFFF',
        secondaryBg: '#FAFBFD',
        txtPrimary400: '#130846',
        txtPrimary300: '#7462DE',
        txtPrimary200: '#767193',
        txtPrimary100: '#FFFFFF',
        sideBg: '#1F1F1F',
        expCard: '#F6F6F8',
        expCardHover: '#7563E0',
        projectColor: '#F6F6F8',
        primary100: '',


    },
    dark:{
        primaryBg: '#1F1F1F',
        secondaryBg: '#131313',
        txtPrimary400: '#FAFBFD',
        txtPrimary300: '#7462DE',
        txtPrimary200: '#F6F6F8',
        txtPrimary100: '#FFFFFF',
        sideBg: '#131313',
        expCard: '#242424',
        expCardHover:'#7563E0',
        projectColor: '#131313',
        primary100: '',
        
    }
};

export interface AppTheme{
    primaryBg: string;
    secondaryBg: string
    txtPrimary400: string;
    txtPrimary300: string;
    txtPrimary200: string;
    txtPrimary100: string
    primary100: string;
    projectColor: string
    sideBg: string;
    expCard: string;
    expCardHover: string;
}

export default appTheme;