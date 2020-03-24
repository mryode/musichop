import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './Shop.scss';

function Shop({ collections }) {
  return (
    <div className="shop-page">
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

Shop.propTypes = {
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
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(Shop);
