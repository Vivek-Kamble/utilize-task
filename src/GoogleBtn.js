import React, {Component, useState } from 'react'
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = '93589983739-75aumkn58g6c3fdmerrnc32hf807q9it.apps.googleusercontent.com';




class GoogleBtn extends ReactDOM{
    state = {
        isLogined: false,
        accessToken: ''
      };
       login(response) {
        if(response.access_token){
           this.setState(({
            isLogined: true,
            accessToken: response.access_token
          }));
        }
         responseGoogle(response);
      }
    
       logout (response) {
         this.setState(({
          isLogined: false,
          accessToken: ''
        }));
        responseGoogle(response);
      }
    
      handleLoginFailure (response) {
        alert('Failed to log in')
      }
    
      handleLogoutFailure (response) {
        alert('Failed to log out')
      }
    // getting name,mail,nd imageurl using react  hooks
    getprofile(response){
      const [name,setname] = useState('');
    const [mail,setmail] = useState('');
    const [imageUrl,setimageUrl] = useState('');
    }
    // super(props);
     responseGoogle(response){
        // console.log(response);
        // console.log(response.profileObj);
        getprofile(response)
        // setname(response.profileObj.name)
        console.log(name);
      }


    render(){
      return (
        <div>
            <p>logout</p>
            <GoogleLogout
              clientId={ CLIENT_ID }
              buttonText='Logout'
              onLogoutSuccess={  logout(this) }
              onFailure={  handleLogoutFailure(this)}
            >
            </GoogleLogout>
            
            <p>login</p>
             <GoogleLogin
              clientId={CLIENT_ID}
              buttonText='Login'
              onSuccess={  login(this) }
              onFailure={  handleLoginFailure(this) }
              cookiePolicy={ 'single_host_origin' }
              responseType='code,token'
            />
        </div>
        )
    }

}

// login =  login.bind();
// handleLoginFailure =  handleLoginFailure.bind(  );
// logout =  logout.bind(  );
// handleLogoutFailure =  handleLogoutFailure.bind(  );


 
  
    


export default GoogleBtn;
