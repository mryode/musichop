import React from 'react';
import PropTypes from 'prop-types';

import { ReactSVG } from 'react-svg';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

function CollectionPreview({ title, items, routeName, match, history }) {
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 3)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        {/* TODO redirect to collection's page onClick */}
        {/* eslint-disable-next-line */}
        <div
          className="collection-view-more"
          onClick={() => history.push(`${match.url}/${routeName}`)}
        >
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
  routeName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(CollectionPreview);
