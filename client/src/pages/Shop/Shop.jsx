import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import shopActions from '../../redux/shop/shopActions';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';

import './Shop.scss';

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

Shop.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object,
  }),
  updateCollections: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(shopActions.updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
