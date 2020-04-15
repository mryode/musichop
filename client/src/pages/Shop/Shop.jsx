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
import WithSpinner from '../../components/WithSpinner/WithSpinner';

import './Shop.scss';

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.setState({ loading: true });

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    const CollectionWithSpinner = WithSpinner(Collection);
    const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
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
