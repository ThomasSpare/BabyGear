import Layout from '../components/Layout';
import beemoo1 from '../assets/images/strollers/beemoo_activity/beemoo1.jpg';
import beemoo2 from '../assets/images/strollers/beemoo_activity/beemoo2.jpg';
import beemoo3 from '../assets/images/strollers/beemoo_activity/beemoo3.jpg';



const Strollers = () => {
    return (
        <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>   
        <div className="container" id="learn">
        <div className="row" id="row-learn">
        <div className="col-md-6 offset-md-3">
        <h1 className="darkbacktext">Baby Products</h1>
        </div>
        </div>
        <div>    
        <center><h4 className="center darkbacktext">Beemoo Activity Go</h4></center>
        </div>
        <div className="flex" id="first_row_strollers">
        <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
        <img src={beemoo1} class="d-block w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src={beemoo2} className="d-block w-75" alt="beemoo activity go back"></img>
        </div>
        <div className="carousel-item">
        <img src={beemoo3} className="d-block w-75" alt="beemoo activity go"></img>
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
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Write a review</a>
        </div>
        </div>
        </div>
        </div>
        <div>
        <div className="row" id="row-learn">    
        <center><h4 className="center darkbacktext">Beemoo Activity Go</h4></center>
        </div>
        <div className="flex" id="second_row_strollers">
        <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
        <img src={beemoo1} class="d-block w-75" alt="beemoo activity go"></img>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src={beemoo2} className="d-block w-75" alt="beemoo activity go back"></img>
        </div>
        <div className="carousel-item">
        <img src={beemoo3} className="d-block w-75" alt="beemoo activity go"></img>
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
        <h5 class="card-title">Parents comments on Beemoo Activity Go</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Write a review</a>
        </div>
        </div>
        </div>
        </div>
        </Layout>
    );     
};
export default Strollers;