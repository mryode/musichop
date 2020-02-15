import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

import { sections } from '../../products';

function Directory() {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Directory;
