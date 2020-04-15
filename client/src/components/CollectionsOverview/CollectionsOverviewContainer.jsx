import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shopSelectors';

import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = state => ({
  isLoading: selectIsCollectionsFetching(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
