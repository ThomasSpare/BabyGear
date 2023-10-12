import Layout from '../components/Layout';
import stroller1 from '../assets/images/strollers/stroller200.jpg';
import seats1 from '../assets/images/seats/seats200.jpg';
import bottles1 from '../assets/images/bottles/bottles200.jpg';


const Learn = () => {
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
        <img src={stroller1} className="rounded float-start img-thumbnail" alt="stroller"></img>
        <center><h4 className="center">Strollers</h4></center>
        </div>
        <div> 
        <img src={seats1} className="rounded mx-auto d-block img-thumbnail" alt="Baby chairs"></img>
        <center><h4>Chairs</h4></center>
        </div>
        <div> 
        <img src={bottles1} className="rounded mx-auto d-block img-thumbnail" alt="Bottle"></img>
        <center><h4>Bottles</h4></center>
        </div>
        </div>
        </div>
        </Layout>
    );     
};
export default Learn;