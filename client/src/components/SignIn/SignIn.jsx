import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import userActions from '../../redux/user/userActions';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSignInSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <div className="form">
        <h2 className="form-title">I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSignInSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            id="email"
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

          <div className="form-buttons">
            <Button type="submit" onClick={this.handleSignInSubmit}>
              Sign In
            </Button>
            <Button type="button" onClick={googleSignInStart} isGoogleButton>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  googleSignInStart: PropTypes.func,
  emailSignInStart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(userActions.googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(userActions.emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
