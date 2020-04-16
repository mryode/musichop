import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import userActions from '../../redux/user/userActions';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    // eslint-disable-next-line
    if (password !== confirmPassword) {
      alert("Passwords didn't match");
    } else {
      signUpStart({ displayName, email, password, confirmPassword });
    }
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="form">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleInputChange}
            label="Display Name"
          />
          <FormInput
            required
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            label="Email"
          />
          <FormInput
            required
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleInputChange}
            label="Password"
          />
          <FormInput
            required
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={confirmPassword}
            onChange={this.handleInputChange}
            label="Confirm Password"
          />
          <div className="form-buttons">
            <Button type="submit" onClick={this.handleSubmit}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUpStart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials =>
    dispatch(userActions.signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
