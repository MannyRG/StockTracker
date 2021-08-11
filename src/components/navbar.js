
import { useContext, useState} from 'react';
import {MyContext} from "../Context/Context.js"
import {Nav, NavBtn, Modal, ModalBlock as Block, ModalButton as Button, Extra} from "../styles/sidebarStyle.js"
import {useHistory} from "react-router-dom";




const Navbar = () => {
    const {open, title, list_id, setUpdateModal, reList, setReList, URL } = useContext(MyContext)
    const [openModal ,setOpenModal]=useState(false)
    const history = useHistory()

    const handleDeleteList = async(id)=>{
        console.log(id)
        const res = await fetch(URL + id, {method: "DELETE", })
        const status = await res.status
        console.log(status)
        if(status === 200) history.push("/") ; setReList(reList+1);
    }

    const modal = (
        <Modal >
            <Block >
                <Button type="button" value="Conform Delete" onClick={()=>{handleDeleteList(list_id.current); setOpenModal(false)}}/>
                <Button type="button" value="Cancel" onClick={()=>{setOpenModal(false)}}/>
            </Block>
        </Modal>
    )
    return (
        <Nav isOpen={open}>
            <h1>{title}</h1>
            <Extra>
            {title && <NavBtn value="Delete List" type="button" onClick={()=>{setOpenModal(true);}}/>}
            {title && <NavBtn value="Update List" type="button" onClick={()=>{setUpdateModal(true);}}/>}
            </Extra>
            {openModal? modal:null}
        </Nav>
    )
}

export default Navbar
