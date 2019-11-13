import React from "react";
import Layout from "../components/Layout";
import { fetchRandomUser } from "../services/randomUser";
import UsersListDetail from "../components/UsersListDetail";

class UsersListPage extends React.Component {
  state = {
    users: []
  };
  fetchUsers = () => {
    fetchRandomUser().then(user => {
      this.setState({ users: user });
    });
  };
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    return (
      <Layout>
        <ul className="list-group">
          {this.state.users.map(user => (
            <UsersListDetail userData={user} key={user.login.username} />
          ))}
        </ul>
      </Layout>
    );
  }
}

export default UsersListPage;
