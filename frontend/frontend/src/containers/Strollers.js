import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import beemoo1 from '../assets/images/strollers/beemoo_activity/beemoo1.jpg';
import beemoo2 from '../assets/images/strollers/beemoo_activity/beemoo2.jpg';
import beemoo3 from '../assets/images/strollers/beemoo_activity/beemoo3.jpg';
import britax1 from '../assets/images/strollers/britax_duo/britax_römer_duo.jpg';



const Strollers = () => {
    return (
        <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>   
        <div className="container" id="learn">
        <div className="row" id="row-learn">
        <div className="col-md-6 offset-md-3">
        <h1 className="darkbacktext">Strollers</h1>
        </div>
        </div>
        <div>    
        <center><h4 className="center darkbacktext">Beemoo Activity Go</h4></center>
        </div>
        <div className="flex" id="first_row_strollers">
        <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={beemoo1} class="w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item">
        <img src={beemoo2} className="w-75" alt="beemoo activity go back"></img>
        </div>
        <div className="carousel-item">
        <img src={beemoo3} className="w-75" alt="beemoo activity go"></img>
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
        <h5 class="card-title">Parents comments on Beemoo Activity Go</h5>
        <a href="/reviews"><p class="card-text">Read Latest review by Angela</p></a>
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
        <center><h4 className="center darkbacktext">Britax römer Duo</h4></center>
        </div>
        <div className="flex" id="second_row_strollers">
        <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={britax1} class="w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item">
        <img src={britax1} className="w-75" alt="beemoo activity go back"></img>
        </div>
        <div className="carousel-item">
        <img src={britax1} className="w-75" alt="beemoo activity go"></img>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
        <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
        <h5 class="card-title">Parents comments on Britax römer duo</h5>
        <a href="/reviews"><p class="card-text">Read Latest review by Tom</p></a>
        <p class="quote">Very happy about this stroller. The best feature I think is
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
export default Strollers;