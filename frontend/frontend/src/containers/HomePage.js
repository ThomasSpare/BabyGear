import Layout from '../components/Layout';
import coach1 from '../assets/images/coach1.jpg';
import coach2 from '../assets/images/coach2.jpg';
import coach4 from '../assets/images/coach4.jpg';


const HomePage = () => {
    return (
        <Layout title= 'Code Coach | Home' content='homepage, code, javascript, python'>
        <h1>Say Hi to our Code Coaches</h1>
        <p>Welcome to Code Coach - a place to learn and level up your code skills</p>
        
        <img src={coach1} className="img-thumbnail" alt="codecoach 1"></img>
        <img src={coach2} className="img-thumbnail" alt="codecoach 2"></img>
        <img src={coach4} className="img-thumbnail" alt="codecoach 4"></img>
    
        <p>With just a couple of hours per week you can learn practically anything<br>
        </br>With the support from one who is an expert it becomes even more rewarding</p><br>
        </br>
        </Layout>
    );     
    };

    export default HomePage;