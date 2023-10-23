import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { resetRedirect, registerUser } from "../features/user";

const RegisterPage = () => {
  const { loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (resetRedirect) dispatch(resetRedirect());
    // redirect authenticated user to profile screen
    if (isAuthenticated) navigate("/");
  }, [navigate, isAuthenticated, dispatch]);

  const submitForm = (data) => {
    const payloadUser = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
      return;
    }
    // dispatch register action with form data
    dispatch(registerUser(payloadUser));
  };

  return (
    <Layout title="Auth Site | Register" content="Register page">
      <h1>Register for an Account</h1>
      <form className="mt-5" onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label className="form-label" htmlFor="first_name">
            First Name
          </label>
          <input
            name="first_name"
            id="first_name"
            className="form-control"
            type="text"
            {...register("first_name", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="last_name">
            Last Name
          </label>
          <input
            name="last_name"
            id="last_name"
            className="form-control"
            type="text"
            {...register("last_name", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="form-control"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            id="password"
            className="form-control"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            className="form-control"
            type="password"
            {...register("confirmPassword", { required: true })}
          />
        </div>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button
            className="btn btn-primary mt-4"
            type="submit"
          >
          Register
          </button>
        )}
      </form>
    </Layout>
  );
};
export default RegisterPage;
