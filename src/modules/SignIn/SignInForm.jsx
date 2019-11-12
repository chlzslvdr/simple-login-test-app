import React from "react";
import { Button, Input, FormGroup } from "reactstrap";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends React.Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="login-section">
        <div className="login-container">
          <form onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="your email"
              />
            </FormGroup>

            <br />
            <FormGroup>
              <Input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="your password"
              />
            </FormGroup>

            <Button color="primary" disabled={isInvalid}>
              LOGIN
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
