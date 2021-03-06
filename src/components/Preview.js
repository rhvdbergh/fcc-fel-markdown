import React from 'react';

const Preview = props => {
  function createMarkup() {
    return { __html: marked(props.currentPreview, { breaks: true }) };
  }
  return <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default Preview;
