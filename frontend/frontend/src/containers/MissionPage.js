import Layout from '../components/Layout';

const MissionPage = () => {
    return (
      <Layout
        title="Baby Gear"
        content="baby products, product comparison site, pregnant, newborn, smart gadgets"
      >
        <h1>Our mission</h1>
        <img
          src="https://www.wisoven.com/sites/default/files/styles/colorbox_image/public/recycle-29227_1280.png?itok=68HT-nfl"
          className="img-thumbnail"
          alt="codecoach 1"
        ></img>
        <button
          className="btn btn-success"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#coach1"
          aria-controls="offcanvasWithBothOptions"
        >
          Promote Eco-friendly products
        </button>
        <br></br>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/baby-safety-gate-1635875176.jpg?crop=0.643xw:1.00xh;0.0833xw,0&resize=640:*"
          className="img-thumbnail"
          alt="codecoach 2"
        ></img>
        <button
          className="btn btn-success"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#coach2"
          aria-controls="offcanvasWithBothOptions"
        >
          Promote Child Safety
        </button>
        <br></br>
        <img
          src="https://www.gometrics.net/wp-content/uploads/elementor/thumbs/quality-gometrics-1-ou0dvyr74990kauak3n55ywlkpt1f3vjyzhtx0ks8w.jpg"
          className="img-thumbnail"
          alt="codecoach 4"
        ></img>
        <button
          className="btn btn-success"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#coach4"
          aria-controls="offcanvasWithBothOptions"
        >
          Promote Quality Products
        </button>
        <br></br>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="coach1"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Eco-friendly
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <p>
              What does it mean for something to be "eco-friendly"? Eco-friendly
              items and materials are defined as being not environmentally
              harmful. These products promote green living or green
              manufacturing methods that lessen the amount or types of resources
              used. In short, eco-friendly products help the earth, not cause it
              harm. Typically, eco-friendly products receive this designation
              based on the materials they contain, the way they're manufactured,
              packaged, and distributed, and how they're used. Thankfully, the
              Federal Trade Commission (FTC) produces its Green Guides,
              providing all the details for companies to follow and allowing
              consumers to know what is required to earn an eco-friendly rating.
              For a product to be considered eco-friendly, a company must
              specifically call out what makes a product good for the
              environment. Eco-friendly products should indicate on the
              packaging or somewhere on the company's website how the products
              are environmentally harmless.
            </p>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="coach2"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="coach2">
              Promote Child Safety
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>
              Lately, it feels like a new “must-have” baby safety product for
              parents comes out every few months. From baby heart monitors to
              app-connected thermometers and baby cameras, it’s really tricky to
              know what it is that you actually need, and what you don’t. You
              may have heard that recently, certain baby safety products — such
              as the Owlet Smart Sock baby monitor — have been flagged by the
              Food and Drug Administration (FDA) for not getting proper approval
              for what is essentially a type of medical device. There are also
              ongoing class action lawsuits regarding burns babies have received
              while wearing the sock, and allegations of frequent false alarms,
              which can cause so much anxiety to new parents. (And let's be
              honest: We have enough anxiety already as parents. We don't need
              to pay hundreds of dollars for extra anxiety.)
            </p>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="coach4"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="coach4">
              Promote Quality Products
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <p>
              Finding good quality products for small children is of paramount
              importance for several compelling reasons. First and foremost,
              children, especially infants and toddlers, are at a stage of rapid
              development and vulnerability. Their bodies and minds are still
              growing, making them highly susceptible to external influences.
              High-quality products, such as baby food, toys, and clothing, are
              designed with their safety and well-being in mind. They undergo
              rigorous testing to ensure they meet safety standards and do not
              pose health risks, reducing the chances of accidents, allergies,
              or other health concerns. Moreover, children's early experiences
              and interactions with products play a pivotal role in their
              cognitive, emotional, and physical development. Toys, for
              instance, should be both stimulating and safe to foster creativity
              and learning while avoiding potential hazards. Clothes should be
              comfortable, breathable, and non-irritating to ensure a child's
              comfort and promote healthy growth. Additionally, investing in
              quality products often means durability, reducing the need for
              frequent replacements and minimizing environmental waste.
              Sustainable choices can teach children the values of responsible
              consumption from an early age. Furthermore, good quality products
              are often more convenient and functional, making daily routines
              smoother for both parents and children. In conclusion, the quest
              for high-quality products for small children is crucial because it
              directly impacts their safety, development, and overall
              well-being, while also contributing to a more sustainable and
              harmonious lifestyle for families.
            </p>
          </div>
        </div>
      </Layout>
    );     
    };

    export default MissionPage;