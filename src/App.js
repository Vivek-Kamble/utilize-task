import React from 'react';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
import './App.css';
import {Form,Button} from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login';
import Owner from './Owner';

const CLIENT_ID = '93589983739-75aumkn58g6c3fdmerrnc32hf807q9it.apps.googleusercontent.com';


class App extends React.Component{
  state = {
    isLogined: false,
    accessToken: ''
  };

  login=(response)=> {
    // console.log(response.access_token);
    
    if(response.tokenObj.access_token){
       this.setState(({
        isLogined: true,
        accessToken: response.tokenObj.access_token
      }));
    }
  }

   logout=(response)=> {
     this.setState(({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure=(response)=> {
    alert('Failed to log in')
  }

  handleLogoutFailure =()=> {
    alert('Failed to log out')
  }
   
  render(){
    return(
    this.state.isLogined ?
        <Owner id={CLIENT_ID} logout={this.logout} handleLogoutFailure={this.handleLogoutFailure}></Owner>
        :
      <div className="col-md-4 offset-md-4 loginContainer">
      
        <h5 style={{textAlign:"center"},{paddingTop:"20px"}}>Utilize app login</h5>
                <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <h5 style={{textAlign:"center"}}>OR</h5>
        </Form>
        <div>
         <GoogleLogin
          className="googleLogin"
          style={{textAlign:"center"}}
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      </div>  
      
      { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }
      </div>
      
    )
  }
}

export default App;

 
