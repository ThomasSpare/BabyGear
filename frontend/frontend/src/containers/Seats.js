import Layout from '../components/Layout';
import { Link, NavLink } from "react-router-dom";

import beemoo_care1 from '../assets/images/seats/beemoo_care/beemoo_care1.jpg';
import beemoo_care2 from '../assets/images/seats/beemoo_care/beemoo_care2.jpg';
import beemoo_care3 from '../assets/images/seats/beemoo_care/beemoo_care3.jpg';
import stokke1 from '../assets/images/seats/stokke/stokke1.jpg';
import stokke2 from '../assets/images/seats/stokke/stokke2.jpg';
import stokke3 from '../assets/images/seats/stokke/stokke3.jpg';


const Seats = () => {
    return (
        <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>   
        <div className="container" id="learn">
        <div className="row" id="row-learn">
        <div className="col-md-6 offset-md-3">
        <h1 className="darkbacktext">Baby Products</h1>
        </div>
        </div>
        <div>    
        <center><h4 className="center darkbacktext">Beemoo Care</h4></center>
        </div>
        <div className="flex" id="first_row_strollers">
        <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={beemoo_care1} class="w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item">
        <img src={beemoo_care2} className="w-75" alt="beemoo activity go back"></img>
        </div>
        <div className="carousel-item">
        <img src={beemoo_care3} className="w-75" alt="beemoo activity go"></img>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
        <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
        <h5 class="card-title">Parents comments on Beemoo Care</h5>
        <a href="#"><p class="card-text">Read Latest review by Angela</p></a>
        <p class="quote">I like the big wheels on this stroller...</p>
        <a Link="" class="btn btn-light">Read reviews</a>
        <a href="#" class="btn btn-light">Write a review</a>
        </div>
        </div>
        </div>
        </div>
        <div>
        <div className="row" id="row-learn">    
        <center><h4 className="center darkbacktext">Stokke Tripp Trapp</h4></center>
        </div>
        <div className="flex" id="second_row_strollers">
        <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={stokke1} class="w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item">
        <img src={stokke2} className="w-75" alt="beemoo activity go back"></img>
        </div>
        <div className="carousel-item">
        <img src={stokke3} className="w-75" alt="beemoo activity go"></img>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
        <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
        <h5 class="card-title">Parents comments on Stokke Tripp Trapp</h5>
        <a href="#"><p class="card-text">Read Latest review by Tom</p></a>
        <p class="quote">Very happy about this stroller. The best feature I think is
        the large storage compartment underneath...</p>
        <a href="/reviews" class="btn btn-light">Read reviews</a>
        <a href="#" class="btn btn-light">Write a review</a>
        </div>
        </div>
        </div>
        </div>
        </Layout>
    );     
};
export default Seats;