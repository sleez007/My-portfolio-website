import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import { Container } from "../../Container";
import nova from '../../../../public/assets/images/logo/nova.png';
import bict from '../../../../public/assets/images/logo/bict.png';
import cousant from '../../../../public/assets/images/logo/cousent.png';
import devAmplify from '../../../../public/assets/images/logo/dev_amplify.png';
import oakSoft from '../../../../public/assets/images/logo/oak_soft.png';
import hoh from '../../../../public/assets/images/logo/hoh.png';
import FadeIn from "react-fade-in";

type d = {icon: string, title: string}
const skills : d[] = [
    {
        icon: 'bx bx-mobile-alt',
        title: 'Mobile App <br/> Development'
    },
    {
        icon: 'bx bx-devices',
        title: 'Frontend Web<br/> Development'
    },
    {
        icon: 'bx bx-data',
        title: 'Backend Web<br/> Development'
    },
];

const Wrapper = styled.section`
    padding-block: 6em;
    @media(min-width: 50em){
        height: 36em;
    }
    background-color: ${({theme}: Props) => theme.secondaryBg};

    .intro{
        justify-content: space-between;
        .line{
            flex: 1;
            margin-left: 2em;
            width: 100%;
            height: 1px;
            background: ${({theme}: Props) => theme.txtPrimary400};
        }
    }

    .worked__with{
        margin-top: 4em;
        justify-content: start;
        grid-template-columns: repeat(auto-fit, minMax(6em, 1fr));

        img{
            width: 70%;
            cursor: pointer;
            margin-inline: auto;

            &:not(:first-child){
                transition: .4s;
                object-fit: contain;
                filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
                filter: gray; /* IE6-9 */
                -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */

                &:hover{
                    filter: none;
                    -webkit-filter: grayscale(0%);
                }
            }
        } 
    }

    .skills{
        gap: 1em;
        margin-top: 2em;
    }

    .expo{
        margin-top: 6em;
        display: none;

        @media(min-width: 50em){
            display: grid;
            align-items: start;
            grid-template-columns: minmax(250px, 1fr) 3.5fr;
        }

        .yr{
            font-size: 6rem;
            font-weight: var(--fw-semi-bold);
            justify-content: flex-start;
            align-items: baseline;

            span{
                font-size: 4rem;
                margin-left: .3em;
            }
        }
        .box{
            height: 250px;
            display: grid;
            align-items: center;
            padding: 1em;
            z-index: 100;
            transition: .4s;
            background: ${({theme}: Props) => theme.expCard};

            &:hover{
                background: ${({theme}: Props) => theme.expCardHover};
                color: ${({theme}: Props) => theme.txtPrimary100};
                
                h3, a{
                    color: ${({theme}: Props) => theme.txtPrimary100};
                }
                p{
                    opacity: 1;

                    &>i.bx{
                       margin-left: 1.5em;
                    }
                }
            }
            &> .bx{
                font-size: 2.5rem;
            }

            p{
                transition: opacity .4s;
                opacity: 0;
                font-size: .8rem;
                margin-top: .8em;
                &>i.bx{
                    transition: margin-left .4s;
                    display: inline-block;
                }
            }


        }
    }
    
`;

const Work= () => {
    return (
        <Fade ssrFadeout bottom>
            <Wrapper>
                <Container>
                    <p className="flex intro">Companies I&#39;ve Worked With <span className="line"></span></p>
                    <div className="grid worked__with">
                        <Image src={bict} alt="Bonitas ICT" />
                        <Image src={nova} alt="Innovate Space" />
                        <Image src={oakSoft} alt="The Oaksoft " />
                        <Image src={cousant} alt="Cousant Connect" />
                        <Image src={hoh} alt="House of Hishighnex " />
                        <Image src={devAmplify} alt="Devamplify" />
                    </div>

                    <div className="grid expo even-columns">
                        <Fade ssrFadeout bottom>
                            <div className="expo__years">
                                <p className="yr flex">6 <span>+</span></p>
                                <p>Years Experience Working.</p>
                            </div>
                        </Fade>
                        <div className="expo__skill-set">
                            <p>I&#39;ve worked in full capacity as a fullstack Web and Mobile App developer in every of the afore mentioned organization.</p>
                            <Fade ssrFadeout bottom>
                                <div className="skills even-columns grid">
                                    {
                                        skills.map(s => <SkillWrap {...s} key={s.title} />)
                                    }
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </Fade>
    );
}

const SkillWrap = ({title, icon}: d) => {
    return (
        <div className="box">
            <i className={icon}></i>
            <h3 dangerouslySetInnerHTML={{__html: title}}></h3>
            <a href="#"><p>Hire Me <i className='bx bx-right-arrow-alt'></i></p></a>
        </div>
    )
}



export default Work;