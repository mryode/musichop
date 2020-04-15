import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import shopActions from '../../redux/shop/shopActions';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionContainer from '../Collection/CollectionContainer';

import './Shop.scss';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
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
  fetchCollectionsStartAsync: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () =>
    dispatch(shopActions.fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
