import { ListGroup, Row, Col, Container, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import Moment from 'react-moment';

const NoteShow = ({ id, ntime, ndate, subject, body }) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col>
            {subject}
          </Col>
          <Col>
            {body}
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              Show
            </Button>

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Note Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Date: 
                  <Moment format=" MM-DD-YYYY">
                    {ndate}
                  </Moment>
                </p>
                <p>
                  Time: 
                  <Moment format=" hh:MM a">
                    {ntime}
                  </Moment>
                </p>
                <p>
                  Subject: {subject}
                </p>
                <p>
                  Notes: {body}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button>
                  Edit
                </Button>
                <br />
                <Button>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  )
}

export default NoteShow;