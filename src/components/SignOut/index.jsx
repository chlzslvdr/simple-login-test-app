import React from 'react';
import { withFirebase } from '../Firebase';
import { Button } from 'reactstrap';

const SignOutButton = ({ firebase }) => (
  <Button color='link' onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
