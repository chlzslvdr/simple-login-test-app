import React, { Component } from "react";
import { withFirebase } from "../../components/Firebase";
import { Button, Input, FormGroup } from "reactstrap";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};
class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { firebase } = this.props;
    const { passwordOne } = this.state;
    firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div className="password-change-section">
        <div className="password-change-container">
          <form onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="New Password"
              />
            </FormGroup>

            <br />
            <FormGroup>
              <Input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm New Password"
              />
            </FormGroup>

            <Button color="primary" disabled={isInvalid} type="submit">
              Reset My Password
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default withFirebase(PasswordChangeForm);
