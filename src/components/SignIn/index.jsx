import React from 'react';
import { Button, Input, FormGroup } from 'reactstrap';

class Login extends React.Component {
  render() {
    return (
      <div className='login-section'>
        <div className='login-container'>
          <FormGroup>
            <Input name='email' placeholder='your email' />
          </FormGroup>

          <br />
          <FormGroup>
            <Input
              type='password'
              name='password'
              placeholder='your password'
            />
          </FormGroup>

          <Button color='primary'>LOGIN</Button>
          <div>
            <span>Not yet a member?</span>
            <Button color='link'>Sign Up Here</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
