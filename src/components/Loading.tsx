import styled, { keyframes } from "styled-components";


const loadingAnimation = keyframes`
    0% {
        stroke-dashoffset: 285.59307861328125px;
        stroke-dasharray: 285.59307861328125px;
    }

    100% {
        stroke-dashoffset: 0;
        stroke-dasharray: 285.59307861328125px;
    }
`;


const LoadingWrapper = styled.svg.attrs({viewBox: '0 0 87.866 101.459', height:'101.45899963378906', xmlns: 'http://www.w3.org/2000/svg', width:'87.86599731445312'})`
    & .svg-elem-1{
        animation: ${loadingAnimation} 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both 5;
    }
`;

const LoadingIcon =()=> {
    return(
        <LoadingWrapper>
            <g id="logo" transform="translate(3 3.464)">
                <g id="hex">
                    <path id="Path_83" data-name="Path 83" d="M40.933,0,81.866,23.633V70.9L40.933,94.53,0,70.9V23.633Z" fill="none" stroke="#7064d7" strokeWidth="6" className="svg-elem-1"></path>
                </g>
                <text id="KE" transform="translate(24.205 61.53)" fill="#7462de" style={{fontSize: '40px', textAlign: 'center', letterSpacing:4.0, fontWeight: 500}}><tspan x="0" y="0">KE</tspan></text>
            </g>
        </LoadingWrapper>

    );
}

export default LoadingIcon;


  