
import styled from "styled-components";
import {Link} from "react-router-dom";


export const Container = styled.div`
    width: 100%;   
`;

export const AddNewTab = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 18px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    border-left: none;
    border-right: none;
    background: transparent;
    color: #FFFFFF;
    cursor:pointer;
`;


export const Span = styled.span`
    display:${({isOpen})=> isOpen?"inline-block": "none"}
`;

export const Title = styled.span`
    font-size: 1.2rem;
    text-align: center;
    display: block; 
    border-bottom: 1px solid grey; 
    

`;

export const Tab = styled(Link)`
    width: 100%;
    height: 50px;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 18px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    border-left: none;
    border-right: none;
    background: transparent;
    text-decoration: none;
    color:black;
    
`;
