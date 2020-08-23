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
    flex: 1;
    justify-content: flex-start;
    
    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #FFFFFF;
    };
`;

export const NavigationLogo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    
    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #FFFFFF;
    };
`;

export const NavigationItems = styled.nav`
    margin-right: 1.5rem;
    flex: 1;
    display: flex;
    justify-content: flex-end;

    a, i {
        text-decoration: none;
        color: #FFFFFF;
        cursor: pointer;
    }

    i {
        line-height: 3.5rem;
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

    .dropdown {
        overflow: hidden;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        right: 2rem;
        background-color: #5C6BC0;
        min-width: 7rem;
        box-shadow: 0px 8px 16px 0px rqba(0,0,0,0.2);
        z-index: 1;

        i {
            line-height: 0.5rem;
            margin-right: 0.5rem;
        }

        a:hover, a:active, a.active, button:hover, button:active button.active, i:hover, i:active i.active, span:hover, span:active, span.active {
        color: yellow;
    } 
    }

    .dropdown-content a, span {
        float: none;
        color: #FFFFFF;
        padding: 0.8rem 1rem;
        text-decoration: none;
        display: block;
        text-align: center;
        cursor: pointer;
    }

    .dropdown-content button {
        border: none;
        outline: none;
        color: #FFFFFF;
        padding: 0.8rem 1rem;
        background-color: inherit;
        font-size: inherit;
        text-align: center;
        margin: 0;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
`;