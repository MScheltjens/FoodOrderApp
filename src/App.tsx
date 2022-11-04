import Header from "./components/layout/header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { useState } from "react";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState<boolean>(false);

  const showCart = () => {
    setCartIsVisible(true);
  };
  const hideCart = () => {
    setCartIsVisible(false);
  };

  return (
    <>
      {cartIsVisible && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} onHideCart={hideCart} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
