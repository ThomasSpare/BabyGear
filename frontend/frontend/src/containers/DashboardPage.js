import React, { useEffect, useState, useRef} from "react";
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';
// import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const DashboardPage = () => {

  return(
    <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>
    <div>
      <h1> Profile Page </h1>
      <center style={{ "align-items": "center", "display": "flex", "margin-left": "38vw" }}>
      <iframe title="user" height="200" src="https://res.cloudinary.com/djunroohl/image/upload/v1698924790/BabyGear_PP5/jeixdfirdetfdbv3o6m3.png">
      </iframe>
      </center>
      <button>Upload Photo</button>
      
      <br></br>
      <p>Name:</p>
      <p>Email:</p>
      <p>Parent:</p>
      <button>Edit</button>
    </div>
    </Layout>
  )
}


export default DashboardPage;



