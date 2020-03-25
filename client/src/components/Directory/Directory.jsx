import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectDirectory } from '../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

function Directory({ directory }) {
  const { sections } = directory;

  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
}

Directory.propTypes = {
  directory: PropTypes.shape({
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        linkUrl: PropTypes.string,
      })
    ),
  }),
};

const mapStateToProps = state => ({
  directory: selectDirectory(state),
});

export default connect(mapStateToProps)(Directory);
