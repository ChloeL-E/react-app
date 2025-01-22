function ListGroup() {
  const items = ["Newcastle", "Sunderland", "Hexham", "Gateshead", "Morpeth"];
  // no for loops allowed in jsx so to loop through a list and display the items dynamically
  // we can us the map() function to convert each item in the items array to a list item and use and arrow function + jsx {} to display each item.
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
