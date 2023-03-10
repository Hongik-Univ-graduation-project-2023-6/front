import GlobalStyle from './GlobalStyle';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');

if (!rootNode) {
  throw new Error('Failed to find the root node');
}

const root = ReactDOM.createRoot(rootNode);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
