import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Image, { StaticImageData } from "next/image";
import { Props } from "../../../theme/styling/GlobalStyle";
import mlm from '../../../../public/assets/images/mlm.png';
import { Container } from "../../Container";


type Project = {name: string, description: string , stack: string[], environment: {icon: string, link: string}[], cover: StaticImageData}
interface Wp {
    featured: Project[];
    fun: Project[];
}
const projects: Wp = {
    featured: [
        {
            name: 'HSE Management Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'NGRX', 'RXJS', 'SASS', 'Adonis JS', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Oil Perfumes Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'RXJS', 'SASS', 'Bootstrap', 'Express', 'PHP', 'MYSQL'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Innovate Space Website',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['React', 'Next JS', 'Email JS', 'Nest JS', 'Sass', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Multi Level Marketing Platform Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'RXJS', 'Bootstrap', 'CSS', 'NODE JS', 'MYSQL'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Rest Countries App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'RXJS', 'SASS', 'Rest Countries API'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Oil Perfumes Android App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Kotlin', 'Jetpack Libraries', 'Room', 'Coroutines', 'Dagger', 'Node JS', 'MYSQL'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Currency Converter App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Kotlin', 'Jetpack Libraries', 'Room', 'Coroutines', 'Dagger', 'Converter Api'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'News App Android',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Kotlin', 'Jetpack Libraries', 'Room', 'Coroutines & Flow', 'Dagger Hilt', 'News Api'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Whatsapp Clone Android',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack:['Kotlin', 'Jetpack Libraries', 'Room', 'Coroutines', 'Dagger Hilt', 'Socket IO', 'Express', 'Mongo DB', 'Docker Compose'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Ground Breaking App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Flutter', 'Bloc', 'Build Runner', 'Freeze', 'RX Dart'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'Portfolio Website :)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['React', 'Next JS', 'Styled Components',],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
    ],
    fun: [
        {
            name: 'HSE Management Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'NGRX', 'RXJS', 'SASS', 'Adonis JS', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'HSE Management Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'NGRX', 'RXJS', 'SASS', 'Adonis JS', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'HSE Management Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'NGRX', 'RXJS', 'SASS', 'Adonis JS', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'HSE Management Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'NGRX', 'RXJS', 'SASS', 'Adonis JS', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'HSE Management Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'NGRX', 'RXJS', 'SASS', 'Adonis JS', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
        {
            name: 'HSE Management Web App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat quo, odio doloremque dicta est velit! Molestias deleniti totam reprehenderit?',
            stack: ['Angular', 'NGRX', 'RXJS', 'SASS', 'Adonis JS', 'Postgres'],
            cover: mlm,
            environment: [
                {
                    icon: 'bx bxl-github',
                    link: 'https://github.com/blah'
                },
                {
                    icon: 'bx bx-link-alt',
                    link: 'https://github.com/blah'
                }
            ]
        },
    ]
};

const Wrapper = styled.section`
    padding-block: 6em;
    position: relative;

    h2{
        margin-bottom: 4em;
    }

    .project{
        margin-bottom: 2em;
        h3{
            font-weight: var(--fw-semi-bold);
            color:  ${({theme}: Props) => theme.txtPrimary400};
        }
        @media(max-width: 60em){
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            background-color: ${({theme}: Props) => theme.secondaryBg};
            border-radius: .2em;
            overflow: hidden;

            &__content{
                &> * + *{
                    margin-top: .6em;
                }
                padding: 1em;
                .flex{
                    justify-content:start;
                    gap: .5em;
                    flex-wrap:wrap;
                }

                &>p{
                    display: none;
                }
                .project__card{
                    font-size: .8rem;
                }
                .project__stack{
                    li{
                        font-size: .7rem;
                        color: ${({theme}: Props) => theme.expCardHover};
                    }
                }
                .project__env{
                    ul{
                        justify-content:start;
                    }
                    li{
                        font-size: 1.8rem;
                        a{
                            color: ${({theme}: Props) => theme.expCardHover};
                        }
                    }
                }
            }
        }

        img{
            filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
            filter: gray; /* IE6-9 */
            -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
            transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
            border-radius: 10px;

            &:hover{
                filter: none;
                -webkit-filter: grayscale(0%);
            }
        }

        @media(min-width:60em){
            margin-bottom: 6em;
            grid-template-columns: repeat(12, 1fr);
            display: grid;
            align-items: center;
            gap: 2em;

            &__image{
                grid-area: 1 / 1 / 2 / 8;
                height: 100%;
                position: relative;
                border-radius: 10px;
            }

            &__content{
                z-index: 1;
                grid-row: 2;
                grid-area: 1/7/2/-1;
                text-align: right;
                padding: 1.5em 1em;

                .project-feat{
                    color: ${({theme}: Props) => theme.expCardHover};
                    font-size: .8rem;
                    text-transform: uppercase;
                    margin-bottom: .9em;
                }

                h3{
                    margin-bottom: .8em;
                    font-size: 1.2rem;
                }

                .project__card{
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                    background: ${({theme}: Props) => theme.projectColor};
                    padding: 2em 1em;
                    border-radius: 6px;
                    margin-bottom: .8em;

                    p{
                        font-size: .88rem;
                        
                    }
                }
                .project__env ul, .project__stack ul{
                    gap: .8em;
                    justify-content: flex-end;
                    margin-bottom: .8em;
                    flex-wrap: wrap;
                }

                .project__stack ul li{
                    font-size: .799rem;
                    color: ${({theme}: Props) => theme.expCardHover};
                    
                }
                .project__env ul a{
                    font-size: 1.6rem;
                    color: ${({theme}: Props) => theme.txtPrimary400};;
                }
            }

            &:nth-child(even){
                &>.project__image{
                    grid-area: 1/ 6 / 2 / -1;
                }
    
                &>.project__content{
                    grid-area: 1/1/2/7;
                    text-align: left;
                }
    
    
                .project__env ul, .project__stack ul{
                    justify-content: flex-start;
                }
            }
        }
        
    }

    .pxb{
        margin-top: 6em;
        margin-bottom: 3em;
        justify-content: center;
    }
    .others{
        justify-content: start;
        grid-template-columns: repeat(auto-fit, minMax(22em, 1fr));

        .fun{
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            background-color: ${({theme}: Props) => theme.secondaryBg};
            border-radius: .2em;
            padding: 2em ;
            transition: .2s all ease-in;

            &:hover{
                transform:translateY(-.3em);
            }

            & > * + *{
                margin-top: 1em;
            }
            .ico{
                justify-content: space-between;

                .ddd{
                    font-size: 2.4rem;
                }
            }
            h3{
                margin-bottom: .8em;
                font-weight: var(--fw-semi-bold);
                color:  ${({theme}: Props) => theme.txtPrimary400};
                @media(min-width:60em){
                    font-size: 1.2rem;
                }
            }
            p{
                font-size: .88rem;
                @media(max-width: 60em){
                    font-size: .8rem;
                }
            }

            .fun__env ul, .fun__stack ul{
                justify-content: flex-start;
                gap: 1em;
                flex-wrap:wrap;
            }

            .fun__stack ul li{
                font-size: .799rem;
                color: ${({theme}: Props) => theme.expCardHover};
                
            }
            .fun__env ul a{
                font-size: 1.6rem;
                color: inherit;
            }
        }
    }
`;

const Portfolio= () => {
    return (
        <Wrapper>
            <Container>
                <h2 className="section__title"><span className="deco">03. </span>  Some Things I&#39;ve Built <span className="line"></span></h2>

                <ul role='list'>
                    {
                        projects.featured.map((e, i) => <ProjectItem key={e.name} {...e} />)
                    }
                </ul>
                <Fade ssrFadeout bottom>
                    <h2 className="section__title text-center pxb">Other Note Worthy Projects</h2>
                    <div className="grid others">
                        {
                            projects.fun.map((e, i) => <FunItem key={i} {...e} />)
                        }
                    </div>
                </Fade>
            </Container>
        </Wrapper>
    );
}


const FunItem = ({name, description, cover, stack, environment}: Project ) => {
    return(
        <div className="fun">
            <div className="flex ico">
                <div>
                    <i className='bx bx-folder ddd'></i>
                </div>
                <div className="fun__env">
                    <ul role='list' className="flex">
                        {
                            environment.map(s => <li key={s.icon}><a href={s.link} target='_blank' rel="noreferrer" referrerPolicy='no-referrer'><i className={s.icon}></i></a></li>)
                        }
                    </ul>
                </div>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="fun__stack">
                <ul className="flex" role='list'>
                    {
                        stack.map(s => <li key={s}>{s}</li>)
                    }
                 </ul>
            </div>
            
        </div>
    );
}



const ProjectItem = ({name, description, cover, stack, environment}: Project ) => {
    return (
        <Fade ssrFadeout bottom>
            <li className="grid-12 project">
                <div className="project__image">
                    <Image src={cover} alt={name} />
                </div>
                <div className="project__content">
                    <p className="project-feat">Featured Project</p>
                    <h3>{name}</h3>
                    <div className="project__card">
                        <p>{description}</p>
                    </div>
                    <div className="project__stack">
                        <ul className="flex" role='list'>
                            {
                                stack.map(s => <li key={s}>{s}</li>)
                            }
                        </ul>
                    </div>
                    <div className="project__env">
                        <ul className="flex" role='list'>
                            {
                                environment.map(s => <li key={s.icon}><a href={s.link} target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className={s.icon}></i></a></li>)
                            }
                        </ul>
                    </div>
                </div>
            </li>
        </Fade>
    );
}

export default Portfolio;