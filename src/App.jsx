import { Calculator } from './components/calculator';
import { Currency } from './components/Currency';
import Header from './components/Header.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="container mx-auto mt-20 pl-5 pr-5">
        <a href="#calculator">Go to Calculator</a>
        <Header />
        <div className="mt-10 flex md:w-2/3 mx-auto">
          <Currency />
        </div>
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
