import styled from "styled-components";


export const Container = styled.section`
    width: calc(100vw - ${({isOpen})=> isOpen?"180px": "80px"};);
    margin-left: ${({isOpen})=> isOpen?"180px": "80px"};
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    transition: .5s ease-in-out;
`;


export const Cards= styled.div`
    padding: 0 15px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

`;