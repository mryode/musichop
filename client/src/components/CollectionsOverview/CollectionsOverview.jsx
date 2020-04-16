import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.scss';

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          routeName={routeName}
          items={items}
        />
      ))}
    </div>
  );
}

CollectionsOverview.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      routeName: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

const mapStateToProps = state => ({
  collections: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
