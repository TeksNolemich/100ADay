import React from 'react';
import axios from 'axios';
import Calendar from 'react-calendar/dist/entry.nostyle';
import AppExample from './VideoModal';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { video: 'Ha236I-ulzY' };
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
        that.setState({ video: vidID });
      })
      .catch(function(error) {
        console.log(error, ' the is the errror');
      });
  }

  render() {
    return (
      <div>
        <Calendar onClickDay={this.setDayToState} />
        <AppExample videoDayId={this.state.video} />
      </div>
    );
  }
}

export default Selector;
