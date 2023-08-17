import { useEffect, useState } from 'react';
import './App.css';
import Loading from './pages/loading';
import AppRoutes from './routes';
import { AppDataProvider } from './providers/appDataProvider';
// import CookiePolicyPopUp from './components/cookiepolicypopup';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.cssText = loading ? 'overflow:hidden' : 'overflow:auto';
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    // loading ? (
    //   <Loading />
    // ) : (
    <AppDataProvider>
      {loading && <Loading />}
      {/* <CookiePolicyPopUp /> */}
      <AppRoutes />
    </AppDataProvider>
    // );
  );
}

export default App;
