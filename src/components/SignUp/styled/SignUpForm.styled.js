import styled from 'styled-components';

export const SignupFormContainer = styled.div`
    position: relative;
    margin: 5% auto;
    width: 800px;
    height: 500px;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const SignupFormWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 40px;
    width: 400px;
    height: 500px;

    h1 {
        margin: 0 0 20px 0;
        font-weight: 300;
        font-size: 2rem;
    }
`;

export const SignupFormImage = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    padding: 40px;
    width: 400px;
    height: 500px;
    background: url(${(props) => props.background});
    background-size: cover;
    background-position: center;
    border-radius: 0 10px 10px 0;
`;

export const SignUpFormInput = styled.div`
    padding-bottom: 0.5rem;

    p {
        font-size: 0.7rem;
        color: #FF0000;
        margin: 0;
    }
`;

export const SignUpLinkStyled = styled.div`
    font-size: 1rem;
    position: absolute;
    bottom: 20px;
    left: 40px;
`;
