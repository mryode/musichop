import React, { Component } from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import { ShopsData } from '../../products';

import './Shop.scss';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopsData,
    };
  }

  render() {
    const { collections } = this.state;
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
}
