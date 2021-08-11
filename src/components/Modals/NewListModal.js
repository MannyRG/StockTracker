import {Spacers, Div,
    ModalButton as Btn,
    Modal as Container,
    ModalBlock as Block, 
    ModalTitle as Title,
    ModalInput as Input,
    ModalList as List,
    ModalResultsBlock as ResultsBlock,
    ModalResult as Result,
    MSpan as Span,
    ModalAddBtn as AddBtn} from '../../styles/modalStyle.js'
import { useState, useRef, useContext } from 'react'
import {GrAdd as ADDIcon} from "react-icons/gr"
import {useHistory} from "react-router-dom";
import {MyContext} from "../../Context/Context.js"


const Modal = ({openModal}) => {
    const {reList, setReList, URL } = useContext(MyContext)

    const history = useHistory()
    const [name , setName] =useState("")
    const searchRef =useRef("")
    const menuRef =useRef()
    const [results, setResults] =useState([])
    const [Stock, setStock] =useState([
        {1:0},
        {2:0},
        {3:0},
        {4:0},
    ])


const handleSearch= async (symbol)=>{
    console.log(symbol)
    const res = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=c3rko5aad3i88nmluar0`)
    const result = await res.json()
    await console.log(result)
    await setResults([result])
    
}
const handleAdd = (ticker)=>{
        // Return if ticker is already there
    if(Stock.some((tick,id)=>tick[id+1] === ticker)) return;
        //  assign key 
    const assignKey= Stock.findIndex((tick, id)=>tick[id+1] === 0)
      
            // sets Keys
    setStock(Stock.map((stk, id)=>{
            if(id === assignKey) return {[id+1]:ticker};
            return stk;
    }))
   
}

const SubmitList =async()=>{
    if(name === "" || name === undefined) return;
    const data = {
        stock_name: name,
        symbol: Stock,
    }
    console.log(data)

    const res = await fetch(URL, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)

      })
    const status = await res.status
    if(status === 200){ openModal(false); history.push("/"); setReList(reList+1);}
}

    return (
        <Container onClick={(e)=>{if(e.target.contains(menuRef.current))openModal(false)}} >
            <Block ref={menuRef}>
                <Title> Name Your List </Title>
                
                <Div> 
                    <Input placeholder="Name" onChange={e=>{setName(e.target.value)}} value={name}/> 
                    <Btn 
                        type="button"
                        value="Submit" 
                        disabled={name? false: true}
                        onClick={()=>SubmitList()}/>
                   
                 </Div >
                <Spacers/>
               
                <List>
                    {Stock.map((stock,id)=>{
                      
                        if(stock[id + 1]=== 0) return null
                        if(stock[id + 1]=== undefined) return null

                        return (
                            <Div key={id}>
                                {stock[id + 1].toUpperCase()}
                            </Div>
                        )

                    })}

                </List>
                <Div>
                    SEARCH AND ADD 4 STOCKS HERE
                <Input placeholder="Search For Stock"  ref={searchRef}/>
                <Btn 
                    type="button" 
                    value="Search" 
                    onClick={()=>{handleSearch(searchRef.current.value.toUpperCase())}} 
                    />
                </Div>
                <ResultsBlock>
                    {results.map((data, idx)=>{
                        return (
                            <Result key={idx}>
                                <Span>  "{data.ticker}"</Span>
                                <Span> Name: {data.name}</Span>
                                <Span> Date IPO: {data.ipo}</Span>
                                <Span> Exchange: {data.exchange}</Span>
                                <a href={data.weburl}>{data.weburl}</a>
                                <AddBtn onClick={()=>handleAdd(data.ticker)}> ADD <ADDIcon /> </AddBtn>
                            </Result>
                        )
                    })}
                </ResultsBlock>
            </Block>
        </Container>
    )
}

export default Modal
