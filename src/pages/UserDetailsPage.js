import React from "react";
import Layout from "../components/Layout";
import { withRouter } from "react-router-dom";

const UserDetailsPage = props => {
  const thisUser = props.location.state.user;
  return (
    <Layout>
      <p>
        <img
          src={thisUser.picture.large}
          className="img-thumbnail"
          alt={thisUser.login.username}
        />
      </p>
      <p>
        <strong>
          {thisUser.name.title} {thisUser.name.first} {thisUser.name.last}
        </strong>
      </p>
      <p>
        <strong>Phone Number:</strong> {thisUser.phone}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${thisUser.email}`}>{thisUser.email}</a>
      </p>
      <p>
        <strong>Address:</strong>
        <br />
        {thisUser.location.street.number}&nbsp;{thisUser.location.street.name}
        <br />
        {thisUser.location.city},&nbsp;{thisUser.location.country}&nbsp;
        {thisUser.location.postcode}
      </p>
    </Layout>
  );
};

export default withRouter(UserDetailsPage);
