import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";


const Layout = ({ title, content, children }) => (
    <React.Fragment>
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={content} />
    </Helmet> 
    <NavBar />
    <div className='container mt-5'>{ children }</div>
    </React.Fragment>
);
export default Layout;