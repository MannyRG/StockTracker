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



const StockTracker=()=> {
  const URL =  "https://stocktracker-backend.herokuapp.com/api/stocks/"
  let match = useRouteMatch("/");
  const [open, setOpen] = useState(true)
  const [updateModal ,setUpdateModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [title, setTitle] = useState("")
  const list_id = useRef()
  let [reList, setReList]= useState(0)
  const {data, status } = useQuery(["StocksList", reList], async ()=>{
  const res = await fetch(URL)
  const data = await res.json();
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
  URL
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
      </MyContext.Provider>

  );
}

export default StockTracker;
