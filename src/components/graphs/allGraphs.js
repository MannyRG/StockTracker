import {useContext} from 'react'
import Graph from './index.js'
import UpdateListModal from "../Modals/UpdateListModal.js"
import {MyContext} from "../../Context/Context.js"
import {Loader} from "../../styles/mainStyle"
import {useParams} from "react-router-dom";
import {Container, Block} from '../../styles/mainStyle'
import NoData from './NoData.js'


const AllGraphs = ()=> {
    
    let { slug } = useParams();
    const {open, data, status, updateModal, setUpdateModal} = useContext(MyContext)


    if(status==="loading"){
        return (
            <Container isOpen={open}>
                <Loader size={50}/>
            </Container>
        )
    }

    if(status==="success"){
    
    const StockDataArray = data.filter( (single)=>single.stock_name.toUpperCase()=== slug)
    const stockData = StockDataArray[0];
    
    
    const Graphs = stockData.symbol.map((slug, key)=>{

        if(slug[key+1] === 0){
            return (
            <Block key={key}>
                <NoData isOpen={setUpdateModal} />
            </Block>
            )
        } 
        return (
                <Block key={key}>
                    <Graph slug={slug[key+1]} />
                </Block>
        )
    })

    return (
        <Container isOpen={open}>
            {updateModal?<UpdateListModal slugs={stockData.symbol} id={stockData._id} isOpen={setUpdateModal}/>: null}
            {Graphs}
        </Container>
    )
    }
}


export default AllGraphs
