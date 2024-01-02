import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Layout from '../components/Layout';
// CSS imports
import styles from "../styles/Profile.module.css";
import Asset from "../components/Asset";
import appStyles from "../styles/App.module.css";
import btnStyles from "../styles/Button.module.css";
import { axiosReq } from "../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../contexts/ProfileDataContext";
import ProfileContactDetails from "../profiles/ProfileContactDetails";
// Components imports
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { ProfileEditDropdown } from "../components/Dropdowns";



const DashboardPage = (props) => {
  const [hasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] =
          await Promise.all([
            axiosReq.get(`/profiles/profiles/${id}/`),
            axiosReq.get(`/events/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
      } catch (err) {
        // console.log(err)
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.Avatar}
            roundedCircle
            src={profile?.avatar}
          />
        </Col>
        <Col lg={8}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.events_count}</div>
              <div>Events</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
          <Col lg={-4}>
            <div className="text-align-center">
              {currentUser &&
                !is_owner &&
                (profile?.following_id ? (
                  <Button
                    className={btnStyles.UnfollowBtn}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleUnfollow(profile)}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    className={Button}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleFollow(profile)}
                  >
                    Follow
                  </Button>
                ))}
            </div>
          </Col>
        </Col>
      </Row>
      <Container className={appStyles.Content}>
        <h5 className="text-center p-2">About {profile?.owner}</h5>
        {profile?.name && (
          <>
            <Col className="p-1">Name:</Col>
            <Col className="p-2">
              <strong>{profile?.username}</strong>
            </Col>
          </>
        )}

        {profile?.about_me && (
          <>
            <Col className="p-1">Bio:</Col>
            <Col className="p-2">
              <strong>{profile?.username}</strong>
            </Col>
          </>
        )}
      </Container>

      <Col>
        <ProfileContactDetails mobile />
      </Col>
    </>
  );

  return(
    <Layout title= 'Baby Gear' content='baby products, product comparison site, pregnant, newborn, smart gadgets'>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
    <div>
      <h1> Profile Page </h1>
      <center style={{ "align-items": "center", "display": "flex", "margin-left": "38vw" }}>
      <Image
            className={styles.Avatar}
            roundedCircle
            src={profile?.Avatar}
          />
      </center>
      <button>Upload Photo</button>
      
      <br></br>
      <p>Name: </p>
      <p>Email:</p>
      <p>Parent:</p>
      <button>Edit</button>
    </div>
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <ProfileContactDetails />
      </Col>
    </Row>
    </Layout>
  )
}


export default DashboardPage;



