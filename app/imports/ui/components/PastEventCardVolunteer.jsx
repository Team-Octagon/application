import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import EventFeedbackModal from './EventFeedbackModal';
import { Events } from '../../api/event/Events';

const PastEventCardVolunteer = ({ eventId }) => {
  const event = Events.findDoc(eventId);

  return (
    <Row className="p-2 border border-1 rounded-2 my-3">
      <Col sm={2}>
        <h5>{event.title}</h5>
      </Col>
      <Col lg={1}>
        <p>{event.eventDate.toLocaleDateString('en-US')}</p>
      </Col>
      <Col>
        <p>{event.description}</p>
      </Col>
      <Col>
        <p>Location: {event.location}</p>
      </Col>
      <Col lg={1}>
        <EventFeedbackModal eventId={eventId} />
      </Col>
    </Row>
  );
};

PastEventCardVolunteer.propTypes = {
  eventId: PropTypes.string.isRequired,
};

export default PastEventCardVolunteer;
