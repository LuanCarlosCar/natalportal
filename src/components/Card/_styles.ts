import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 12.375rem;
    cursor: pointer;

    img{
        width: 12.5rem;
        height: 12.5rem;
        margin-bottom: .5rem;
    }
`;

export const Title = styled.h2`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.25rem;
    color: #161212;
    margin-bottom: 1rem;
`;
export const Description = styled.p`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #8D8D8D;
`;

