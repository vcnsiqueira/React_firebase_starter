import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const BackgroundLoader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,1);
    display: block;
`;

export const StyledLoader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    margin: -60px 0 0 -60px;
    border: 16px solid transparent;
    border-radius: 50%;
    border-top: 16px solid #3F51B5;
    width: 120px;
    height: 120px;
    -webkit-animation: ${spin} 2s linear infinite;
    animation: ${spin} 1s linear infinite;
`;
