import styled from "styled-components"
import { Props } from "../theme/styling/GlobalStyle";

const KeWrap = styled.svg.attrs({ xmlns: "http://www.w3.org/2000/svg",  })`
    position: absolute;
    bottom: 2em;
    left:2em;
    z-index:-1;
`;
export const Ke =  () => {
    return (
        <KeWrap>
             <g id="traingles" transform="translate(-92 -917)">
                <path id="Polygon_2" data-name="Polygon 2" d="M44.5,19.985,17.329,67H71.671L44.5,19.985M44.5,0,89,77H0Z" transform="translate(92 933)" fill="#7165d9" opacity="0.106"/>
                <path id="Polygon_3" data-name="Polygon 3" d="M44.5,19.985,17.329,67H71.671L44.5,19.985M44.5,0,89,77H0Z" transform="translate(124 917)" fill="#7165d9" opacity="0.106"/>
            </g>
        </KeWrap>
    )
}

const HexWrap = styled.svg.attrs({ xmlns: "http://www.w3.org/2000/svg",  })`
    position: absolute;
    top: 50%;
    left:50em;
    transform: translate(-50%, -50%);
    z-index:-1;
`;

export const Hex = () => {
    return (
        <HexWrap width="141.519" height="140.81" viewBox="0 0 141.519 140.81">
            <g id="Group_48" data-name="Group 48" transform="translate(-53.507 -190.655)">
                <g id="Group_32" data-name="Group 32" transform="translate(-6980.288 -589.881)" opacity="0.115">
                <path id="Path_83" data-name="Path 83" d="M30.259-3.464l33.259,19.2v38.4l-33.259,19.2L-3,54.143v-38.4ZM57.519,19.2,30.259,3.464,3,19.2V50.679L30.259,66.417,57.519,50.679Z" transform="translate(7036.795 848)" fill="#7165d9"/>
                </g>
                <g id="Group_46" data-name="Group 46" transform="translate(-6905.288 -589.881)" opacity="0.115">
                <path id="Path_83-2" data-name="Path 83" d="M30.259-3.464l33.259,19.2v38.4l-33.259,19.2L-3,54.143v-38.4ZM57.519,19.2,30.259,3.464,3,19.2V50.679L30.259,66.417,57.519,50.679Z" transform="translate(7036.795 848)" fill="#7165d9"/>
                </g>
                <g id="Group_47" data-name="Group 47" transform="translate(-6943.288 -653.881)" opacity="0.115">
                <path id="Path_83-3" data-name="Path 83" d="M30.259-3.464l33.259,19.2v38.4l-33.259,19.2L-3,54.143v-38.4ZM57.519,19.2,30.259,3.464,3,19.2V50.679L30.259,66.417,57.519,50.679Z" transform="translate(7036.795 848)" fill="#7165d9"/>
                </g>
            </g>
        </HexWrap>

    )
}

const CircleWrap = styled.svg.attrs({ xmlns: "http://www.w3.org/2000/svg",  })`
    position: absolute;
    right:-2em;
    bottom:-40px;
    height: 35em;
    width: 35em;
    z-index:-1;

    @media(max-width:1398px ){
        display: none;
    }
    @media(min-width: 1840px){
        display: none;
    }

    #Subtraction_2{
        fill: ${({theme}: Props) => theme.circleColor};
    }
`;

export const Circle = () => {
    return(
        <CircleWrap  className="half-circle"  viewBox="0 0 613 653.001">
            <path id="Subtraction_2" data-name="Subtraction 2" d="M613,807H49.23A445.675,445.675,0,0,1,3.268,656.9a454.819,454.819,0,0,1-.952-100.262,449.586,449.586,0,0,1,6.8-44.531c2.958-14.453,6.676-28.914,11.052-42.982,4.328-13.914,9.4-27.778,15.082-41.206A449.808,449.808,0,0,1,273.923,189.246c13.429-5.68,27.293-10.754,41.207-15.082,14.074-4.377,28.535-8.1,42.981-11.052a449.638,449.638,0,0,1,44.532-6.8,455.19,455.19,0,0,1,91.714,0,449.63,449.63,0,0,1,44.532,6.8c14.446,2.957,28.907,6.675,42.981,11.052,10.428,3.244,20.9,6.933,31.13,10.966V807Z" transform="translate(0 -154)"/>
        </CircleWrap>
    )
}


