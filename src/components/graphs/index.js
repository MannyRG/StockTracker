
import { useQuery } from 'react-query';
import {Graph as Block, DayBtns, Btn } from "../../styles/graphStyle"
import {Loader} from "../../styles/mainStyle"
import { useState } from 'react';
import  LineGraph  from './lineGraph.js'



const Graph = ({slug}) => {

    const Year_From_Data = {
        res: "W",
        from: Math.floor(Date.now() / 1000) - 31536000
    }
    const M3_From_Data = {
        res:"W",
        from: Math.floor(Date.now() / 1000) - (2678400 * 3)
    }
    const M1_From_Data = {
        res: "D", 
        from: Math.floor(Date.now() / 1000) - 2629743
    }
    const W1_From_Data = {
        res: "D",
        from: Math.floor(Date.now() / 1000) - 604800
    }
    const D1_From_Data = {
        res:"60",
        from: Math.floor(Date.now() / 1000) - 86400
    }

    const [time, setTime] = useState(Year_From_Data)

    const {data, status}=useQuery([`${slug}`, time], async ()=>{

        const Day = Math.floor(Date.now() / 1000)
      
        const res = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${slug}&resolution=${time.res}&from=${time.from}&to=${Day}&token=c3rko5aad3i88nmluar0`)
        const data = await res.json();
        
        return data; 
    })
    
    
    return (
    <>
    { status==="loading"? 
        <Loader  size={40} />
    :
      <Block>
          
             <DayBtns>
                    <Btn type="button" value="1D" onClick={()=>setTime(D1_From_Data)}/>
                    <Btn type="button" value="1W" onClick={()=>setTime(W1_From_Data)}/>
                    <Btn type="button" value="1M" onClick={()=>setTime(M1_From_Data)}/>
                    <Btn type="button" value="3M" onClick={()=>setTime(M3_From_Data)}/>
                    <Btn type="button" value="1Y" onClick={()=>setTime(Year_From_Data)}/>
            </DayBtns>
         <LineGraph data={data} name={slug} date={time}/>
        </Block>
    }
    </> 
    )
}


export default Graph
