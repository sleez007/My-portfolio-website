import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";
import Button from "../../shared/Button";

const Wrapper = styled.section`
    padding-block: 6em;
    background-color: ${({theme}: Props) => theme.secondaryBg};
    position: relative;
    .line{
        margin-inline: .6em;
    }


    h1{
        font-size: 1.875rem;
        margin-block: 1em;
        @media(min-width: 50em){
            font-size: 2.8rem;
        }
    }
    p{
        max-width: 37.5em;
        margin-inline:auto;
        margin-bottom:1.8em;
    }

`;

const Hire= () => {
    return (
        <Fade ssrFadeout left cascade>
            <Wrapper>
                <Container>
                    <h2 className="section__title"> <span className="line"></span><span className="deco">04. </span>  What's Next? <span className="line"></span></h2>
                    <h1 className="text-center">Get In Touch</h1>
                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur eaque quo autem sapiente vitae nam explicabo cum magni aliquid.</p>
                    <div className="flex">
                        <Button as="a"  className="text-center ">Shoot me an email</Button>
                    </div>
                </Container>
            </Wrapper>
        </Fade>
    );
}

export default Hire;