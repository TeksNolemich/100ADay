import React from 'react';
import axios from 'axios';
class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, video: 'Ha236I-ulzY' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    //take e and send it as the request for the corresponding video
    axios
      .get('/videos')
      .then(function(response) {
        //on return set video state with response from data base
        console.log(response, ' the response');
      })
      .catch(function(error) {
        console.log(error, ' the is the errror');
      });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your day:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ha236I-ulzY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Selector;
