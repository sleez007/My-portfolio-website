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

        --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

        --ff-primary: 'Poppins', sans-serif;
        --ff-body:var(--ff-primary);
        --ff-heading: var(--ff-primary);

        --fs-300: .8325rem;
        --fs-400: .875rem;
        --fs-500: 1rem;
        --fs-550: 1.120rem
        --fs-600: 1.875rem;
        --fs-700: 2.3rem;
        --fs-800: 2.7rem;
        --fs-h1: 2.8rem;
        --fs-h2: 1.3rem;

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
            --fs-nav: var(--fs-400);
            --fs-h1: 3.8rem;
            --fs-h2: 1.7rem;
        }
    }
    body{
        background-color: ${({theme}: Props) => theme.primaryBg};
        color: ${({theme}: Props) => theme.txtPrimary200};
        font-family: var(--ff-body);
        font-size: var(--fs-body);
    }

    h1{
        font-size: var(--fs-h1);
        font-weight: var(--fw-bold);
        color:  ${({theme}: Props) => theme.txtPrimary400};
        line-height:1.2;
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

    .text-primary-300{
        color: ${({theme}: Props) => theme.txtPrimary300};
    }

    .section__title{
        display:flex;
        font-size: var(--fs-h2);
        font-weight: var(--fw-semi-bold);
        align-items: center;
        color: ${({theme}: Props) => theme.txtPrimary400};
        span.deco{
            color: ${({theme}: Props) => theme.txtPrimary300};
            margin-right: .6em;
        }
        .line{
            height: 1px;
            background: ${({theme}: Props) => theme.txtPrimary400};
            flex: 1;
            margin-left: .6em;
        }
    }


    .side{
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        font-size: 3.5rem;
        top: 2em;
        left: 1rem;
        color:rgba(117, 99, 224, 0.056) ;
        position: absolute;
        font-weeight: var(--fw-semi-bold);
        text-transform: uppercase;
        @media(max-width: 1271px){
            display:none;
        }
    }
`;
export default GlobalStyle;