import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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

function App() {
  return (
    <>
      <UserProvider >
        <LoadingProvider>
          <Notifications />
          <Header />
          <Router>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.LIBRARY} element={<Library />} />
              <Route path={ROUTES.EXPLORE} element={<div className='w-screen h-screen grid place-items-center'> Explore Page, Coming soon</div>} />
              <Route path={ROUTES.UPLOAD} element={<Upload />} />
            </Routes>
          </Router>
          <Footer />
          <Loader />
        </LoadingProvider>
      </UserProvider>
    </>
  );
}

export default App;
