import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import userActions from '../../redux/user/userActions';

class FirebaseAuth extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Get referenceObject
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
    const { children, passSignOutTo } = this.props;
    const headerWithLogout = React.Children.map(children, child => {
      if (
        child.type.displayName &&
        child.type.displayName.includes(passSignOutTo)
      ) {
        return React.cloneElement(child, { signOut: () => auth.signOut() });
      }
      return child;
    });
    return headerWithLogout;
  }
}

FirebaseAuth.propTypes = {
  children: PropTypes.node,
  passSignOutTo: PropTypes.string,
  setCurrentUser: PropTypes.func,
};

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(userActions.setCurrentUser(user)),
});

export default connect(null, mapDispatchProps)(FirebaseAuth);
