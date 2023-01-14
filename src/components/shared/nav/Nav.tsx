import React from "react";
import styled from "styled-components";
import useDarkMode from "use-dark-mode";
import Fade from 'react-reveal/Fade';
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
        name:'Experience',
        href: '/#experience',
    },
    {
        name: 'Portfolio',
        href: '#portfolio',
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
        -webkit-filter: blur(8px);
        filter: blur(8px);
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
            background-color: ${({theme}: Props) => theme.primaryBg};
            box-shadow: -10px 0px 30px -15px ${({theme}: Props) => theme.sideBg};
            padding: 8rem 2rem;
        }
    }

    &.menu-scroll{
        transition: none;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        margin-top: -130px;
        padding-bottom: 2em;
        background: ${({theme}: Props) => theme.primaryBg};
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1)
    }

    &.awake {

        transition: .3s margin-top ease-out;
        margin-top: 0;
        -webkit-transition: .3s all ease-out;
        -o-transition: .3s all ease-out;
        transition: .3s all ease-out;
    }
      
    &.menu-scroll.sleep {
        -webkit-transition: .3s all ease-out;
        -o-transition: .3s all ease-out;
        transition: .3s all ease-out;
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
    const isBrowser = typeof window !== `undefined`;

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

    React.useEffect(
        () => {
            if(isBrowser){
                window.addEventListener("scroll", handleScroll);
                window.addEventListener('click', (e: any) =>{
                    if(menuRef?.current?.hasAttribute('data-visible')){
                        if(e.target.id !='primary-navigation' && !e.target.classList.contains('t')) closeMenu();
                    }
                });
                return  ()=> {
                    window.removeEventListener('click', ()=> true);
                    window.removeEventListener('scroll', handleScroll);
                }
            } 
        }
    );

    const handleScroll = () => {
        if (window.pageYOffset > 150) {
            
            if(!primaryHeader?.current?.classList?.contains('menu-scroll')){
                primaryHeader?.current?.classList?.remove('sleep');
                primaryHeader?.current?.classList?.add('menu-scroll')
            }

            if (window.pageYOffset > 350) {
                if(!primaryHeader?.current?.classList?.contains('awake')){
                    primaryHeader?.current?.classList?.add('awake');
                }
            }else{
                if(primaryHeader?.current?.classList?.contains('awake')){
                    primaryHeader?.current?.classList?.add('sleep');
                    primaryHeader?.current?.classList?.remove('awake');
                }
            }
        }else{
            if(primaryHeader?.current?.classList?.contains('menu-scroll')){
                primaryHeader?.current?.classList?.remove('menu-scroll');
            }
        }
    }

    return (
        <Header ref={primaryHeader}>
            <Container className="flex space-btw">
                <LogoWrapper><Fade ssrFadeout top><Logo/></Fade></LogoWrapper>
                <Hamburger toggleMenu={toggleMenu} toggleRef={toggleRef} navBtn={navBtn} />
                <nav className="primary-navigation" id="primary-navigation" ref={menuRef}>
                    <NavList className="nav__list" id="lll" >
                        {
                            navOptions.map(({name, href}, i) => (<MenuItem name={name} href={href} key={name} i={i} />))
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

const MenuItem = ({href, name, i}: any ) => {
    return (
        <Fade ssrFadeout top delay={i * 200}>
            <li className="nav__item" key={name}>
                <a href={href}>
                {name}
                </a>
            </li>
        </Fade>
    );
}