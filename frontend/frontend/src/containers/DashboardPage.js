import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';
import React from 'react';

const DashboardPage = () => {
    const { isAuthenticated, user, loading } = useSelector(state => state.user);

    if (!isAuthenticated && !loading && user === null)
        return <Navigate to='/login' />;

    return (
        <Layout title= 'Code Coach | Dashboard' content='learn to code, javascript, python'>
        {loading || user === null ? (
        <div className="spinner-grow" role="status">
        <span className="sr-only"></span>
        </div>
        ): (
            <React.Fragment>
            <h1 className='mb-5'>Dashboard</h1>
            <p>User Details</p>
            <ul>
                <li>First Name: {user.first_name}</li>
                <li>Last Name: {user.last_name}</li>
                <li>Email: {user.email}</li>
            </ul>            
            </React.Fragment>
        )}
        </Layout>
    );     
    };

export default DashboardPage;



