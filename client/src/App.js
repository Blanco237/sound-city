import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

//Component Imports
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import Home from './pages/home/Home';
import Upload from './pages/upload/Upload';
import Loader from './components/shared/Loader/Loader';
import Library from './pages/library/Library';

//Providers
import { UserProvider } from './Context/UserContext';
import Notifications from 'react-notify-toast'
import { LoadingProvider } from './Context/LoadingContext';
import { ROUTES } from './utils/statics';
import Explore from './pages/explore/Explore';
import Play from './pages/play/Play';

function App() {
  return (
    <>
      <UserProvider >
        <LoadingProvider>
          <Notifications />
          <Router>
          <Header />
            <Routes>
              <Route exact path={'/'} element={<Navigate to={'/home'} replace={true}/>} />
              <Route exact path={ROUTES.HOME} element={<Home />} />
              <Route exact path={ROUTES.LIBRARY} element={<Library />} />
              <Route path={ROUTES.UPLOAD} element={<Upload />} />
              <Route exact path={ROUTES.EXPLORE} element={<Explore />} />
              <Route path={ROUTES.PLAY} element={<Play />}/>
            </Routes>
          <Footer />
          </Router>
          <Loader />
        </LoadingProvider>
      </UserProvider>
    </>
  );
}

export default App;
