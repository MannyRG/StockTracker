import styled from "styled-components";
import {AiOutlineLoading} from "react-icons/ai"



export const Container = styled.section`
    width: calc(100vw - ${({isOpen})=> isOpen?"180px": "80px"};);
    margin-left: ${({isOpen})=> isOpen?"180px": "80px"};
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    transition: .5s ease-in-out;
`;


export const Block= styled.div`
    padding: 10px;
    margin: .8rem  ${({isOpen})=> isOpen?".8rem": "2rem"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 30px 1px grey;
    background: rgba(255, 255, 255, 0.90);
    text-align: center;
    border-radius: 5px;
`;


export const Loader = styled(AiOutlineLoading)`
@keyframes Loading {
    from {
      transform: rotate(0turn);
    }
  
    to {
      transform: rotate(1turn);
    }
  }
  animation: Loading 3s infinite ;

`;


