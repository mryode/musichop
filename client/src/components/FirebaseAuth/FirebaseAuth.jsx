import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class FirebaseAuth extends React.Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Get refernceObject
        const userRef = createUserProfileDocument(userAuth);

        // Listen for changes
        userRef.onSnapshot(snapshot => {
          const snapshotData = snapshot.data();
          const currentUser = {
            id: snapshot.id,
            ...snapshotData,
          };

          this.setState({ currentUser });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
