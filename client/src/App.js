import './App.css';
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import Home from './pages/home/Home';
import Upload from './pages/upload/Upload';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Upload />
      <Footer />
    </>
  );
}

export default App;
