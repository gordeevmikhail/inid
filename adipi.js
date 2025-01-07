import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

// Lazy load the App component
const App = lazy(() => import('./App'));

// Create a root container in the DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Define a fallback UI for the loading state
const LoadingMessage = () => <div>Loading...</div>;

// Render the App within a Suspense component
root.render(
  <Suspense fallback={<LoadingMessage />}>
    <App />
  </Suspense>
);
