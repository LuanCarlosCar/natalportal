import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 7.5rem;
    padding-bottom: 0;

    .flex-img{
        display: flex;
        align-items: center;
        img{
            margin-right:  0.75rem;
        }
    }
`;

export const TitleLogo = styled.h1`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.5rem;
    color: #161212;
`;

export const NavBar = styled.ul`
    display: flex;
    list-style: none;
        li{
            margin-right: 3.125rem;
            a{
                text-decoration: none;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1rem;
                color: #161212;
                cursor: pointer;
                transition: .5S;
            }
            A:hover{
                color: #DA2535;
            }
        }
        li:last-child{
            margin-right: 0;
        }

        @media only screen and (max-width: 798px) {
display: none;
}
`;