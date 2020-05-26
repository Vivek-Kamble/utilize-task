import React from 'react'
import ReactDOM,{render} from 'react-dom'
import {Table,Button,Modal,Form} from 'react-bootstrap'
import './Owner.css'
import orderData from  './assets/DummyData.json'
import { GoogleLogout } from 'react-google-login';
class Owner extends React.Component{
    constructor(props)
    {
        super()
        this.CLIENT_ID= props.id
        this.logout = props.logout
        this.handleLogoutFailure=props.handleLogoutFailure
        this.getdata();
        
    }
    state = {
        // show:false,
        modalToggle:false,
        updateIndex:1,
        
            name:'',
            email:'',
            product:'',
            quantity:''
        
    }
     arr = orderData
     newarr = this.arr
    //   [show, setShow] = useState(false);
        // show=false;
      handleClose = () => {
    //   console.log(document.getElementById('ss').value)
      this.setState({
        //   show:false
        modalToggle:false
      });}
      handleShow = (i)=>
      {
      this.setState({
        //   show:true
        modalToggle:true,
        updateIndex:i,
        
            name:this.newarr[i].customer_name,
            email:this.newarr[i].customer_email,
            product:this.newarr[i].product,
            quantity:this.newarr[i].quantity
        
      })
    }
     deleteOrder=(i)=>{
        //  console.log(this.items[i])
        // this.items.pop(i)
        // this.forceUpdate()
        // console.log(this.items[i]);    
        this.newarr.splice(i,1)
        // delete this.items[i]
        this.items = []
        this.getdata()
        // this.getdata();
        ReactDOM.render(this.items, document.getElementById('data'));
    }
    items = []
    getdata= ()=>{
        for (const [index, value] of this.newarr.entries()) {
            this.items.push(<tr key={index}>
                <td> {index+1} </td>
                <td> {value.customer_name} </td>
                <td> {value.customer_email} </td>
                <td> {value.product} </td>
                <td> {value.quantity} </td>
                <td> <Button variant="primary" onClick={()=>this.handleShow(index)}>Update</Button>
                <Button variant="danger" className="ml-5" onClick={()=>this.deleteOrder(index)}>Delete</Button>
                </td>
                </tr>   )
          }
        //   console.log(this.items)
    }
    handlesubmit(){
        // console.log(this.newarr[this.state.updateIndex].customer_name,event.target.value);
        // console.log(this.state.name);
        this.setState({         
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            product:document.getElementById('product').value,
            quantity:document.getElementById('quantity').value
        });
        // this.newarr[this.state.updateIndex]=this.state.updateData
        // this.getdata()
        // this.handleClose();
        // console.log(this.state);
        
        
    }
    
    
    render(){
        return(
            <React.Fragment>
                <div>
               <div className="nav">
                    <div className="logout">
                    <GoogleLogout
                    clientId={ this.CLIENT_ID }
                    buttonText='Logout'
                    onLogoutSuccess={ this.logout }
                    onFailure={ this.handleLogoutFailure }
                    >
                    </GoogleLogout>
                    </div>
                    
               </div>
               <div>
                
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Sr.no.</th>
                    <th>customer_name</th>
                    <th>customer_email</th>
                    <th>product</th>
                    <th>quantity</th>
                    <th>Operation</th>
                    </tr>
                </thead>
                <tbody id="data">
                    { this.items }               
                </tbody>
                </Table>
               </div>
              
            </div>
            <Modal show={this.state.modalToggle}>
            <Modal.Header>
          <Modal.Title>Order Details</Modal.Title>
          <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={this.state.name} id="name"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" defaultValue={this.state.email} id="email"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Product</Form.Label>
            <Form.Control type="text" defaultValue={this.state.product} id="product"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" defaultValue={this.state.quantity}  id="quantity"/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
            </Modal>
                    
            </React.Fragment>
        )
        
    }
}

export default Owner;