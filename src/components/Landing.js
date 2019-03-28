import React from 'react';
import UserLogin from '../containers/UserLogin';

function Landing() {
  return (
    <div className="container-fluid landing-container">
      <div className="row landing-top-row align-items-center">
        <div className="col landing-col">
          <p>PSc5 Trivia</p>
        </div>
      </div>
      <div className="row landing-bottom-row align-items-center justify-content-center">
        <UserLogin />
      </div>
    </div>
  );
}

export default Landing;
