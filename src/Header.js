import React,{Component} from "react";
import { Navbar,NavbarBrand,Nav, NavToggler ,Collapse ,NavItem,Jumbotron,Button,Modal,ModalHeader,ModalBody } from "reactstrap";
import {NavLink} from 'react-router-dom'

class Header extends Component {
    constructor(){
        super();
        this.state={

            isNavOpen:false,
            isModalOpen:false
        }
    this.toggleNav=this.toggleNav.bind(this)
    this.toggleModal=this.toggleModal.bind(this)}
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    toggleNav(){
        this.setState({
       isNavOpen: !this.state.isNavOpen,
        });
    }
render(){ 
    return(
        <>
        <Navbar onClick={this.toggleNav} className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img style={{width: "100%",height: "40px", objectFit:"fill"}} src="tahalogo-noblue.png"
                    className="me-2" height="20" alt="logo" loading="lazy" />
               <NavbarBrand to='/' className='mr-auto'> <small>React App </small></NavbarBrand>           </a>
               <Nav className='ml-auto'>
    <NavItem>
<Button outline onClick={this.toggleModal}> Login </Button>
    </NavItem> </Nav>
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody></ModalBody>
    </Modal>
               <Collapse isOpen={this.state.isNavOpen } navbar>
 <NavItem><NavLink  to='/home'  className="nav-link" ><span className='fa fa-home fa-lg'>Home </span> </NavLink>
 </NavItem>            


</Collapse>

        </div>
    </Navbar>


    </>
    )
}
}
export default Header;