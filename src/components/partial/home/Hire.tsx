import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";

const Wrapper = styled.section`
padding-block: 6em;
background-color: ${({theme}: Props) => theme.secondaryBg};
position: relative;
.line{
    margin-inline: .6em;
}

`;

const Hire= () => {
    return (
        <Wrapper>
            <Container>
                <h2 className="section__title"> <span className="line"></span><span className="deco">04. </span>  What's Next? <span className="line"></span></h2>
                <h1 className="text-center">Get In Touch</h1>
            </Container>
        </Wrapper>
    );
}

export default Hire;