import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Search from "./components/Search";
import React, {useState, useEffect} from 'react';



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  useEffect (() =>{
    fetch("https://635f96113e8f65f283b66901.mockapi.io/items").then(res => res.json()).then(res => setItems(res));
  }, []);

  const onAddToCard = (obj) =>{
    setCartItems(prev => [...prev, obj]);
  }; 

  return (
    <div className="wrapper clear">
      {cartOpened ? 
      <Drawer 
        items={cartItems}
        onClose={() => setCartOpened(false)} 
      /> 
      : null}

      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <Search/>
        </div>
        <div className="d-flex flex-wrap">
          {
            items.map(item => 
              <Card 
                title={item.name}
                price={item.price} 
                imageUrl={item.imageUrl}
                onClickFavorite={() => console.log(2)}
                onClickPlus={(obj) => onAddToCard(obj)}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
