import { useQuery } from 'react-query';
import { MiniGraph,MiniGraphSpan, StockName} from '../styles/dashStyle.js'
import {Loader} from "../styles/mainStyle";
import { BiLineChartDown as GraphDown, BiLineChart as GraphUp, BiCaretUp as ArrowUp, BiCaretDown as ArrowDown} from "react-icons/bi";




const DashGraph = ({slug}) => {

    const {data, status}=useQuery(`${slug}`, async ()=>{
        if(slug === 0) return slug;
        
        const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${slug}&token=c3rko5aad3i88nmluar0`)
        const data = await res.json();
        return data; 
    })

    return (
        <>
        {status === "loading"? 
        <Loader />
        :
        <>
            <MiniGraph color={data.dp > 0? "Green": "red"} >
            {data.dp > 0? <GraphUp size={50}/> : <GraphDown size={50}/>}
                <MiniGraphSpan color="black" >{data.c} USD </MiniGraphSpan>
                <MiniGraphSpan>
                    {data.dp > 0? "+" + data.d + " " : data.d + " " } 
                    ({parseFloat(Math.abs(data.dp)).toFixed(2)}) 
                    {data.dp > 0? <ArrowUp />: <ArrowDown />} 
                </MiniGraphSpan>
            </MiniGraph>
            <StockName>
                {slug}
            </StockName>
        </>
        }
        </>
    )
}

export default DashGraph
