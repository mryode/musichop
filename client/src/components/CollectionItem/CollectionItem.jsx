import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import cartActions from '../../redux/cart/cartActions';

import Button from '../Button/Button';

import './CollectionItem.scss';

function CollectionItem({ item, addItem }) {
  const { imageUrl, name, price } = item;
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
      <Button inverted onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
}

CollectionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }),
  addItem: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(cartActions.addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
