import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss';

export default class SignUp extends Component {
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

    if (password !== confirmPassword) {
      alert("Passwords didn't match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
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

        <form>
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
