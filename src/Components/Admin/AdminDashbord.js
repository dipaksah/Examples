import React, { Component } from 'react';
import { Button, Container,
	Navbar,UncontrolledDropdown,DropdownMenu,DropdownToggle,
	DropdownItem,
    Nav, Row,Col,
    NavbarBrand, 
	NavbarToggler, 
    Collapse, 
    NavItem,
    NavLink, 
    } from 'reactstrap';
import '../../Style.css';

import { FontAwesomeIcon 
} from '@fortawesome/react-fontawesome'

import { faHome, faUser, faCalendar, 
	faUserAlt, faAd, faChevronLeft, faTrash 
} from '@fortawesome/free-solid-svg-icons'

import Users from './Users'
import Donors from './Donors'
// import BackgroundImage from './Images/back1.jpg'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import AdminProfile from './AdminProfile';

export default class AdminDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	handleLogout=(event)=>{
		event.preventDefault();
		localStorage.removeItem('token');
		this.props.history.push('/');
	  }

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		return (
			<div>
			<Navbar className="navBar" dark expand="md" fixed-top>
					<NavbarBrand href="/">Blood Manager</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href=" ">Admin Dashboard</NavLink>
							</NavItem>
						</Nav>

						<Nav>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Account
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
								<NavLink href="/adminProfile">Profile</NavLink>
								</DropdownItem>
								<DropdownItem>
								<NavLink href=''>Setting</NavLink>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
								<Button color="warning" onClick={this.handleLogout}>
									{' '}
									Logout
								</Button>
								</DropdownItem>
							</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
						<NavItem>
								
							</NavItem>
					</Collapse>
				</Navbar>

	<Container fluid>
	   <Row>
		   <Col xs="2" className="verticalNavigation">
		   <ul className="navItem ">
                        <li><NavLink href="/AdminDashboard"><FontAwesomeIcon icon={faHome}/>&nbsp;&nbsp;&nbsp;Home</NavLink></li>
                        <li><NavLink href="/users"><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;&nbsp;&nbsp;users</NavLink></li>
                        <li><NavLink href="/"><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;&nbsp;&nbsp;Calender</NavLink></li>
						<li><NavLink href="/"><FontAwesomeIcon icon={faChevronLeft}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Events</NavLink></li>
						<li><NavLink href="/donors"><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;&nbsp;&nbsp;Donors</NavLink></li>
						<li><NavLink href="/"><FontAwesomeIcon icon={faAd}/>&nbsp;&nbsp;&nbsp;&nbsp;Add Events</NavLink></li>
						<li><NavLink href=" " onClick={this.handleLogout}><FontAwesomeIcon icon={faTrash}/>&nbsp;&nbsp;&nbsp;&nbsp;Logout</NavLink></li>
                    </ul>										
			   </Col>
		   <Col xs="10" className="verticalNavigation2" >
		   <p className="paraAdmin">
			   <img className="adminPicture" src="./Images/dipak.jpg" alt="AdminPicture" />
			   <hr />
			   Admin Dashboard..!!!! <br />
			    By Dipak Shah.</p>
				   <Nav >
				   <Router>
					   <Switch>						 
						  <Route path='/users'>
							   <Users/>
						  </Route>
						  <Route path='/donors'>
						    <Donors />
						  </Route>
						  <Route path='adminProfile'>
							  <AdminProfile/>
						  </Route>
						 
					   </Switch>
				   </Router>
				  </Nav>
		   </Col>
	   </Row>
	</Container>
 </div>
			
		);
	}
}
