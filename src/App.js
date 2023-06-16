import { Routes, Route } from 'react-router-dom';
import './style/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import New from './components/New';
import NotFound from './components/NotFound';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <Header title="CryptoMarket"/>
        <main>
          <Routes>
            <Route exact path="/cryptomarket" element={<Catalog />} />	
            <Route exact path="/cryptomarket/detail/:currencyId" element={<Detail />} />	
            <Route exact path="/cryptomarket/currency/new" element={<New />} />	
            <Route path="/cryptomarket/*" element={<NotFound />} />	
          </Routes>
        </main>
      <Footer text = "&copy; Roberto Aguirre"/>
    </>
  );
}

export default App;

