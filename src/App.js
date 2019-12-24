import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';
import Preview from './components/Preview';

const markupOnStartup = '# Heading 1';

const App = () => {
  const [currentPreview, updatePreview] = useState(markupOnStartup);

  return (
    <div>
      <Editor markupOnStartup={markupOnStartup} updatePreview={updatePreview} />
      <Preview currentPreview={currentPreview} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
