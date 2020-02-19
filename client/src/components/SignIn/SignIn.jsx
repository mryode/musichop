import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './SignIn.scss';

export default class SignIn extends Component {
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

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
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
            <Button type="button" onClick={signInWithGoogle} isGoogleButton>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
