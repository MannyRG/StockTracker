import {Container, NavList, NavLink, MyStocks, DashIcon, Span , Open, Close} from '../styles/sidebarStyle'
import Lists from './MyStocks/index'
import { useContext } from 'react';
import {MyContext} from "../Context/Context.js"


const Sidebar = () => {
    const {open, setOpen, setTitle } = useContext(MyContext)

    const handleOpener =()=>{
        setOpen(!open)
    }

    return (
        <Container isOpen={open}>
            {open? <Close size={40} onClick={handleOpener} />: <Open size={40} onClick={handleOpener}/>}
            <NavList>
                <NavLink to="/" onClick={()=>setTitle("")}> <Span isOpen={open}>Dashboard </Span><DashIcon size={30}/></NavLink>
            </NavList>
            
            <MyStocks>
                <Lists   />
            </MyStocks>
        </Container>
    )
}

export default Sidebar
