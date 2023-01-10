import styled from "styled-components";

const HamburgerBtn = styled.button.attrs({ariaControls:'primary-navigation', ariaExpanded:'false'})`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0.5em;
    z-index: 100;

    @media(min-width: 50em) {
       display: none;
    }

    & > .sr-only{
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: 0;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border:0;
    }
    rect {
        transition: all .3s ease-in-out;
    }

    & .show-cancel{
        .middle {
            x: 0;
            opacity: 0;
          }
          .top {
            transform: rotate(45deg);
            transform-origin: center top;
            x: 50px;
            y: 35px;
          }
          .bottom {
            transform: rotate(-45deg);
            transform-origin: center top;
            x: -20px;
            y: 25px;
          }
    }
`;

const AnimatedBurger = styled.svg.attrs({width:40, height:40, viewBox:'0 0 100 100', fill:'none', xmlns:'http://www.w3.org/2000/svg'})``;

export const Hamburger =  ({toggleRef, toggleMenu, navBtn}: any) => {
    return (
        <HamburgerBtn ref={navBtn} onClick={toggleMenu}>
            <span className="sr-only">Menu</span>
            <AnimatedBurger ref={toggleRef}>
                <rect className="top" x="20" y="29" width="60" height="7.85106" fill="#000" />
                <rect className="middle" x="20" y="45.5745" width="60" height="7.85106" fill="#000" />
                <rect className="bottom" x="20" y="62.1489" width="60" height="7.85106" fill="#000" />
            </AnimatedBurger>
        </HamburgerBtn>
    )
}
