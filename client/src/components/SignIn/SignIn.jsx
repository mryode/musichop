import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSignInSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="sign-in-title">I already have an account</h2>
        <span>Sign in with email and password</span>

        <form>
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

          <div className="sign-in-buttons">
            <Button type="submit" onClick={this.handleSignInSubmit}>
              Sign In
            </Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleButton>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
