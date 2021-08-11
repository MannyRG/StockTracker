
import styled from "styled-components";
import {Link} from "react-router-dom";
import { MdDashboard  , MdSearch, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";





export const Container = styled.nav`
    width: ${({isOpen})=> isOpen?"180px": "80px"};
    height: calc(100vh + 50px);
    background: lightblue;
    position: absolute;
    text-align: center;
    padding-top: 20px;
    transition: .5s ease-in-out;
    
`;

export const  NavBtn= styled.input`
    padding: 0 10px;  
    height: 40px;
`;


export const  Nav= styled.nav`
    width: calc(100vw - ${({isOpen})=> isOpen?"180px": "80px"};);
    margin-left: ${({isOpen})=> isOpen?"180px": "80px"};
    height: 50px;
    display: flex;
    background: lightblue;
    transition: .5s ease-in-out;
    display:flex;
    justify-content:  space-around;
    align-items: center;
`;

export const  NavList= styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
`;

export const  Span= styled.span`
    display: ${({isOpen})=> isOpen?"inline-block": "none"};
    transition: 1s ease-in-out;
`;

export const NavLink= styled(Link)`
    height: 50px;
    margin-top: 2rem;
    display: flex;
    justify-content:  space-around;
    align-items: center;
    color: #FFFFFF;
    text-decoration: none;
    padding: 0 18px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
   
`;

export const  MyStocks= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export const DashIcon = styled(MdDashboard)`


`;
export const SearchIcon = styled(MdSearch)`
 
`;

export const Close= styled(MdKeyboardArrowLeft)`
    border: 1px solid grey;
    border-radius: 100%;
`;

export const Open = styled(MdKeyboardArrowRight)`
    border: 1px solid grey;
    border-radius: 100%;
`;


export const Modal = styled.div`
    position: absolute;
    top: 0;
    width: 120vw;
    height: 100vh;
    z-index: 20; 
    background: rgba(30, 30, 30, .5);
    display: flex;
    justify-content:center;
    align-items: center;
`;



export const ModalBlock = styled.div`
    border-top: 10px solid lightblue;
    width: 200px;
    height: 200px;
    background-color: white;
    display: flex;
    padding: 1rem;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    z-index: 999; 
`;


export const ModalButton = styled.input`
    height: 25px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin: .5rem 0;
    border-radius: 25px;
    padding: 0 5px;
    border: 1px solid black;
`;

export const Div = styled.div`
    width: 200px;
    height: 200px;
`;


export const Extra = styled.div`
    width: clamp(200px, 30%, 400px);
    display:flex;
    align-items: center;
    justify-content: space-around;
`;
