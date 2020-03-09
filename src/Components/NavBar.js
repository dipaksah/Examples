import React, { Component } from 'react'
import {
	Button,
	Navbar,
    Nav, 
    NavbarBrand, 
    NavbarToggler, 
    Collapse, 
    NavItem, 
    NavLink, 
} from 'reactstrap'

export default class NavBar extends Component {


	constructor(props) {
		super(props)
	
		this.state = {
			isOpen: false
		}
	}
	
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};


    render() {
        return (
            <Navbar  dark expand="md" fixed-top className="navBar">
					<NavbarBrand href="/dashboard">BloodManager App</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/dashboard">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/profile">Profile</NavLink>
							</NavItem>
							<NavItem>
								
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
        )
    }
}
