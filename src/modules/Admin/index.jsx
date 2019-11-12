import React, { Component } from "react";
import { withFirebase } from "../../components/Firebase";

import UserList from "./UserList";

class AdminPage extends Component {
  state = {
    loading: false,
    users: [
      {
        uid: "kmuAzaocOkMh9EsyRkt0auWwj293",
        email: "chelzeasalvador@gmail.com",
        username: "chlo"
      },
      {
        uid: "AUjRsKt414bPVgXtLN8Sja7wu4V2",
        email: "rowan@whitethorn.com",
        username: "rowan"
      }
    ]
  };

  componentDidMount() {
    const { firebase } = this.props;
    this.setState({ loading: true });
    firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));
      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    const { firebase } = this.props;
    firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}
        <UserList users={users} />
      </div>
    );
  }
}

export default withFirebase(AdminPage);
