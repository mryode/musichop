import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import userActions from '../../redux/user/userActions';

class FirebaseAuth extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
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
  checkUserSession: PropTypes.func,
};

const mapDispatchProps = dispatch => ({
  checkUserSession: () => dispatch(userActions.checkUserSession()),
});

export default connect(null, mapDispatchProps)(FirebaseAuth);
