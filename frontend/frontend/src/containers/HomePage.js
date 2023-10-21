import Layout from '../components/Layout';
import baby1 from '../assets/images/baby_bear.jpg';
import baby2 from '../assets/images/baby_feet.jpg';
import baby3 from '../assets/images/baby_look.jpg';
import baby4 from '../assets/images/baby_shoe.jpg';


const HomePage = () => {
    return (
        <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>
        <h1>Welcome to Baby Gear</h1>
        <p>Find the best products to ease your way into parenthood</p>
        
        <img src={baby1} className="img-thumbnail" alt="baby with bear"></img>
        <img src={baby2} className="img-thumbnail" alt="baby feet"></img>
        <img src={baby3} className="img-thumbnail" alt="baby look"></img>
        <img src={baby4} className="img-thumbnail" alt="baby shoe"></img>
    
        <p><br>
        </br>Votes on Child Products from Real Parents</p><br>
        </br>
        </Layout>
    );     
    };

    export default HomePage;