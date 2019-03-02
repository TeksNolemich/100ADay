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
    e.preventDefault();
    const that = this;
    axios
      .get(`/videos`, { params: { vid: that.state.value } })
      .then(function(response) {
        let vidID = response.data[0].video;
        that.setState({ video: vidID });
      })
      .catch(function(error) {
        console.log(error, ' the is the errror');
      });
  }

  handleChange(e) {
    this.setState({ value: event.target.value });
  }

  render() {
    let options = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
    ];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your day:
            <select value={this.state.value} onChange={this.handleChange}>
              {options.map(el => {
                return (
                  <option value={el} key={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.state.video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Selector;
