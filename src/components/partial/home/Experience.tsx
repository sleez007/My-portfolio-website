import styled from "styled-components";
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";
import data from '../../../data.json';

const Wrapper = styled.section`
    padding-block: 6em;
    background-color: ${({theme}: Props) => theme.secondaryBg};
    position: relative;

    .experience{
        margin-top: 4em;
        align-items: flex-start;
        grid-template-columns: 1fr;

        @media(min-width: 50em){
            grid-template-columns: minmax(200px, 1fr) 3.5fr;
        }

        &__control{
            @media(max-width: 50em) {

                width: 100%;
                overflow-x:auto;
            }
            ul{
                padding-left: 0;
                white-space:nowrap;
                position: relative;
                width: 100%;
                
                @media(min-width: 50em) {
                    padding-left: 1.5em;
                    white-space: auto;

                    &::before{
                        display: block;
                        position: absolute;
                        content: '';
                        top:0;
                        left:0;
                        height: 100%;
                        width:2px;
                        background-color: #1F1F1F;
                    }
                }

                li{
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    transition: var(--transition);
                    &:hover{
                        background-color: hsla(249, 67%, 63%, 0.443);
                    }

                    @media(min-width: 50em) {
                        display: block;
                    }

                    &.active{
                        color: ${({theme}: Props) => theme.expCardHover};
                        transition: var(--transition);
                        a{
                            color: ${({theme}: Props) => theme.expCardHover};
                        }
                        
                        &::before{
                            display: none;
    
                            @media(min-width: 50em) {
                                display: block;
                                content: '';
                                position: absolute;
                                background-color:${({theme}: Props) => theme.expCardHover};
                                top:0;
                                left:-1.5em;
                                height: 100%;
                                width: 2px;
                                transition: var(--transition);
                            }
    
                        }
                    }

                    a{
                        padding: .4em;
                        display: block;
                        height: 100%;
                        @media (max-width: 1300px) {
                            font-size: 1.2rem;
                        } 
                        @media(max-width: 666px) {
                            display:inline-block;
                        }
        
                    }
                }
            }
        }

        &__detail{
            p{
                margin-top: .8em;
                margin-bottom: 2em;
                font-size: .8rem;
                background-color: ${({theme}: Props) => theme.expCardHover};
                display:inline-block;
                padding: .4em;
                color: ${({theme}: Props) => theme.txtPrimary100};
            }
            h3 a{
                font-weight: var(--fw-semi-bold);
                color: ${({theme}: Props) => theme.expCardHover};
            }
            ul{
                margin-top: .8em;
                li{
                    position: relative;
                    left: 1.2em;
                    margin: .8em 0;
    
                    &::before{
                        content: '▹';
                        top:0;
                        left:-1.2em;
                        position:absolute;
                        color: ${({theme}: Props) => theme.expCardHover};
                    }
                }
            }
        }
    }
`;

const Experience= () => {
    const experience = data.experience;
    const [index, setIndex ] = React.useState(0);
    return (
        <Wrapper>
            <Container>
                <h2 className="section__title"><span className="deco">02. </span>  Where I've Worked <span className="line"></span></h2>

                <div className="grid experience">
                    <div className="experience__control">
                        <Fade left cascade>
                            <ul role='list'>
                                {
                                    experience.map((e,i) => <li className={`${index == i ? 'active':''} `} key={e.company}><a onClick={()=> setIndex(i)}>{e.company}</a></li>)
                                }
                            </ul>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className="experience__detail">
                            <h3>{experience[index].title} <a href={experience[index].link}>{experience[index].at}</a></h3>
                            <p>{experience[index].duration}</p>
                            <Fade top cascade delay={400}>
                                <ul role='list'>
                                    {experience[index].roles.map((e, i)=>(<Fade bottom key={e} delay={i*300}><li key={e} >{e}</li></Fade>))}  
                                </ul>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </Container>
        </Wrapper>
    );
}

export default Experience;