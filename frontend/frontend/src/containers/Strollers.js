import Layout from '../components/Layout';
import strollers1 from '../assets/images/strollers/stroller200.jpg';

const Strollers = () => {
    return (
        <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>   
        <div className="container" id="learn">
        <div className="row" id="row-learn">
        <div className="col-md-6 offset-md-3">
        <h1>Baby Products</h1>
        </div>
        </div>
        <div className="float-start flex" id="first_row">
        <div>    
        <img src={strollers1} className="rounded float-start img-thumbnail" alt="stroller"></img>
        <center><h4 className="center">Stroller1</h4></center>
        </div>
        <div> 
        <img src={strollers1} className="rounded mx-auto d-block img-thumbnail" alt="stroller"></img>
        <center><h4>Stroller2</h4></center>
        </div>
        <div> 
        <img src={strollers1} className="rounded mx-auto d-block img-thumbnail" alt="stroller"></img>
        <center><h4>Stroller2</h4></center>
        </div>
        </div>
        </div>
        </Layout>
    );     
};
export default Strollers;