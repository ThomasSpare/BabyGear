import React, { useRef,
 useState } from "react";
import Layout from "../components/Layout";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Asset from "../components/Asset";
import Upload from "../assets/upload.png";
import styles from "../styles/ReviewCreateEditForm.module.css";
import appStyles from "../styles/App.module.css";
import btnStyles from "../styles/Button.module.css";
import { useRedirect } from "../hooks/useRedirect";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import axios from "axios";


const ReviewCreateForm = () => {

  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name_of_product: "",
    description: "",
    score: "",
    image: "",
  });
  const { name_of_product, description, score, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = async (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      const newImage = await URL.createObjectURL(event.target.files[0]);
      setPostData({
        ...postData,
        image: newImage,
      });
    }
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    formData.append("name_of_product", name_of_product);
    formData.append("description", description);
    formData.append("score", score);
    if (imageInput.current.files && imageInput.current.files.length > 0){
      formData.append("image", imageInput.current.files[0]);
    }
    
    console.log("Form Data:", Object.fromEntries(formData));
    try {
      const { data } = await axios.post("reviews/", formData);
      console.log(data)
      history.push(`reviews/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group controlid="name_of_product">
        <Form.Label>Product to review</Form.Label>
        <Form.Control
          id="name_of_product"
          type="text"
          name="name_of_product"
          value={name_of_product}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name_of_product?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label controlid="description">Content</Form.Label>
        <Form.Control
          id="description"
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

<Form.Group>
        <Form.Label controlid="score">Product Score</Form.Label>
        <Form.Control
          id="score"
          as="textarea"
          rows={1}
          name="score"
          value={score}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.score?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}
          
            <Form.Group controlid="image-upload" className="mb-3">
              <Form.Label  className="d-flex justify-content-center"></Form.Label>
              <Form.Control type="file"    
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}/>
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Form.Group>

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
    </Layout>
  );
};

export default ReviewCreateForm;