import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  )




/* {  const [alertVisible, setAlertVisibility] = useState(false);


 return (
    <div>
      <Like onClick={() => console.log("clicked")} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Buttons color="secondary" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Buttons>
    </div>
  );
}
*/


  /*
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Newcastle", "Sunderland", "Hexham", "Gateshead", "Morpeth"];

  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}*/
}

{
  /* example from Alert.tsx to go above to demo passing children to a component*/
}
{
  /* <div><Alert>Hello <span>World</span></Alert></div> */
}

export default App;
