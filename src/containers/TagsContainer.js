import React from 'react';

import Tag from '../components/elements/Tag';

import '../assets/styles/containers/TagsContainer.scss';

const TagsContainer = (props) => {
  return (
    <div className="TagsContainer">
      <p>{props.title}</p>
      <div className="TagsContainer__tags">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  );
};

export default TagsContainer;
