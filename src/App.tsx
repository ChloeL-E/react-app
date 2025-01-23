import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Buttons color="primary" onClick={() => console.log("Clicked")}>
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
