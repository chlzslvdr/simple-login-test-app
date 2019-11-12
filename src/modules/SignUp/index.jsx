import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../components/Firebase";
import * as ROUTES from "../../constants/routes";
import SignUpFormBase from "./SignUpForm";
import { compose } from "recompose";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
