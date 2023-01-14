import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../Container";
import Fade from 'react-reveal/Fade';
import kingsley from '../../../../public/assets/images/kingsley.png'
import { Props } from "../../../theme/styling/GlobalStyle";

const Wrapper = styled.section.attrs({id: 'about'})`
    padding-block: 6em;
    position:relative;
    background-color: ${({theme}: Props) => theme.primaryBg};
    z-index:1;
    @media(min-width: 50em){
        padding-block: 16em 6em;
        margin-top: -12em;
    }

    .about__details{
        & > *+*{
            margin-top: 1em;
        }
    }
    .about__list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: .6em;
        margin-top: .89em; 

        li{
            font-size: .7rem;
            position: relative;
            left: 1.2em;

            @media(min-width: 50em){
                font-size: .9rem;
            }

            &::before{
                content: '▹';
                top:0;
                left:-1.2em;
                position:absolute;
                color: ${({theme}: Props) => theme.expCardHover};
            }
        }
    }

    .image_container{
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        display: block;
        position: relative;
        width: 250px;
        border-radius: 4px;
        height: 300px;

        @media(min-width: 50em){
            &:hover{
                &::after{
                    top:2em;
                    left:2em;
                }
            }
    
            &::after{
                z-index: -1;
                position: absolute;
                border: 2px solid ${({theme}: Props) => theme.expCardHover};
                top:3em;
                left:3em;
                content: '';
                height: inherit;
                width: inherit;
                border-radius: inherit;
                transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
            }
        }
        img{
            height:inherit;
            object-fit: contain;
            filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
            filter: gray; /* IE6-9 */
            -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
            transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

            &:hover{
                filter: none;
                -webkit-filter: grayscale(0%);
            }

        }
    }
    .about__me{
        display: grid;
        place-content: center;
    }
`;

const About= () => {
    return (
        <Wrapper>
            <Fade ssrFadeout bottom>
                <h1 className="side">About Me</h1>
                <Container>
                    <div className="about grid even-columns">
                        <div className="about__details">
                            <h2 className="section__title"><span className="deco">01. </span>  About me <span className="line"></span></h2>
                            <p>Hello! Thank you once again for making out time to visit my personal portfolio. My name is Kingsley Etoka, I&#39;m a very dedicated and astute software engineer with the ambition for mental and moral distinction. I&#39;m out to invest in an enduring software career and to seek self-development, advancement and improvement while enjoying job satisfaction. Well proven in , with the precision and loyalty required to excel.</p>
                            <p>My core area of Focus is on Angular, React, Flutter, Kotlin, Postgres, Mysql & Nest JS</p>
                            <p>Below is a list of technologies, languages, frameworks and Libraries that I have a good command of:</p>
                            <ul className="about__list" role='list'>
                                <li>Angular</li>
                                <li>NGRX Library</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Native Android(Kotlin)</li>
                                <li>Coroutines & Flows</li>
                                <li>Flutter</li>
                                <li>Bloc</li>
                                <li>Node JS</li>
                                <li>Nest JS Framework</li>
                                <li>SQL</li>
                                <li>Postgres</li>
                                <li>Typescript</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className="about__me">
                            <div className="image_container">
                                <Image src={kingsley} alt="Etoka Kingsley" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Fade>
        </Wrapper>
    );
}

export default About;