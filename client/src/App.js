import './App.css';

import { UserProvider } from './Context/UserContext';


import Notifications from 'react-notify-toast'

import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import Home from './pages/home/Home';
import Upload from './pages/upload/Upload';
import Loader from './components/shared/Loader/Loader';
import { LoadingProvider } from './Context/LoadingContext';

function App() {
  return (
    <>
      <UserProvider >
        <LoadingProvider>
          <Notifications />
          <Header />
          {/* <Home /> */}
          <Upload />
          <Footer />
          <Loader />
        </LoadingProvider>
      </UserProvider>
    </>
  );
}

export default App;
