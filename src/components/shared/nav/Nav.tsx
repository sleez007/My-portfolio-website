import React from "react";
import styled from "styled-components";
import useDarkMode from "use-dark-mode";
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";
import { Logo } from "../../Logo";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { Hamburger } from "../Hamburger";

interface NavLinkA {name: string, href: string}
const navOptions: NavLinkA[] = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Portfolio',
        href: '#portfolio',
    },
    {
        name:'Experience',
        href: '#experience',
    }
];

const Header = styled.header`
    position: relative;
    padding-top: 2em;
    z-index: 10;
    &[data-overlay]::before{
        content:'';
        width: 100%;
        position: fixed;
        top:0;
        left: 0;
        height: 100vh;
        background-color: rgba(0, 0, 0,.3);
        filter: blur(8px);
        -webkit-filter: blur(8px)
    }

    .primary-navigation{
        &[data-visible]{
            left: 0;
        }
    
        @media(max-width: 50em) {
            position: fixed;
            top: 0;
            left: -250px;
            width: 250px;
            height: 100%;
            transition: .3s;
            background-color:${({theme}: Props) => theme.sideBg};
            box-shadow: -10px 0px 30px -15px ${({theme}: Props) => theme.sideBg};
            padding: 8rem 2rem;
        }
       
    }
`;

const NavList = styled.ul.attrs({role: 'list', ariaLabel:'Primary'})`
    font-size: var(--fs-nav);
    font-weight: var(--fw-semi-bold);

    a{
        text-decoration: none;
        color: ${({theme}: Props) => theme.txtPrimary200};

        &:hover,&:focus{
            color: ${({theme}: Props) => theme.txtPrimary300};
        }
    }

    @media(max-width: 50em) {
        font-weight: var(--fw-semi-bold);
        li+li{
            margin-top: 1.5rem;
        }
    }

    @media(min-width: 50em) {
        justify-content: space-between;
        display: flex;
        li+li{
            margin-left: 1.5rem;
        }
        a{
            position: relative;
            &:hover:after {
                width: 100%;
                left: 0;
                background:  ${({theme}: Props) => theme.txtPrimary300};
            }
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -.7em;
                left: 50%;
                height: 2px;
                width: 0;
                background: transparent;
                transition: width .5s ease, background-color .5s ease, left .5s ease;
            }
        }

        li:nth-child(5){
            a:after{
                display:none
            }
        }
    }
`;

const LogoWrapper = styled.a`
    z-index: 2;
`
export const NavBar = () => {
    const menuRef: any = React.useRef(null);
    const toggleRef: any = React.useRef(null);
    const navBtn : any = React.useRef(null);
    const primaryHeader: any = React.useRef(null);
    const darkMode = useDarkMode();

    const toggleMenu = () => {
        if(menuRef?.current?.hasAttribute('data-visible')){
            navBtn?.current?.setAttribute('aria-expanded', false)
            document!.querySelector("body")?.removeAttribute('style')
        }else{
            navBtn?.current?.setAttribute('aria-expanded', true)
            document!.querySelector("body")!.style.overflow='hidden';
        }
        menuRef?.current?.toggleAttribute('data-visible');
        toggleRef?.current?.classList?.toggle('show-cancel')
        primaryHeader?.current?.toggleAttribute('data-overlay')
    }

    const closeMenu = () => {
        if(menuRef?.current?.hasAttribute('data-visible')){
            menuRef?.current?.removeAttribute('data-visible')
            toggleRef?.current?.classList?.remove('show-cancel');
            toggleRef?.current?.removeAttribute('data-overlay');
            navBtn?.current?.setAttribute('aria-expanded', false);
            document!.querySelector("body")?.removeAttribute('style')
            primaryHeader?.current?.removeAttribute('data-overlay')
        }
    }

    return (
        <Header ref={primaryHeader}>
            <Container className="flex space-btw">
                <LogoWrapper><Logo/></LogoWrapper>
                <Hamburger toggleMenu={toggleMenu} toggleRef={toggleRef} navBtn={navBtn} />
                <nav className="primary-navigation" id="primary-navigation" ref={menuRef}>
                    <NavList className="nav__list" >
                        {
                            navOptions.map(({name, href}, i) => (<MenuItem name={name} close={closeMenu} href={href} key={name} />))
                        }
                        <li className="nav__item toggle">
                            <a  className="nav__link">
                                <DarkModeSwitch
                                    checked={darkMode.value}
                                    onChange={(c)=>darkMode.toggle()}
                                    size={23}
                                />
                            </a>
                        </li>
                    </NavList>
                </nav>
            </Container>
        </Header>
    );
}

const MenuItem = ({href, name, close}: any ) => {
    return (
        <li className="nav__item" key={name}>
            <a onClick={close} href={href}>
               {name}
            </a>
        </li>
    );
}