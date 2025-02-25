import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Groceries" },
    { id: 4, description: "ddd", amount: 40, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        heading="Expenses List"
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

/*function App() {
  return (
    <div>
      <Form />
    </div>
  );
}*/

/*function App() {
  return (
    <ExpandableText maxChars={25}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
      incidunt, tempora cumque itaque exercitationem error odio alias officia
      animi pariatur commodi consectetur nihil ab porro repudiandae atque a
      totam eos consequuntur similique ipsum! Tenetur architecto, rem quibusdam
      consectetur blanditiis at illo reprehenderit odio fugit pariatur quam.
      Dignissimos laudantium dolor, quos blanditiis quasi, sapiente maiores
      magnam optio libero aliquid, voluptates non vitae. Repudiandae quis amet
      quaerat ratione consequuntur quas enim eius corporis explicabo quod,
      magnam esse velit et fugit molestias soluta sapiente aut dolores
      reiciendis omnis rerum sint repellendus nostrum porro! Totam aut quia
      tenetur quod voluptatibus, labore enim cupiditate maxime.
    </ExpandableText>
  );
}*/

/*function App() {
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  )*/

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
        heading="Expense List"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}*/

{
  /* example from Alert.tsx to go above to demo passing children to a component*/
}
{
  /* <div><Alert>Hello <span>World</span></Alert></div> */
}

export default App;
