import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import samsungImg from './assets/samsung.jpg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Components/Products/product'

function App() {
  return (
    <div className="App">
      <img src={ samsungImg } alt="Apple" style={{ width: '100px' }} />
      <br />
      <br />
      <Product />
    </div>
  );
}

export default App
