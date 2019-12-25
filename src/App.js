import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';
import Preview from './components/Preview';
import markupOnStartup from './markupOnStartup';

const App = () => {
  const [currentPreview, updatePreview] = useState(markupOnStartup);

  return (
    <div id="container">
      <Editor markupOnStartup={markupOnStartup} updatePreview={updatePreview} />
      <Preview currentPreview={currentPreview} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
