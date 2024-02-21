import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const Feedback = ({event, formName}) => (
  <Container>
    <Form id={formName}>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Organization</Form.Label>
            <Form.Control type="text" value={event.organizer} disabled />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Organization Email</Form.Label>
            <Form.Control type="email" value="volunteer@example.com" disabled />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" value="John" disabled />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" value="Smith" disabled />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value="john@foo.com" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      {/*<Button variant="primary" type="submit">*/}
      {/*  Submit*/}
      {/*</Button>*/}
    </Form>
  </Container>
);

export default Feedback;
