import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Image, { StaticImageData } from "next/image";
import { Props } from "../../../theme/styling/GlobalStyle";
import hse from "../../../../public/assets/images/hse.png";
import mlm from "../../../../public/assets/images/mlm.png";
import oil from "../../../../public/assets/images/oil.png";
import nov from "../../../../public/assets/images/nov.png";
import rest from "../../../../public/assets/images/rest.png";
import oilapp from "../../../../public/assets/images/oilapp.png";
import curr from "../../../../public/assets/images/curr@2x.png";
import news from "../../../../public/assets/images/news.png";
import nova from "../../../../public/assets/images/nova@2x.png";
import breakn from "../../../../public/assets/images/break.png";
import pf from "../../../../public/assets/images/pf.png";
import may from "../../../../public/assets/images/mayuk@2x.png";
import kanban from "../../../../public/assets/images/kanban.png";
import market from "../../../../public/assets/images/market.png";
import nahdi from "../../../../public/assets/images/nahdi.png";
import studypal from "../../../../public/assets/images/study_pal.png";
import vendor from "../../../../public/assets/images/shopnest.png";
import mall from "../../../../public/assets/images/mall.png";
import { Container } from "../../Container";

type Project = {
  name: string;
  description: string;
  stack: string[];
  environment: { icon: string; link: string }[];
  cover: StaticImageData;
};
interface Wp {
  featured: Project[];
  fun: Project[];
}
const projects: Wp = {
  featured: [
    {
      name: "Nahdi Pharmaceuticals",
      description:
        "Nahdi is a leading pharmacy chain in Saudi Arabia. This is the official website for the company.",
      stack: [
        "Next JS",
        "Redux",
        "TypeScript",
        "Contentful CMS",
        "Server Actions",
        "i18n",
        "Tailwind",
        "API routes",
        "Amazon Payfort",
        "Dynamic Yield",
        "Bazaar Voice",
        "Google Tag Manager",
      ],
      cover: nahdi,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://nahdionline.com",
        },
      ],
    },
    {
      name: "Study Pal",
      description:
        "Study Pal is an AI buddy that helps students or learners in general to study better and faster. It is a web app that uses AI to generate questions and answers based on the users input. It also goes ahead to summarize passages and generate question with various difficulty level and also modes like objective and subjectives.",
      stack: [
        "Gemini API",
        "Next JS",
        "Paystack Gateway",
        "Tanstack Query",
        "Redux",
        "TypeScript",
        "Server Actions",
        "Tailwind",
        "API routes",
        "shadcn UI",
      ],
      cover: studypal,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://study-ai-rose.vercel.app",
        },
      ],
    },

    {
      name: "Build Africa",
      description:
        "A multivendor e-commerce market for buying and selling of building materials",
      stack: [
        "Micro Frontend Architecture",
        "Nx mono Repo",
        "Angular",
        "Woo commerce API",
        "NGRX",
        "RXJS",
        "SASS",
        "Tailwind",
      ],
      cover: market,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://buildafrica.store",
        },
      ],
    },
    {
      name: "Shopnest Vendor Portal",
      description:
        "Shopnest is a multivendor e-commerce platform that allows vendors to create their own stores and sell their products. This is the vendor portal where vendors can manage their stores, products, orders and more.",
      stack: [
        "Ionic Framework",
        "Capacitor",
        "TypeScript",
        "Angular",
        "NGRX",
        "RXJS",
        "Web socket",
      ],
      cover: vendor,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://vendor.shopnest.africa",
        },
      ],
    },
    {
      name: "Shopnest Mall App",
      description:
        "Shopnest mall is a multivendor e-commerce platform where consumers can buy products from various vendors.",
      stack: [
        "Ionic Framework",
        "TypeScript",
        "Angular",
        "NGRX",
        "RXJS",
        "Web socket",
      ],
      cover: mall,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://vendor.shopnest.africa",
        },
      ],
    },
    {
      name: "Kanban Board",
      description:
        "This is a drag and drop project management board to keep track of tasks and their status",
      stack: [
        "Micro Frontend",
        "Nx mono Repo",
        "Angular",
        "DDD",
        "Jest & Rxjs Marble",
        "NGRX",
        "RXJS",
        "SASS",
      ],
      cover: kanban,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/kanban-board",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://kanban-board-inky.vercel.app",
        },
      ],
    },
    {
      name: "HSE Management Web App",
      description:
        "This is the Adminstrative end of the HSE Mobile App where the admin uploads and moderate App engagement and contents.",
      stack: ["Angular", "NGRX", "RXJS", "SASS", "Adonis JS", "Postgres"],
      cover: hse,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/HSE_ADMIN",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://hse-admin-two.vercel.app/",
        },
      ],
    },
    {
      name: "Oil Perfumes Web App",
      description:
        "The oil perfumes web app is a classified e-commerce website strictly for Oil perfume vendors. The website also an administrative end for both owner and other vendors to manage their stores.",
      stack: ["Angular", "RXJS", "SASS", "Bootstrap", "Express", "PHP", "aSQL"],
      cover: oil,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://oilperfumes.ng/",
        },
      ],
    },
    {
      name: "Innovate Space Website",
      description:
        "The official website for Innovate space software development firm. The website features a vintage design with a smooth feel and look",
      stack: ["React", "Next JS", "Email JS", "Nest JS", "Sass", "Postgres"],
      cover: nov,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://innovatespace.co",
        },
      ],
    },
    {
      name: "Multi Level Marketing Platform Web App",
      description:
        "A multilevel marketing platform that allows people earn as they refer more people on to the platform. Note that I do not have the backend code anymore so the github repo only contains the app frontend.",
      stack: ["Angular", "RXJS", "Bootstrap", "CSS", "NODE JS", "MYSQL"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/multilevel-market",
        },
        // {
        //     icon: 'bx bx-link-alt',
        //     link: 'https://github.com/blah'
        // }
      ],
    },
    {
      name: "Rest Countries App",
      description:
        "This is a challenge from frontend mentor. The web app basically fetches a list of countries via an API call and then displays the information to the user with ability to sort, search and also toggle theme.",
      stack: ["Angular", "RXJS", "SASS", "Rest Countries API"],
      cover: rest,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/Rest-countries",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://rest-countries-sleez007.vercel.app/",
        },
      ],
    },
    {
      name: "Oil Perfumes Android App",
      description:
        "The oil perfumes mobile app is an ecommerce App that allows users easily find and buy perfumes from vendors within their region and also that matches their pocket.",
      stack: [
        "Kotlin",
        "Jetpack Libraries",
        "Room",
        "Coroutines",
        "Dagger",
        "Node JS",
        "MYSQL",
        "MVVM",
      ],
      cover: oilapp,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://play.google.com/store/apps/details?id=oilperfumes.com.ng",
        },
      ],
    },
    {
      name: "Currency Converter App",
      description:
        "Currncy converter App converts from one currency to another using the fixer API and also by default changes theme based on their user preference settings. It also caches result and is offline friendly",
      stack: [
        "Kotlin",
        "Jetpack Libraries",
        "Room",
        "Coroutines",
        "Dagger",
        "Converter Api",
      ],
      cover: curr,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/currency_converter",
        },
      ],
    },
    {
      name: "News App Android",
      description:
        "The News App fetches paginated up-to-date news from the remote server and caches it locally on the user device their by supporting fully offline usage. The App also uses dual theme",
      stack: [
        "Kotlin",
        "Jetpack Libraries",
        "Room",
        "Coroutines & Flow",
        "Dagger Hilt",
        "News Api",
        "MVI",
      ],
      cover: news,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Innovate-Space/world_news",
        },
      ],
    },
    {
      name: "Whatsapp Clone Android",
      description:
        "Whatsapp Clone App is a sample implementtation of whatsapp with a couple of features like profile creation, contact syncronization, messaging, offline use. This uses the socket.IO library for real time communication. ",
      stack: [
        "Kotlin",
        "Jetpack Libraries",
        "Room",
        "Coroutines",
        "Dagger Hilt",
        "Socket IO",
        "Express",
        "Mongo DB",
        "Docker Compose",
        "MVVM",
      ],
      cover: nova,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/sleezChatApp",
        },
      ],
    },
    {
      name: "Ground Breaking App",
      description:
        "The ground breakinng App is an event app that is primarily built foruse only at the launching event of a popular estate in Awka",
      stack: ["Flutter", "Bloc", "Build Runner", "Freeze", "RX Dart", "MVVM"],
      cover: breakn,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/gve_ground_breaking",
        },
      ],
    },
    {
      name: "Mayuk Construction",
      description:
        "An informative website for a client who wants to be avaialable on the online space. No heavy requirements so i's pretty much basic.",
      stack: ["Javascript", "HTML", "CSS", "Email JS"],
      cover: may,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://www.mayuk.info/",
        },
      ],
    },
    {
      name: "Portfolio Website :)",
      description:
        "My Portfolio website. This is pretty much the same website you are on at the moment. I guess it's part of what I have built afterall :)",
      stack: ["React", "Next JS", "Styled Components"],
      cover: pf,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/My-portfolio-website",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://kingsleyetoka.com",
        },
      ],
    },
  ],
  fun: [
    {
      name: "JWT Authentication Server",
      description:
        "A sample project to show how to do authentication in Nest JS using JWT Tokens",
      stack: ["Nest JS", "Postgres", "Docker"],
      cover: hse,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Innovate-Space/authentication_backend",
        },
      ],
    },
    {
      name: "Facebook UI Clone",
      description: "A sample clone of Facebooks mobile App home",
      stack: ["Flutter", "Dart"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/facebook_ui_clone_flutter",
        },
      ],
    },
    {
      name: "Crypto Promo Page",
      description:
        "A sample project design for the landing page of a crypto promotion",
      stack: ["Angular", "SASS"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/promo_page",
        },
        {
          icon: "bx bx-link-alt",
          link: "promo-page.vercel.app",
        },
      ],
    },
    {
      name: "Url Shortening",
      description:
        "A sample project challenge from frontend mentor that enables users to generate a short version of any URL",
      stack: ["HTML", "CSS", "Javascript"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Innovate-Space/URL-shortening-API-landing-page",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://url-shortening-api-landing-page-sandy.vercel.app/",
        },
      ],
    },

    {
      name: "Redux Only Chat App",
      description:
        "A sample app that help master keey redux concepts like store, action, dispatch, middle-ware, state, reducers etc",
      stack: ["React", "Redux"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/redux-mastery",
        },
        {
          icon: "bx bx-link-alt",
          link: " https://sleez007.github.io/redux-mastery/",
        },
      ],
    },
    {
      name: "Real Estate Landing Page",
      description:
        "A sample landing page for a real estate promotion on social media and online generally",
      stack: ["HTML", "SASS", "GSAP"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/gve",
        },
        {
          icon: "bx bx-link-alt",
          link: "http://gve.vercel.app/",
        },
      ],
    },
  ],
};

