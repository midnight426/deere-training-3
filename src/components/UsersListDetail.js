import React from "react";
import { Link } from "react-router-dom";

const UsersListDetail = ({ userData }) => {
  return (
    <li className="list-group-item">
      <Link
        to={{
          pathname: `/userdetailspage/${userData.login.username}`,
          state: { user: userData }
        }}
      >
        <img
          src={userData.picture.thumbnail}
          className="img-thumbnail"
          alt={userData.login.username}
        />
        &nbsp;{userData.name.title} {userData.name.first} {userData.name.last}
      </Link>
    </li>
  );
};

export default UsersListDetail;
