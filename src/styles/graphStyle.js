import styled from "styled-components";


export const Graph = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
   

`;

export const Line = styled.div`
  width: 100%;
  height: 100%;

`;




export const DayBtns = styled.div`
    display: grid;
    margin: 10px;
    grid-template-columns: repeat(5 , 1fr);
    grid-gap: 20px;
    height: 30px;
    min-width: calc(100% - 10px);
`;

export const Btn = styled.input`
`;



export const NoData = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  height:50%;
  width: 50%;
  border: transparent;
  background: inherit;
  cursor: pointer;
`;

export const NoDataBlock = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    ${NoData}{
      border: 1px solid black;
      background: lightgrey;
    }
  }
  
`;


export const NoDataMessage = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 40%; 
  height: 30%;
  border: 1px solid black; 


`;