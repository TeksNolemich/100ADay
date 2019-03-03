import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal {...this.props} dialogClassName={'centered'}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.day}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${this.props.videoid}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'dark'} onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
