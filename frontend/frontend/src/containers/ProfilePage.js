import Layout from '../components/Layout';
import coach1 from '../assets/images/coach1.jpg';
import coach2 from '../assets/images/coach2.jpg';
import coach4 from '../assets/images/coach4.jpg';


const ProfilePage = () => {
    return (
        <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>
        <h1>Our Coaches</h1>
        <img src={coach1} className="img-thumbnail" alt="codecoach 1"></img>
        <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#coach1" aria-controls="offcanvasWithBothOptions">Peter March, Frontend</button>
        <br></br>
        <img src={coach2} className="img-thumbnail" alt="codecoach 2"></img>
        <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#coach2" aria-controls="offcanvasWithBothOptions">Erik Summer, Databases, Backend</button>
        <br></br>
        <img src={coach4} className="img-thumbnail" alt="codecoach 4"></img>
        <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#coach4" aria-controls="offcanvasWithBothOptions">Sammy Winters, Frontend</button>
        <br></br>

        
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="coach1" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Peter March, Frontend languages</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <p>Peter March is a principal technical course developer at codecoach.
            At DocuSign, Peter builds instructional materials on creating integrations 
            using DocuSign APIs. At DocuSign, Peter builds instructional materials on 
            creating integrations using DocuSign APIs. In Peter's long experience as a 
            web developer, they have built deep knowledge of the ins and outs of 
            HTML, CSS, and JavaScript. In addition to teaching front-end languages in
            the classroom and on LinkedIn Learning, Peter is also the author of several
            instructional books, including HTML5 and CSS3, Illustrated Complete.</p>
        </div>
        </div>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="coach2" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="coach2">Erik Summer, Databases, Backend</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p>Erik Summer is a veteran engineer who enjoys building software using
               cloud and container technologies. Erik has worked in both large enterprises 
               and startups, with his career spanning work at National Instruments, Signal Sciences 
               (where he was the first hired engineer), StackEngine, and Oracle, where, as a principal engineer, 
               he built out the Oracle Cloud managed Kubernetes engine. He currently serves as 
               the head of cloud native engineering at Verica, where he works to build better 
               continuous verification practices for the cloud native ecosystem. He also organizes 
               several conferences, including DevOpsDays and Container Days. In his free time, 
               Erik enjoys spending time with his family, teaching others new things he's learned, 
               dabbling in new product ideas, and blogging on theagileadmin.com.</p>
        </div>
        </div>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="coach4" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="coach4">Sammy Winters, Frontend languages</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <p>Sammy Winters is a web development instructor and front-end developer.
                An instructor with a passion for excellence in documentation and experimenting 
                with new web technologies, Sammy has created courses that teach CSS fundamentals 
                and advanced topics to thousands of students. As a professional front-end developer 
                as well as an experienced technical writer, she is well-versed in not only the ins 
                and outs of web development, but also knows how to explain and illustrate the concepts 
                clearly and effectively. Sammy also teaches Scalable Vector Graphics, GreenSock 
                animations, DOM, and React.</p>
        </div>
        </div>
        </Layout>
    );     
    };

    export default ProfilePage;