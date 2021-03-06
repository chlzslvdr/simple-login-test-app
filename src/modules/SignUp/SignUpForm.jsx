import React from 'react';
import { Link } from 'react-router-dom';
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
    const { firebase, history } = this.props;
    const { username, email, passwordOne } = this.state;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.SIGN_IN);
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

            <Button color='primary' disabled={isInvalid} type='submit'>
              SIGN UP
            </Button>

            {error && <p>{error.message}</p>}
          </form>

          <p>
            Are you a member here?<Link to={ROUTES.SIGN_IN}>Log In Here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
