import styled from 'styled-components';

const backgroundColor = '#3F51B5';

export const NavigationBar = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.5rem;
    background-color: ${backgroundColor};
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavigationBrand = styled.div`    
    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #FFFFFF;
    };
`;

export const NavigationLogo = styled.div`
    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #FFFFFF;
    };
`;

export const NavigationItems = styled.nav`
    margin-right: 1.5rem;

    a, i {
        text-decoration: none;
        color: #FFFFFF;
    }

    a:hover, a:active, a.active, i:hover, i:active i.active {
        color: yellow;
    }    
`;

export const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;    
`;

export const NavigationListItem = styled.li`
    margin: 0 1rem;
`;