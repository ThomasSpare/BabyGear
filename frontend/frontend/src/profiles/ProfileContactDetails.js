// React imports
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// CSS imports
import appStyles from "../styles/App.module.css";
import styles from "../styles/Profile.module.css";
// Components imports
import { axiosReq } from "../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../contexts/ProfileDataContext";

const ProfileContactDetails = ({ mobile }) => {
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
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
  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      <h5 className="text-center p-2">Contact Details</h5>
      {profile?.phone_number && (
        <Col className={`p-1 ${styles.WordBreak}`}>
          <i className="fas fa-phone-alt"></i> {profile?.phone_number}
        </Col>
      )}
      {profile?.email && (
        <Col className={`p-1 ${styles.WordBreak}`}>
          <i className="fas fa-at"></i> {profile?.email}
        </Col>
      )}
      {profile?.facebook_link && (
        <Col className={`p-1 ${styles.WordBreak}`}>
          <Link to={{ pathname: profile.facebook_link }} target="_blank">
            <i className="fab fa-facebook"></i> {profile?.facebook_link}
          </Link>
        </Col>
      )}
      {profile?.instagram_link && (
        <Col className={`p-1 ${styles.WordBreak}`}>
          <Link to={{ pathname: profile.instagram_link }} target="_blank">
            <i className="fab fa-instagram"></i> {profile?.instagram_link}
          </Link>
        </Col>
      )}
    </Container>
  );
};

export default ProfileContactDetails;
