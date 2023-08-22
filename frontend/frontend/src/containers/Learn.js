import Layout from '../components/Layout';

const Learn = () => {
    return (
        <Layout title= 'Code Coach | Profile' content='learn to code, javascript, python'>   
        <div className="conatiner" id="learn">
        <div className="row" id="row-learn">
        <div className="col-md-6 offset-md-3">
        <h1>Learn With Us</h1>
        <h4>HTML (Hypertext Markup Language):</h4>
        <p>
        HTML is the standard markup language for creating web pages and web applications.
        It defines the structure and layout of a web document by using tags and attributes.
        HTML tags are used to mark up elements such as headings, paragraphs, images, links, tables, and forms.
        HTML documents are interpreted by web browsers to display the content to users.
        HTML is a static language, meaning it does not have built-in programming capabilities.</p>
        <h4>Python:</h4>
        <p>
        CSS is a style sheet language used to describe the presentation of a document written in HTML.
        It defines the visual appearance of elements on a web page, such as colors, fonts, layouts, and animations.
        CSS works together with HTML to separate the structure (HTML) and the presentation (CSS) of a web page.
        CSS allows for the creation of responsive and mobile-friendly designs.</p>
        <p>
        Python is a high-level programming language known for its simplicity and readability.
        It is widely used for web development, scientific computing, data analysis, 
        artificial intelligence, and more.
        Python has a large and active community, with a rich ecosystem of libraries and frameworks.
        It supports multiple programming paradigms, including procedural, object-oriented, 
        and functional programming.
        Python is the primary language used in Django, a popular web framework.
        </p>
        <h4>Javascript</h4>
        <p>
        JavaScript is a programming language primarily used for adding interactivity and dynamic 
        behavior to web pages. It runs on the client-side (in the browser) and is responsible 
        for tasks such as form validation, DOM manipulation, and asynchronous communication with servers.
        JavaScript is also used on the server-side (with Node.js) for building web servers and other applications.
        It is a versatile language that can be used for front-end development, back-end development, 
        and mobile app development. JavaScript is often used in conjunction with HTML and CSS 
        to create interactive web experiences.
        </p>
        <h4>Django</h4>
        <p>
        Django is a high-level Python web framework that follows the model-view-controller 
        (MVC) architectural pattern.
        It provides a set of tools and libraries for building web applications efficiently and securely.
        Django includes features such as URL routing, database abstraction, form handling, authentication, 
        and session management.
        It promotes the use of reusable components and follows the principle of DRY (Don't Repeat Yourself).
        Django is known for its emphasis on security, scalability, and ease of use.
        </p>
        <h4>Django Restframework</h4>
        <p>
        Django Rest Framework (DRF) is a powerful and flexible toolkit for building Web APIs in Django.
        It provides a set of tools and libraries for serializing and deserializing data, 
        handling authentication and permissions, and generating API documentation.
        DRF follows the principles of RESTful design, allowing developers to create APIs 
        that are stateless, scalable, and easily consumed by clients.
        It supports various authentication methods, including token-based authentication and OAuth.
        DRF is widely used in Django projects for building robust and feature-rich APIs.
        </p>
        </div>
        </div>
        </div>
        </Layout>
    );     
};
export default Learn;