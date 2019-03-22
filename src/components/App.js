import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    /** 1. Take a copy of the existing state 
     *  beacuse we never want to reach into state and modify directly - MUTATION
     *  (when you reach directly into an object that can cause issues with 
     *  performance and things updating out of order)
     * */
    const fishes = { ...this.state.fishes }; // shallow copy

    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({ fishes });
    /**
     * setState({fishes: fishes})
     * if key and value are the same, then pass only one as per ES6
     */
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;