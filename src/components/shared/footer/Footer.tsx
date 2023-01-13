import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";

const Wrapper = styled.footer.attrs({className: 'footer'})`
    padding-block: 6em;

    .flex{
        gap: 1em;
        font-size: 1.9rem;
        margin-top: 1.4em;

        a{
            color: ${({theme}: Props) => theme.expCardHover};
        }
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <p className="text-center">Designed & Built with love by Kingsley ©{new Date().getFullYear()}</p>

                <ul role='list' className="flex">
                    <li><a href="https://www.linkedin.com/in/kingsley-etoka-759609101/" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-linkedin-square' ></i></a></li>
                    <li><a href="https://github.com/sleez007" target='_blank'  referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-github'></i></a></li>
                    <li><a href="https://twitter.com/sleez_daemon" target='_blank'  referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-twitter'></i></a></li>
                    <li><a href=" https://wa.me/2348038070818" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-whatsapp'></i></a></li>
                    <li><a href="tel:+2348038070818"><i className='bx bx-phone'></i></a></li>
                </ul>
            </Container>
        </Wrapper>
    );
}

export default Footer;