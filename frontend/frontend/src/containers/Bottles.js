import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import nuk1 from '../assets/images/bottles/nuk/nuk1.jpg';
import nuk2 from '../assets/images/bottles/nuk/nuk2.jpg';
import phillips_avent1 from '../assets/images/bottles/phillips_avent/phillips_avent1.jpg';
import phillips_avent2 from '../assets/images/bottles/phillips_avent/philips_avent2.jpg';
import phillips_avent3 from '../assets/images/bottles/phillips_avent/phillips_avent3.jpg';

const Bottles = () => {
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
        <img src={nuk1} class="w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item">
        <img src={nuk2} className="w-75" alt="beemoo activity go back"></img>
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
        <a href="/readreviews"><p class="card-text">Read Latest review by Angela</p></a>
        <p class="quote">I like the big wheels on this stroller...</p>
        <Link to="/readreviews">
        <a href="/readreviews" class="btn btn-light">Read reviews</a>
        </Link>
        <Link to="/reviews">
        <a href="/reviews" class="btn btn-light">Write a review</a>
        </Link>
        </div>
        </div>
        </div>
        </div>
        <div>
        <div className="row" id="row-learn">    
        <center><h4 className="center darkbacktext">Philips Avent</h4></center>
        </div>
        <div className="flex" id="second_row_strollers">
        <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={phillips_avent1} class="w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item">
        <img src={phillips_avent2} className="w-75" alt="beemoo activity go back"></img>
        </div>
        <div className="carousel-item">
        <img src={phillips_avent3} className="w-75" alt="beemoo activity go"></img>
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
        <h5 class="card-title">Parents comments on Philips Avent</h5>
        <a href="/readreviews"><p class="card-text">Read Latest review by Tom</p></a>
        <p class="/readreviews">Very happy about this stroller. The best feature I think is
        the large storage compartment underneath...</p>
        <Link to="/readreviews">
        <a href="/readreviews" class="btn btn-light">Read reviews</a>
        </Link>
        <Link to="/reviews">
        <a href="/reviews" class="btn btn-light">Write a review</a>
        </Link>
        </div>
        </div>
        </div>
        </div>
        </Layout>
    );     
};
export default Bottles;