import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = state => ({
  isLoading: !selectIsCollectionsLoaded(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(Collection);
