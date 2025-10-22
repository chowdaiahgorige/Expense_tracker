import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalProvider } from './context/globalContext'; // <-- import provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider> {/* <-- wrap App with provider */}
      <GlobalStyle />
      <App />
    </GlobalProvider>
  </React.StrictMode>
);


