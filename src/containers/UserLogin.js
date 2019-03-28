import React, { Component } from 'react';

export class UserLogin extends Component {
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
            type="text"
            className="form-control-lg"
            placeholder="Rickitikkitavi"
          />
          <input
            type="submit"
            value="Ready!"
            className="btn-lg btn-primary px-5"
            style={{ marginLeft: '40px' }}
          />
        </div>
      </div>
    );
  }
}

export default UserLogin;
