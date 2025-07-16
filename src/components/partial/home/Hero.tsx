import Image from "next/image";
import styled from "styled-components";
import { useGlitch } from "react-powerglitch";
import { Container } from "../../Container";
import Button from "../../shared/Button";
import kingsley from "../../../../public/assets/images/man.png";
import FadeIn from "react-fade-in";
import { Circle, Hex, Ke } from "../../Shape";

const HeroWrapper = styled.section`
  padding-top: 4em;
  min-height: 30em;
  position: relative;
  overflow: hidden;
  p {
    margin-block: 1.3em;
  }

  .hero__image {
    display: none;

    @media (min-width: 50em) {
      display: block;
    }
  }
`;

const Hero = () => {
  const glitch = useGlitch();
  return (
    <HeroWrapper>
      <h1 className="side">KE</h1>
      <Ke />
      <Hex />
      <Circle />
      <Container>
        <div className="hero_container grid even-columns">
          <div className="hero__detail">
            <FadeIn delay={250}>
              <p className="text-primary-300">Hi, my name is</p>
              <h1 ref={glitch.ref}>
                KINGSLEY
                <br />
                ETOKA
              </h1>
              <p className="me_txt">
                I&#39;m a Fullstack Web and Mobile App Developer With Over 8
                years of experience building Industry Leading Web and Mobile App
                Solutions with next gen technologies.
              </p>
              <Button
                as="a"
                href="/assets/docs/kingsley_etoka.pdf"
                download={true}
                inverse={true}
              >
                DOWNLOAD CV
              </Button>
            </FadeIn>
          </div>
          <div className="hero__image">
            <Image src={kingsley} priority alt="Etoka Kingsley" />
          </div>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
