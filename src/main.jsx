// React is now available globally via CDN
const { React, ReactDOM } = window;

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  )
);