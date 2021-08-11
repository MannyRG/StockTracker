import {Spacers, Div,
    ModalButton as Btn,
    Modal as Container,
    ModalBlock as Block, 
    ModalTitle as Title,
    ModalInput as Input,
    ModalList as List,
    ModalResultsBlock as ResultsBlock,
    ModalResult as Result,
    MSpan, Exit,
    Span, Xicon, TopDiv, Btn as Button, UndoIcon,
    ModalAddBtn as AddBtn} from '../../styles/addModalStyle.js'
import { useState, useRef, useContext } from 'react'
import {GrAdd as ADDIcon} from "react-icons/gr"
import {MyContext} from "../../Context/Context.js"


const Modal = ({isOpen, slugs, id}) => {
    const {reList,setReList } = useContext(MyContext)
    const searchRef =useRef("")
    const menuRef =useRef()
    const undoRefVal = {
        ticker: "",
        idx: -1,
        id: 0,
        redo: false
    }
    const StockRef = useRef(slugs)
    const undoRef = useRef(undoRefVal)

    const [results, setResults] =useState([])
    const [stock, setStock] =useState(slugs)


const handleSearch= async (symbol)=>{
    console.log(symbol)
    const res = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=c3rko5aad3i88nmluar0`)
    const result = await res.json()
    await console.log(result)
    await setResults([result])
    
}

const handleAdd = (ticker)=>{
        // Return if ticker is already there
        if(stock.some((tick,id)=>tick[id+1] === ticker)) return;
        //  assign key 
        const assignKey= stock.findIndex((tick, id)=>{
        if(tick[id+1] === 0) return id;
            return id;})
            // sets Keys
    setStock(stock.map((stk, id)=>{
            if(id === assignKey) return {[id+1]:ticker};
            return stk;
    }))
}

const handleDelete = (ticker)=>{
    //  assign key 
    undoRef.current.redo = true;
    undoRef.current.ticker = ticker

    const assignKey = stock.findIndex((tick, id)=>{
    if(tick[id+1] === ticker) return tick;
        return id;})
        // sets Keys
    undoRef.current.idx = assignKey;
    setStock(stock.map((stk, id)=>{
        if(id === assignKey){
            undoRef.current.id = id+1;
            return {[id+1]:0};
        };
        return stk;
    }))
}

const handleRedo = ()=>{
    const undo = undoRef.current;
    setStock(stock.map((stk, idx)=>{
        if(idx === undo.idx){
            undoRef.current = undoRefVal
            return {[undo.id]:undo.ticker};
        };
        return stk;
    }))
}

const UpdateList =async(stock, id)=>{
    const data = stock
    const res = await fetch("http://127.0.0.1:8000/api/stocks/" + id, {
        method: "PUT", 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)

      })
    const status = await res.status
      if (status === 200) isOpen(false);  setReList(reList+1);
}
      

const disableBtn =()=>{
    // testing for chnages
    const prevStocks = StockRef.current;
   const compared = stock.every((stk, idx)=>stk[idx+1]=== prevStocks[idx][idx+1])
    return compared;
}

    return (
        <Container  >
            <Block ref={menuRef}>
                <TopDiv> 
                    <Button visible={undoRef.current.redo} onClick={()=>handleRedo()}> Undo <UndoIcon size={20}/></Button>
                    <Button 
                        visible={true}
                        onClick={()=>isOpen(false)}> 
                        <Exit size={20}/> 
                    </Button>
                </TopDiv>
                <Title> Update Your List </Title>
                <Spacers/>
            
                <List>
                    {stock.map((stock,id)=>{
                      
                        if(stock[id + 1]=== 0) return null
                        if(stock[id + 1]=== undefined) return null

                        return (
                            <Span key={id} onClick={()=>handleDelete(stock[id + 1])}>
                                {stock[id + 1].toUpperCase()} <Xicon />
                            </Span>
                        )
                    })}

                </List>
                 SEARCH AND ADD 4 STOCKS HERE
                <Div>
                    
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
                                <MSpan>  "{data.ticker}"</MSpan>
                                <MSpan> Name: {data.name}</MSpan>
                                <MSpan> Date IPO: {data.ipo}</MSpan>
                                <MSpan> Exchange: {data.exchange}</MSpan>
                                <a href={data.weburl}>{data.weburl}</a>
                                <AddBtn onClick={()=>handleAdd(data.ticker)}> ADD <ADDIcon /> </AddBtn>
                            </Result>
                        )
                    })}
                </ResultsBlock>
                <Btn 
                    type="button" 
                    value="UPDATE" 
                    disabled={disableBtn()}
                    onClick={()=>{UpdateList(stock, id)}} 
                    />
            </Block>
        </Container>
    )
}

export default Modal
