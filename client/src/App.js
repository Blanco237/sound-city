import './App.css';
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <div style={{ height: '100vh' }} ></div>
      <Footer />
    </>
  );
}

export default App;
