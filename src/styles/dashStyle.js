import styled from "styled-components";
import {Link} from "react-router-dom";



export const Container = styled.section`
    width: calc(100vw - ${({isOpen})=> isOpen?"180px": "80px"});
    margin-left: ${({isOpen})=> isOpen?"180px": "80px"};
    height: 100vh;
    transition: .5s ease-in-out;
    overflow: scroll;
    display: flex;
    Flex-wrap: wrap;
    justify-content: space-evenly;

`;



export const Card = styled(Link)`
    width: clamp(200px, 50%, 300px) ;
    height: clamp(200px, 45%, 400px);
    margin: 1rem;
    box-shadow: 0 15px 30px 1px grey;
    background: rgba(255, 255, 255, 0.90);
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .5rem;
    text-decoration: none;
    color: black;
`;

export const AddCard = styled.div`
    width: clamp(200px, 50%, 300px) ;
    height: clamp(200px, 45%, 400px);
    margin: 1rem;
    box-shadow: 0 15px 30px 1px grey;
    background: rgba(255, 255, 255, 0.90);
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .5rem;
    text-decoration: none;
    color: black;
    cursor: pointer;

`;


export const Loading=styled.div`
    width: clamp(200px, 50%, 300px) ;
    height: clamp(200px, 40%, 300px);
    margin: .5rem;
    border: 1px solid grey;
    box-shadow: 0 15px 30px 1px grey;
    background: rgba(255, 255, 255, 0.90);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
`;


export const List=styled.div`
    flex-grow:1;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(4 , 1fr);
    margin-top: 1rem;

`;

export const Stock=styled.div`
    display: flex;
    border: 1px solid black;
    margin: .2rem; 

`;

export const MiniGraph = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({color})=> color};
    
`;

export const MiniGraphSpan = styled.span`
    width: calc( 100% / 3);
    color:${({color})=> color};
    margin: 0 4px; 
    
`;

export const StockName = styled.div`
    width: 20%;
    display: flex;

    align-items: center;
    
`;

export const NoData=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;  
    margin: .2rem; 

`;
export const NoDataMessage=styled.span`

`;

