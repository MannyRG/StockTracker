import {useContext} from 'react'
import {MyContext} from "../Context/Context.js"
import { Container, Card, AddCard, Loading, List, Stock, NoData, NoDataMessage} from '../styles/dashStyle.js'
import {Loader} from "../styles/mainStyle";
import DashGraph from './dashGraph.js';
import { FiPlusSquare as ADD} from 'react-icons/fi'

const Dash = () => {
    const {open, data, status, setAddModal,setTitle, list_id} = useContext(MyContext)

    return (
        <Container isOpen={open}>
            {status === "loading" && 
               <Loading> <Loader  size={50}/></Loading>
            }
            {status === "success" && 
                data.map((data,key)=>{
                    const slug = data.stock_name.toUpperCase()
                    return(
                        <Card key={key} to={`/${slug}`} 
                            onClick={()=>{setTitle(slug); list_id.current = data._id }}>
                            <h1>{data.stock_name.toUpperCase()}</h1>
                            <List>
                                {data.symbol.map((slug, key)=>{
                                  if (slug[key+1] === 0){
                                      return(
                                    <NoData key={key}>
                                        <NoDataMessage>
                                            No Stock Saved
                                        </NoDataMessage>
                                    </NoData>
                                    )
                                }

                                return(
                                    <Stock key={key}>
                                        <DashGraph slug={slug[key+1]}/>
                                    </Stock>)
                                })
                                }
                            </List>
                        </Card>
                    )
                })
            }


            <AddCard onClick={()=>setAddModal(true)}>
                <ADD size={50}/>
            </AddCard>
        </Container>
    )
}

export default Dash
