import styled from "styled-components";


export const Container = styled.header`
    margin-top: 6.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 7.5rem;
    padding-bottom: 5rem;

        img{
            width: 37.5rem;
            height: 22.5rem;
        }

        .flex-Column{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        @media only screen and (max-width: 1212px) {
            img{
            width: 30.5rem;
            height: 20.5rem;
        }

        
    }

    @media only screen and (max-width: 1140px) {
            img{
           display: none;
        }

        justify-content: center;

        
    }

`;


export const Title = styled.h2`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 3rem;
    color: #161212;
    margin-bottom: 1.6rem;
`;

export const Descripton = styled.p`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    color: #404040;
    margin-bottom: 3rem;
    line-height: 1.5rem;
`;
