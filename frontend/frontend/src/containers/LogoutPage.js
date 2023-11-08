import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";
import { resetRedirect, logout } from "../features/user";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";


const LogoutPage = () => {
    const logoutButton = (
        <React.Fragment>
          <div className="p-menuitem">
            <Button
              label="Logout"
              icon="pi pi-power-off"
              className="p-button-danger"
              onClick={async () => {
                navigate("/");
                await dispatch(logout());
              }}
            />
          </div>
        </React.Fragment>
      );
	const dispatch = useDispatch();
	const navigate = useNavigate();
    return (
		<Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>
			<h1>Logout of your Account</h1>
            <Toolbar right={logoutButton} />
			

		</Layout>
	);
};

export default LogoutPage;