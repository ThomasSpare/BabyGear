import { Link, NavLink } from "react-router-dom";
import Layout from '../components/Layout';
import stroller1 from '../assets/images/strollers/stroller200.jpg';
import seats1 from '../assets/images/seats/seats200.jpg';
import bottles1 from '../assets/images/bottles/bottles200.jpg';
import toys1 from '../assets/images/toys/toys200.jpg';
import safety1 from '../assets/images/safety/safety200.jpg';


const Learn = () => {
    return (
        <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>   
        <div className="container" id="learn">
        <div className="row" id="row-learn">
        <div className="col-md-6 offset-md-3">
        <h1 className="darkbacktext">Baby Products</h1>
        </div>
        </div>
        <div className="float-start flex" id="first_row">
        <div>  
        <Link className='navbar-brand' to='/strollers'>  
        <img src={stroller1} className="rounded float-start img-thumbnail" alt="stroller"></img>
        <center><h4>Strollers</h4></center>
        </Link>
        </div>
        <div> 
        <Link className='navbar-brand' to='/seats'>  
        <img src={seats1} className="rounded mx-auto d-block img-thumbnail" alt="Baby chairs"></img>
        <center><h4>Seats</h4></center>
        </Link>
        </div>
        <div>
        <Link className='navbar-brand' to='/bottles'>
        <img src={bottles1} className="rounded mx-auto d-block img-thumbnail" alt="Bottle"></img>
        <center><h4>Bottles</h4></center>
        </Link>
        </div>
        <div>
        <Link className='navbar-brand' to='/'>
        <img src={toys1} className="rounded mx-auto d-block img-thumbnail" alt="Sensory toys"></img>
        <center><h4>Sensory</h4></center>
        </Link>
        </div>
        <Link className='navbar-brand' to='/'>
        <img src={safety1} className="rounded mx-auto d-block img-thumbnail" alt="Sensory toys"></img>
        <center><h4>Child Safety</h4></center>
        </Link>
        </div>
        </div>
        </Layout>
    );     
};
export default Learn;