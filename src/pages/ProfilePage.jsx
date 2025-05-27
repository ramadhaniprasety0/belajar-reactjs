import React from "react";
import ProfileComponent from "../components/ProfileComponent";
import { Container, Row } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <div className="edit-profile-page-wrapper w-100 min-vh-100">
      <Container>
        <h1 className="mb-4">
          <b>Edit Profile</b>
        </h1>
        <Row>
          <ProfileComponent />
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
