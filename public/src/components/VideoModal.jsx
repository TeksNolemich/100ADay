import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${this.props.videoid}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