const Wrapper = styled.section.attrs({ id: "portfolio" })`
  padding-block: 6em;
  position: relative;

  h2 {
    margin-bottom: 4em;
  }

  .project {
    margin-bottom: 2em;
    h3 {
      font-weight: var(--fw-semi-bold);
      color: ${({ theme }: Props) => theme.txtPrimary400};
    }
    @media (max-width: 60em) {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      background-color: ${({ theme }: Props) => theme.secondaryBg};
      border-radius: 0.2em;
      overflow: hidden;

      &__content {
        & > * + * {
          margin-top: 0.6em;
        }
        padding: 1em;
        .flex {
          justify-content: start;
          gap: 0.5em;
          flex-wrap: wrap;
        }

        & > p {
          display: none;
        }
        .project__card {
          font-size: 0.8rem;
        }
        .project__stack {
          li {
            font-size: 0.7rem;
            color: ${({ theme }: Props) => theme.expCardHover};
          }
        }
        .project__env {
          ul {
            justify-content: start;
          }
          li {
            font-size: 1.8rem;
            a {
              color: ${({ theme }: Props) => theme.expCardHover};
            }
          }
        }
      }
    }

    img {
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 10px;
      @media (max-width: 60em) {
        border-radius: 0px;
      }

      &:hover {
        filter: none;
        -webkit-filter: grayscale(0%);
      }
    }

    @media (min-width: 60em) {
      margin-bottom: 6em;
      grid-template-columns: repeat(12, 1fr);
      display: grid;
      align-items: center;
      gap: 2em;

      &__image {
        grid-area: 1 / 1 / 2 / 8;
        height: 100%;
        position: relative;
        border-radius: 10px;
      }

      &__content {
        z-index: 1;
        grid-row: 2;
        grid-area: 1/7/2/-1;
        text-align: right;
        padding: 1.5em 1em;

        .project-feat {
          color: ${({ theme }: Props) => theme.expCardHover};
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 0.9em;
        }

        h3 {
          margin-bottom: 0.8em;
          font-size: 1.2rem;
        }

        .project__card {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          background: ${({ theme }: Props) => theme.projectColor};
          padding: 2em 1em;
          border-radius: 6px;
          margin-bottom: 0.8em;

          p {
            font-size: 0.88rem;
          }
        }
        .project__env ul,
        .project__stack ul {
          gap: 0.8em;
          justify-content: flex-end;
          margin-bottom: 0.8em;
          flex-wrap: wrap;
        }

        .project__stack ul li {
          font-size: 0.799rem;
          color: ${({ theme }: Props) => theme.expCardHover};
        }
        .project__env ul a {
          font-size: 1.6rem;
          color: ${({ theme }: Props) => theme.txtPrimary400};
        }
      }

      &:nth-child(even) {
        & > .project__image {
          grid-area: 1/ 6 / 2 / -1;
        }

        & > .project__content {
          grid-area: 1/1/2/7;
          text-align: left;
        }

        .project__env ul,
        .project__stack ul {
          justify-content: flex-start;
        }
      }
    }
  }

  .pxb {
    margin-top: 6em;
    margin-bottom: 3em;
    justify-content: center;
  }
  .others {
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minMax(22em, 1fr));

    .fun {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      background-color: ${({ theme }: Props) => theme.secondaryBg};
      border-radius: 0.2em;
      padding: 2em;
      transition: 0.2s all ease-in;

      &:hover {
        transform: translateY(-0.3em);
      }

      & > * + * {
        margin-top: 1em;
      }
      .ico {
        justify-content: space-between;

        .ddd {
          font-size: 2.4rem;
        }
      }
      h3 {
        margin-bottom: 0.8em;
        font-weight: var(--fw-semi-bold);
        color: ${({ theme }: Props) => theme.txtPrimary400};
        @media (min-width: 60em) {
          font-size: 1.2rem;
        }
      }
      p {
        font-size: 0.88rem;
        @media (max-width: 60em) {
          font-size: 0.8rem;
        }
      }

      .fun__env ul,
      .fun__stack ul {
        justify-content: flex-start;
        gap: 1em;
        flex-wrap: wrap;
      }

      .fun__stack ul li {
        font-size: 0.799rem;
        color: ${({ theme }: Props) => theme.expCardHover};
      }
      .fun__env ul a {
        font-size: 1.6rem;
        color: inherit;
      }
    }
  }
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <h1 className="side">PORTFOLIO</h1>
      <Container>
        <h2 className="section__title">
          <span className="deco">03. </span> Some Things I&#39;ve Built{" "}
          <span className="line"></span>
        </h2>
        <ul role="list">
          {projects.featured.map((e, i) => (
            <ProjectItem key={e.name} {...e} />
          ))}
        </ul>
        <Fade ssrFadeout bottom>
          <h2 className="section__title text-center pxb">
            Other Note Worthy Projects
          </h2>
          <div className="grid others">
            {projects.fun.map((e, i) => (
              <FunItem key={i} {...e} />
            ))}
          </div>
        </Fade>
      </Container>
    </Wrapper>
  );
};

const FunItem = ({ name, description, cover, stack, environment }: Project) => {
  return (
    <div className="fun">
      <div className="flex ico">
        <div>
          <i className="bx bx-folder ddd"></i>
        </div>
        <div className="fun__env">
          <ul role="list" className="flex">
            {environment.map((s) => (
              <li key={s.icon}>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                >
                  <i className={s.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="fun__stack">
        <ul className="flex" role="list">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectItem = ({
  name,
  description,
  cover,
  stack,
  environment,
}: Project) => {
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
            <ul className="flex" role="list">
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="project__env">
            <ul className="flex" role="list">
              {environment.map((s) => (
                <li key={s.icon}>
                  <a
                    href={s.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer"
                  >
                    <i className={s.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default Portfolio;
