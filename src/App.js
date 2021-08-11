import Sidebar from "./components/sidebar"
import './App.css';
import Dash from './components/dash.js'
import RenderGraph from './components/graphs/allGraphs.js'
import NavBar from "./components/navbar"
import {Switch,Route,useRouteMatch} from "react-router-dom";
import {useState, useRef, } from "react"
import {MyContext} from "./Context/Context.js"
import { useQuery} from "react-query";
import Modal from "./components/Modals/NewListModal"
import { ReactQueryDevtools } from 'react-query/devtools'



const StockTracker=()=> {

  let match = useRouteMatch("/");
  const [open, setOpen] = useState(true)
  const [updateModal ,setUpdateModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [title, setTitle] = useState("")
  const list_id = useRef()
  let [reList, setReList]= useState(0)
  const {data, status } = useQuery(["StocksList", reList], async ()=>{
  const res = await fetch("http://127.0.0.1:8000/api/stocks/")
  const data = await res.json();
    console.log(data)
    return data;
},{refetchOnWindowFocus: false})


if(match.isExact && title) setTitle("")

const cxtValues = {
  open, 
  setOpen, 
  data, status, 
  title,
  setTitle,
  list_id,
  setAddModal,
  updateModal,
  setUpdateModal,
  setReList,
  reList,
}
  
  return (

      <MyContext.Provider  value={cxtValues}>
        <Sidebar />
        <NavBar />
          <Switch>
              <Route  path="/" exact component={Dash} />
              <Route  path="/:slug" component={RenderGraph} />
          </Switch>

        {addModal?<Modal openModal={setAddModal}/>:null}
        <ReactQueryDevtools initialIsOpen={false} />
      </MyContext.Provider>

  );
}

export default StockTracker;
