import React from 'react';

const Editor = props => {
  return (
    <textarea
      id="editor"
      onChange={evt => props.updatePreview(evt.target.value)}
    >
      {props.markupOnStartup}
    </textarea>
  );
};

export default Editor;
