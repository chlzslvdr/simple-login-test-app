import React from 'react';
import { Button, Input, FormGroup } from 'reactstrap';

class SignUp extends React.Component {
  render() {
    return (
      <div className='sign-up-section'>
        <span>SIGN UP</span>
        <div className='sign-up-container'>
          <FormGroup>
            <Input name='name' placeholder='your name' />
          </FormGroup>

          <br />
          <FormGroup>
            <Input type='email' name='email' placeholder='your email' />
          </FormGroup>

          <br />
          <FormGroup>
            <Input type='password' name='password' placeholder='password' />
          </FormGroup>

          <br />
          <FormGroup>
            <Input
              type='password'
              name='confirmPass'
              placeholder='confirm password'
            />
          </FormGroup>

          <Button color='primary'>SIGN UP</Button>
          <div>
            <span>Are you a member here?</span>
            <Button color='link'>Log In Here</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
