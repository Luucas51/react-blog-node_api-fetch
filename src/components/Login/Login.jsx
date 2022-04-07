import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    


    const data = {
        email: email,
        password: password
      };
      
      const loginFetchRequest = () => {
          fetch('http://localhost:8000/api/user/login', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then((response) => response.json())
          .then((response) => {
              if(response.error) {
                  console.log(response.message[0].messages[0].message);
              } else {
                  console.log(response)
                  Cookies.set('token', response.token);

              }
          })

      }


    return (
        <div>
            <form action="post">
                <label htmlFor="input-email-register">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='input-email-register' />

                <label htmlFor="input-password-register">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='input-password-register'/>


                <button type="button" onClick={() => loginFetchRequest()}>Login</button>
            </form>
        </div>
    );
};

export default Login;