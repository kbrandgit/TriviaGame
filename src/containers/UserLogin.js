import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gameState from '../index.js'

export class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    //this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Updates state with human player name
  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state.term)
    //this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="col form-col">
        <div className="form-group form-custom">
          <div>
            <label
              style={{
                color: 'white',
                fontSize: '42px',
                fontFamily: 'Tajawal',
                marginBottom: '60px'
              }}
            >
              Enter a username and ready up!
            </label>
          </div>
          <input
            onChange={this.onInputChange}
            value={this.state.term}
            type="text"
            className="form-control-lg"
            placeholder="Rickitikkitavi"
          />
          <Link to={'/Lobby'}>
            <input
              type="submit"
              value="Ready!"
              className="btn-lg btn-primary px-5"
              style={{ marginLeft: '40px' }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default UserLogin;
