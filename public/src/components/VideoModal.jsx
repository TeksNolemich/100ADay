import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
            src={`https://www.youtube.com/embed/${this.props.videoID}`}
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

class AppExample extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    // console.log(this.props.videoDayId, ' the video id handed down');
    return (
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
          videoID={this.props.videoDayId}
        />
      </ButtonToolbar>
    );
  }
}

export default AppExample;
