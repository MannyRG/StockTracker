import styled from "styled-components";
import {BiUndo} from "react-icons/bi"
import {BsX} from "react-icons/bs"

export const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20; 
    background: rgba(30, 30, 30, .5);
    display: flex;
    justify-content:center;
    align-items: center;
`;


export const ModalBlock = styled.div`
    border-top: 10px solid lightblue;
    width: 400px;
    height: 400px;
    background-color: white;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    z-index: 999; 
    text-align: center;
`;

export const Spacers = styled.div`
    border: 1px solid lightgrey;
    margin: 10px 20px ;
`;

export const Div = styled.div`
    display: flex;
    Justify-content: space-around;
    text-align: center;
`;

export const TopDiv = styled.div`
    display: flex;
    Justify-content: space-between;
    align-items: center;
`;

export const Btn = styled.button`
    display: flex;
    Justify-content: space-between;
    align-items: center;
    visibility: ${({visible})=> visible ? "visible" : "hidden"};
`;

export const Xicon = styled(BsX)`
    visibility: hidden;
    color: black;
`;

export const UndoIcon = styled(BiUndo)`
`;

export const Exit = styled(BsX)`
`;

export const Span = styled(Div)`
    &:hover{
        cursor: pointer;
        background:rgba(200, 55, 50, .5);
        ${Xicon}{
            visibility: visible;
        }
    }
`;

export const MSpan = styled.span`
    display: flex;
    Justify-content: space-around;
`;

export const ModalTitle = styled.h2`
    margin: .5rem;
`;

export const ModalInput = styled.input`
    border-radius: 25px;
    height: 25px;
    padding-left: 10px;
    margin: .5rem;
    outline: none;
    width: 180px;
    border: 1px solid black;
`;
export const ModalList = styled.div`
    width: 100%;
    height: 40px;
    display:flex;
    align-items: center;
    Justify-content: space-around;
    margin: .5rem 0;
    border: 1px solid lightblue;
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

export const ModalResultsBlock = styled.div`
    width: 100%;
    flex-grow: 1;
    border: 1px solid lightblue;
    overflow: scroll;

`;
export const ModalResult= styled.div`
    display: flex;
    flex-direction: column;
    height: 130px;
    margin: 10px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    Justify-content: space-around;
    align-items: flex-start;
    padding: 0 20px;
    position: relative;
`;

export const ModalAddBtn= styled.button`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 5px;
    right: 10px;
    width: 50px;
    padding: 3px;
    box-sizing: content-box;
`;
