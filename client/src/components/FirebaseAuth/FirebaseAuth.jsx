import React from 'react';

import { auth } from '../../firebase/firebase.utils';

export default class FirebaseAuth extends React.Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log('user', user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    console.log('auth', auth);

    // eslint-disable-next-line
    return this.props.render(currentUser, auth);
  }
}
