import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

function CollectionPreview({ title, items }) {
  console.log('items', items);
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, name, imageUrl, price }) => (
            <CollectionItem
              key={id}
              imageUrl={imageUrl}
              name={name}
              price={price}
            />
          ))}
      </div>
    </div>
  );
}

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CollectionPreview;
