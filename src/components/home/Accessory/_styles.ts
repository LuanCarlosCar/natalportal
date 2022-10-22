import styled from "styled-components";


export const Container = styled.main`
    background-color: #ffffff;
    text-align: center;
    padding: 4.6rem 0;

`;

export const Title = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-size: 3rem;
    color: #161212;
    margin-bottom: 1.4rem;
`;
export const Description = styled.p`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1rem;
    color: #404040;
    line-height: 1.5rem;
    
`;

export const CardList = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 6.25rem;  
    


    @media only screen and (max-width: 1056px) {
         display: grid;
         grid-template-columns: 12.375rem 12.375rem;     
    }

    @media only screen and (max-width: 657px) {
        display: inline-block;
        margin: auto;
        
    }
`;

