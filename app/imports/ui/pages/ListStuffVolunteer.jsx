import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Stuffs } from '../../api/stuff/StuffCollection';
import StuffItemVolunteer from '../components/StuffItemVolunteer';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';

/* Renders a table containing all of the Stuff documents. Use <StuffItemVolunteer> to render each row. */
const ListStuffVolunteer = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { stuffs, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Stuffs.subscribeStuffVolunteer();
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const items = Stuffs.find({}).fetch();
    return {
      stuffs: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id={PAGE_IDS.LIST_STUFF_VOLUNTEER} className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center"><h2>List Stuff (Volunteer)</h2></Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Condition</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {stuffs.map((stuff) => <StuffItemVolunteer key={stuff._id} stuff={stuff} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStuffVolunteer;
