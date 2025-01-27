import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Buttons color="primary" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Buttons>
    </div>
  );
}

{
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
