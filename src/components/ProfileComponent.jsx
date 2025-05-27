import React from 'react';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loggedInUser } from '../data/index';

const ProfileComponent = () => {
  const userDataArray = [loggedInUser];

  return (
    <>
      {userDataArray.map((user) => {
        return (
          <Col lg={12} key={user.username || 'profile'}>
            <div className="profile-container p-4">
              {/* Header Profil */}
              <Row className="profile-header-v2 align-items-center mb-5 p-3">
                <Col xs="auto" className="d-flex align-items-center">
                  <Image src={user.profilePic} roundedCircle width={60} height={60} />
                  <h5 className="mb-0 ms-3">{user.name}</h5>
                </Col>
                <Col className="text-end">
                  <Button variant="light" size="sm" className="ubah-button">
                    <i className="bi bi-pencil-square me-1"></i> Ubah
                  </Button>
                </Col>
              </Row>

              {/* Form Edit Profil */}
              <Form className="profile-form">
                {/* Username */}
                <Form.Group className="mb-3">
                  <Form.Label className="form-label-custom">
                    Username <span className="text-danger">*</span>
                  </Form.Label>
                  <Row className="align-items-center">
                    <Col>
                      <Form.Control type="text" defaultValue={user.username} className="default-input" />
                    </Col>
                    <Col xs="auto">
                      <Button variant="light" className="ganti-button v4">
                        Ganti Username
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label className="form-label-custom">
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Row className="align-items-center">
                    <Col>
                      <Form.Control type="email" defaultValue={user.email} className="default-input" />
                    </Col>
                    <Col xs="auto">
                      <Button variant="light" className="ganti-button v4">
                        Ganti Email
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>

                {/* Nama */}
                <Form.Group className="mb-3">
                  <Form.Label className="form-label-custom">
                    Nama <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" defaultValue={user.name} className="default-input" />
                </Form.Group>

                {/* Jenis Kelamin & Tanggal Lahir */}
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="form-label-custom">
                        Jenis Kelamin <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select defaultValue={user.gender} className="default-input custom-select-v3">
                        <option>Pilih...</option>
                        <option>Pria</option>
                        <option>Wanita</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="form-label-custom">
                        Tanggal Lahir <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="date" defaultValue={user.birthDate} className="default-input" />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Tombol Simpan */}
                <Row>
                  <Col className="text-center">
                    <Button variant="primary" type="submit" className="simpan-button v3">
                      Simpan
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default ProfileComponent;