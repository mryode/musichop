import React from 'react';
import PropTypes from 'prop-types';

import './CollectionItem.scss';

function CollectionItem({ imageUrl, name, price }) {
  return (
    <div className="collection-item">
      <div
        className="collection-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item-footer">
        <span className="collection-item-name">{name}</span>
        <span className="collection-item-price">{price}</span>
      </div>
    </div>
  );
}

CollectionItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
};

export default CollectionItem;
