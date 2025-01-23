import { useState } from "react";

//props or properties are the inputs to our code. pass an object with two properties
// {items: [], heading: string}. Define various properties and their types using type annotation
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // no for loops allowed in jsx so to loop through a list and display the items dynamically - variable items moved to App.tsx
  // we can us the map() function to convert each item in the items array to a list item and use and arrow function + jsx {} to display each item.

  // Hook - a function that allows you to tap into built in function in react - tells react that this component can have data/state thats likely to change
  const [selectedIndex, setSelectedIndex] = useState(-1); // -1 means no item is selected to begin with

  return (
    // checks if the length of the array === 0 and displays a message if it is
    <>
      <h1>{heading}</h1>
      {/* checks if length of items array is === 0 and if true displays message "None found", if false will display nothing */}
      {items.length === 0 && <p>None found</p>}
      <ul className="list-group">
        {/* uses function handleClick when list item is clicked */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index // adds class dynamically
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
