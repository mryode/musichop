import React from 'react';
import PropTypes from 'prop-types';

import { ReactSVG } from 'react-svg';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

function CollectionPreview({ title, items }) {
  console.log('items', items);
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 3)
          .map(({ id, name, imageUrl, price }) => (
            <CollectionItem
              key={id}
              imageUrl={imageUrl}
              name={name}
              price={price}
            />
          ))}

        <div className="collection-view-more">
          <ReactSVG
            className="collection-view-more-icon"
            src={`${process.env.PUBLIC_URL}/icons/view-more-arrow.svg`}
          />
          <h1 className="collection-view-more-text">VIEW MORE</h1>
        </div>
      </div>
    </div>
  );
}

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CollectionPreview;
