import React from 'react';
import { Button, Input, FormGroup } from 'reactstrap';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className='sign-up-section'>
        <div className='sign-up-container'>
          <form onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                name='username'
                value={username}
                onChange={this.onChange}
                type='text'
                placeholder='your name'
              />
            </FormGroup>

            <br />
            <FormGroup>
              <Input
                name='email'
                value={email}
                onChange={this.onChange}
                type='text'
                placeholder='your email'
              />
            </FormGroup>

            <br />
            <FormGroup>
              <Input
                name='passwordOne'
                value={passwordOne}
                onChange={this.onChange}
                type='password'
                placeholder='your password'
              />
            </FormGroup>

            <br />
            <FormGroup>
              <Input
                name='passwordTwo'
                value={passwordTwo}
                onChange={this.onChange}
                type='password'
                placeholder='confirm password'
              />
            </FormGroup>
            <br />

            <Button color='primary' type='submit'>
              SIGN UP
            </Button>

            {error && <p>{error.message}</p>}
          </form>

          <div>
            <span>Are you a member here?</span>
            <Button color='link' disabled={isInvalid}>
              Log In Here
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
