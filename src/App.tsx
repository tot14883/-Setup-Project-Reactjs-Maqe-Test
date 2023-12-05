import { Suspense } from 'react';
import './App.css';
import PageLoader from './components/PageLoader';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
