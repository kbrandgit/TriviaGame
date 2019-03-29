import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { gameState, addPlayer } from '../actions';

export class UserLogin extends Component {
  componentDidMount() {
    this.props.gameState();
  }
  
  constructor(props) {
    super(props);

    this.state = { name: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

 
  // Updates state with human player name
  onInputChange(event) {
    this.setState({ name: event.target.value }, () => {
    }); 
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addPlayer(this.state.name)
    this.props.history.push('/lobby')
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
            value={this.state.name}
            type="text"
            className="form-control-lg"
            placeholder="Limit of 10 characters"
          />
          <Link to={'/lobby'}>
            <input
              onClick={this.onFormSubmit}
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

function mapStateToProps({ gameData }) {
  return { gameData };
}

function mapDispatchToProps(dispatch) {
  //allows our functions to be dispatched to the middleware then reducers when the functions are invokes
  return bindActionCreators({ gameState, addPlayer }, dispatch); //({action creators}, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin));

//export default UserLogin;
