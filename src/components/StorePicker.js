import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  /**
   * Use a constructor and bind goToStore
   * this.goToStore = this.goToStore.bind(this)
   * make goToStore a function goToStore (event) {}
   * 
   *                                  OR
   * 
   * Instead of declaring a method on the component (if we make goToStore a custom function)
   * we actually declare a property which is going to be set to an arrow function
   * and properties are bound to an instance rather than nothing then we will be able to access
   * "this" inside of goToStore
   */
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;