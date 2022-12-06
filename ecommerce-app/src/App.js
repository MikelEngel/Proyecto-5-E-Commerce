import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Aoking E-Commerce</a>
      </header>
      <h1>Nuestros productos</h1>
      {data.products.map((product) => (
        <div>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
