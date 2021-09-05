import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="5b39765b-c556-4e37-86ff-b95646da0f29" language="en-US">
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
