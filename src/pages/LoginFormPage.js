import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const LoginFormPage = () => {
  return (
    <Layout>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className="loginForm"
      >
        <section className="form-group">
          <label>
            Username: <input className="form-control" />
          </label>
        </section>
        <section className="form-group">
          <label>
            Password: <input className="form-control" />
          </label>
        </section>{" "}
        <Link className="btn btn-light btn-lg btn-block" to="/userslistpage">
          Sign In
        </Link>
      </form>
    </Layout>
  );
};

export default LoginFormPage;
