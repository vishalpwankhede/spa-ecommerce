import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './components/ItemCard';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
const API_BASE = import.meta.env.VITE_API_URL;

function App() {
  const [items, setItems] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/items`)
      .then((res) => {
        console.log('res.status:', res.status);
        return res.text();
      })
      .then((text) => {
        console.log('Raw response:', text);
        const data = JSON.parse(text);
        setItems(data);
        setDisplayed(data);
      })
      .catch((err) => {
        console.error('Fetch failed:', err);
      });
  }, []);
  
  

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setDisplayed(
      items.filter(item =>
        item.Title.toLowerCase().includes(q) || item["Variant SKU"].toLowerCase().includes(q)
      )
    );
  };

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (item) =>
    setCart(cart.filter((i) => i["Variant SKU"] !== item["Variant SKU"]));

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Cart cartItems={cart} onRemove={removeFromCart} />
        <div className='search'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className='container'>
        <div className="item-list row">
          {displayed.map(item => (
            item.Title && <ItemCard key={item["Variant SKU"]} item={item} onAdd={addToCart} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;