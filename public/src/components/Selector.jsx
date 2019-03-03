import React from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import { Row, Container } from 'react-bootstrap';
import MyVerticallyCenteredModal from './VideoModal';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vid: '', video: 'Ha236I-ulzY', modalShow: false };
    this.setDayToState = this.setDayToState.bind(this);
  }

  setDayToState(e) {
    const day = e
      .toString()
      .slice(8, 10)
      .trim();
    const that = this;
    axios
      .get(`/videos`, { params: { vid: Number(day) } })
      .then(function(response) {
        let vidID = response.data[0].video;
        that.setState({
          vid: e.toString().slice(0, 10),
          video: vidID,
          modalShow: true,
        });
      })
      .catch(function(error) {
        console.log(error, ' the is the errror');
      });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <Container>
        <div className="jumbotron ">
          <Row className="justify-content-md-center">#100AbChallenge</Row>
        </div>
        <Row className="justify-content-md-center">
          <Calendar onClickDay={this.setDayToState} />
        </Row>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
          videoid={this.state.video}
          day={this.state.vid}
        />
      </Container>
    );
  }
}

export default Selector;
