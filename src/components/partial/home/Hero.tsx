import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../Container";
import Button from "../../shared/Button";
import kingsley from '../../../../public/assets/images/man.png';
import FadeIn from "react-fade-in";

const HeroWrapper = styled.section`
    padding-top: 4em;
    min-height: 30em;
    p{
        margin-block: 1.3em;
    }

    .hero__image{
        display: none;

        @media(min-width: 50em){
            display: block;
        }
    }
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <div className="hero_container grid even-columns">
                    <div className="hero__detail">
                        <FadeIn delay={250}>
                            <p className="text-primary-300">Hi, my name is</p>
                            <h1>KINGSLEY<br/>ETOKA</h1>
                            <p className="me_txt">I'm a Fullstack Web and Mobile App Developer With Over 6 years of experience building Industry Leading Web and Mobile App Solutions with next gen technologies.</p>
                            <Button inverse={true}>DOWNLOAD CV</Button>
                        </FadeIn>
                    </div>
                    <div className="hero__image">
                        <Image src={kingsley} alt="Etoka Kingsley" />
                    </div>
                </div>
            </Container>
        </HeroWrapper>
    );
}

export default Hero;