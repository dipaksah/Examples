import React, { Component } from 'react'
import { Container,
    Col,
    Row 
} from 'reactstrap'

// import axios from 'axios'


export default class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            user:[],
            isLoaded:false,
            isDeleted:false,
            isEdit:false,
            config: {
               headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
           }
        }
    }

    componentDidMount(){
        // const config={
        //     headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
        // }
        // axios.get('http://localhost:3001/users/all',config)
        // .then((response)=>{
        //     console.log(response);
        //     this.setState({
        //         user:response.data,
        //         isLoaded:true
        //     })
        // }).catch((err)=>console.log(err.response));
    }
    


    render() {
        return (
            <Container>
                <Row>
                    <Col xs="2">
                    </Col>

                    <Col xs="10" className="verticalNavigation2">
                    <p className="paraAdmin">this is users page</p>
                    {/* <React.Fragment>               
                        <div>
                            <h1 className="tableName donorstable">All users</h1>
                            <table className="table table-dark table-striped table-bordered mb-5 donorstable">
                                <thead className="table-head thead-dark">
                                    <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Contact Number</th>
                                    <th>Email</th>
                                    <th>Image</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map(users=>(
                                    <tr key={users._id}>
                                        <td>{users.firstName}</td>
                                        <td>{users.lastName}</td>
                                        <td>{users.address}</td>
                                        <td>{users.contact}</td>
                                        <td>{users.email}</td>
                                        <td><img className="donorsIMG"
                                        src={`http://localhost:3001/uploads/${users.image}`} alt="user image" /></td>
                                        <td>
                                            <Button onClick={()=>{
                                                if(window.confirm('Are you sure to delete this user'))
                                                this.userDelete(users._id)}} 
                                                className="btn-danger"
                                                data-toggle="tooltip" data-placement="top" title="Delete User">
                                                <FontAwesomeIcon icon={faTrashAlt}/> Delete</Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                     </React.Fragment>   */}
                    </Col>
                </Row>
            </Container>
        )
    }
}
