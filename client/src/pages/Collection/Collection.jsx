import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './Collection.scss';

function Collection({ collection }) {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

Collection.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      collectionId: PropTypes.string,
    }),
  }),
  collection: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.number,
      })
    ),
  }),
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId, state),
});

export default connect(mapStateToProps)(Collection);
