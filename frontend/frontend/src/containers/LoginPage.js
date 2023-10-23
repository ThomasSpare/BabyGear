import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";
import { loginUser, resetRedirect } from "../features/user";


const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { handleSubmit, register } = useForm();
	const { loading, isAuthenticated } = useSelector(state => state.user
		);
			useEffect(() => {
				// redirect user to login page if registration was successful
				if (resetRedirect) dispatch(resetRedirect());
				
				if (isAuthenticated) navigate("/");
				}, [navigate, isAuthenticated, dispatch]);
		const submitForm = (data) => {
			const payloadUser = {		  
				email: data.email,
				password: data.password,
			};
			  // dispatch register action with form data
			  dispatch(loginUser(payloadUser));
			};
	return (
		<Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>
			<h1>Log into your Account</h1>
			<form className='mt-5' onSubmit={handleSubmit(submitForm)}>
				<div className='form-group'>
					<label className='form-label' htmlFor='email'>
						Email
					</label>
					<input
						className='form-control'
						type='email'
						name='email'
						{...register("email", { required: true })}
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='password'>
						Password
					</label>
					<input
						className='form-control'
						type='password'
						name='password'
						{...register("password", { required: true })}
					/>
				</div>
				{loading ? (
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : (
					<button
            className="btn btn-primary mt-4"
            type="submit"
          	>
         	 Login
          	</button>
        )}
			</form>
		</Layout>
	);
};

export default LoginPage;