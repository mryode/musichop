import React from 'react';

import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/user/userActions';

class FirebaseAuth extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Get refernceObject
        const userRef = await createUserProfileDocument(userAuth);

        // Listen for changes
        userRef.onSnapshot(snapshot => {
          const snapshotData = snapshot.data();
          const currentUser = {
            id: snapshot.id,
            ...snapshotData,
          };

          setCurrentUser(currentUser);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // eslint-disable-next-line
    return this.props.render(auth);
  }
}

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchProps)(FirebaseAuth);
