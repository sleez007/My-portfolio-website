import { createGlobalStyle } from "styled-components";
import { AppTheme } from "../color";

export interface Props {
    theme: AppTheme
}

const GlobalStyle = createGlobalStyle`
    :root{
        --desktop-width: 1280px;
        --fw-regular:400;
        --fw-semi-bold:500;
        --fw-bold:900;

        --ff-primary: 'Sofia Sans Extra Condensed', sans-serif;
        --ff-body:var(--ff-primary);
        --ff-heading: var(--ff-primary);

        --fs-300: .8325rem;
        --fs-400: .875rem;
        --fs-500: 1rem;
        --fs-550: 1.120rem
        --fs-600: 1.875rem;
        --fs-700: 2.3rem;
        --fs-800: 2.7rem;

        --fs-nav: var(--fs-400);
        --fs-body: var(--fs-400);
        --fs-nav: var(--fs-500);
        --fs-button: var(--fs-500);
        --fs-primary-heading: var(--fs-700);
        --fs-secondary-heading: var(--fs-600);

        @media(min-width: 50em) {
            --fs-550: 1.220rem;
            --fs-body: var(--fs-500);
            --fs-primary-heading: var(--fs-800);
            --fs-secondary-heading: 2.4rem;
            --fs-nav: var(--fs-550);
        }
    }
    body{
        background-color: ${({theme}: Props) => theme.primaryBg};
        color: ${({theme}: Props) => theme.txtPrimary200};
        font-family: var(--ff-body);
    }

    .loading-wrapper{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    // UTILITY CLASS
    .text-center{
        text-align: center;
    }

    .even-columns {
        display: grid;
        gap: 1rem;
    
        @media(min-width:50em){
            grid-auto-flow: column;
            grid-auto-columns: 1fr;
        }
    }

    .fw-bold{
        font-weight: var(--fw-bold);
    }
    .fw-semi-bold{
        font-weight: var(--fw-semi-bold);
    }
    .fw-regular{
        font-weight: var(--fw-regular);
    }

    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .grid{
        justify-content: center;
        align-items: center;
        display: grid;
        gap: 2em;
    }
    .space-btw{
        justify-content: space-between;
    }
`;
export default GlobalStyle;