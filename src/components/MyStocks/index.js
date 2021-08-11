import {Container, AddNewTab, Tab, Span, Title} from '../../styles/myStocksStyle'
import { useContext } from 'react'
import {MyContext} from "../../Context/Context.js"
import { FiPlusSquare as ADD} from 'react-icons/fi'
import {BsGraphUp as GraphIcon} from 'react-icons/bs'

const Index = () => {
    const {open, data, status , setAddModal, setTitle, list_id} = useContext(MyContext)
    
    return (
        <Container >
            <Title> Lists</Title>
            <AddNewTab onClick={()=>setAddModal(true)}>
                <Span isOpen={open}> ADD LIST</Span>  <ADD size={30}/>
            </AddNewTab>
            {status === "loading" &&(
                    <div>...Loading</div>
            )}
            {status === "success" &&
                data.map((data, key)=>{
                    const r = Math.floor(Math.random() * 255);
                    const g = Math.floor(Math.random() * 255);
                    const b = Math.floor(Math.random() * 255);
                    const color = `rgb(${r},${g},${b})`
                    
                    return(
                    <Tab 
                        to={`/${data.stock_name.toUpperCase()}`} 
                        onClick={()=>{
                            setTitle(data.stock_name.toUpperCase())
                            list_id.current = data._id;} }
                        key={key} >
                      <Span isOpen={open}> {data.stock_name.toUpperCase()}</Span> 
                        <GraphIcon size={30} color={color} />
                    </Tab>)
                })
             }
        </Container>
    )
}

export default Index
